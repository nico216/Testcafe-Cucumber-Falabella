const { Given, When, Then } = require('cucumber');
const { Selector } = require('testcafe');
const paginaDeBusqueda = require('../support/pages/busquedaGoogle_page.js')
const paginaMainFalabella = require('../support/pages/falabellaMain_page.js')
const paginaListadoProductoFalabella = require('../support/pages/falabellaProduct_page.js')
const paginaDetalleProducto = require('../support/pages/detalleProducto_page.js')
const paginaBolsaDeCompras = require('../support/pages/bolsaDeCompras_page.js')

Given('que navego a google', async function () {
    await testController.navigateTo('http://www.google.cl/')
});
When('ingreso en campo de busqueda la palabra {string}', async function (valorBusqueda) {
    await testController.typeText(paginaDeBusqueda.BusquedaGoogle.campoBusqueda(), valorBusqueda)
});
When('presiono el boton buscar', async function () {
    await testController.click(paginaDeBusqueda.BusquedaGoogle.botonBuscar())
});
Then('hago clic en el resultado que contiene la palabra {string}', async function (criterioDeBusqueda) {
    await testController.click(paginaDeBusqueda.BusquedaGoogle.linkFalabella(criterioDeBusqueda))
});
Then('ingreso en el campo de busqueda la palabra {string} y presiono la tecla Enter', async function (valorBusquedaFalabella) {
    await testController.typeText(paginaMainFalabella.falabellaMain.busquedaFalabella(), valorBusquedaFalabella)
    .pressKey('enter')
});
Then('hago clic en el producto que dice {string}', async function (seleccionarProducto) {
    const btnNo = Selector('#acc-alert-deny')
    await testController
    .wait(2000)
    .click(btnNo)
    .click(paginaListadoProductoFalabella.falabellaListadoProducto.linkProducto(seleccionarProducto))
});
Then('presiono boton Agregar a la Bolsa de Compras', async function () {
    await testController.click(paginaDetalleProducto.detalleProducto.botonAgregarBolsa())
});
Then('presiono boton Ver Bolsa de Compras', async function () {    
    await testController
        .wait(2000)
        .click(paginaDetalleProducto.detalleProducto.btnBolsa())
        .click(paginaDetalleProducto.detalleProducto.btnBolsa())
    /*.setNativeDialogHandler(() => true)
    .click(paginaDetalleProducto.detalleProducto.botonVerBolsa())*/
});

Then('aumento la cantidad del producto a dos unidades', async function () {
    await testController.click(paginaBolsaDeCompras.bolsaDeCompras.comboBoxAgregarUnidad())
});
Then('selecciono ganantia {string}', async function (garantia) {
    await testController
    .click(paginaBolsaDeCompras.bolsaDeCompras.comboBoxGarantia())
    .click(paginaBolsaDeCompras.bolsaDeCompras.opcionGarantia().withText(garantia))
});

Then('presiono boton comprar', async function () {
    await testController.click(paginaBolsaDeCompras.bolsaDeCompras.botonComprar())
});




