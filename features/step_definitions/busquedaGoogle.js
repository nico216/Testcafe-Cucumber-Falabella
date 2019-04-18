const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const paginaDeBusqueda = require('../support/pages/busquedaGoogle_page.js')
const paginaMainFalabella = require('../support/pages/falabellaMain_page.js')

Given('que navego a google', async function () {
    await testController.navigateTo('http://www.google.cl/')
});
When('ingreso en campo de busqueda la palabra {string}', async function (valorBusqueda) {
    await testController.typeText(paginaDeBusqueda.BusquedaGoogle.campoBusqueda(), valorBusqueda)
});
When('presiono el boton buscar', async function () {
    await testController.click(paginaDeBusqueda.BusquedaGoogle.botonBuscar())
});
Then('google me redirige a la pagina de resultados mostrando en las opciones el texto {string}', async function (texto_g) {
   await testController.expect(paginaDeBusqueda.BusquedaGoogle.campoMensaje().innerText).contains(texto_g)
});
Then('hago clic en el resultado que contiene la palabra {string}', async function (criterioDeBusqueda) {
    await testController.click(paginaDeBusqueda.BusquedaGoogle.linkFalabella(criterioDeBusqueda))
});
Then('google me derigire a www.falabella.com que contiene el texto {string}', async function (mensaje) {
    await testController.expect(paginaDeBusqueda.BusquedaGoogle.mensajeConfirmacion().innerText).contains(mensaje)
});
Then('ingreso en el campo de busqueda la palabra {string} y presiono la tecla Enter', async function (valorBusquedaFalabella) {
    await testController.typeText(paginaMainFalabella.falabellaMain.busquedaFalabella(), valorBusquedaFalabella)
    .pressKey('enter')
});
