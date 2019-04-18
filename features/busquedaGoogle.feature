Feature: Busqueda en Google

    Como un usuario
    Quiero hacer una busqueda en google
    Para que google me redirija e la pagina de resultados

    Scenario: Realizar una busqueda en google
        Given que navego a google
        When ingreso en campo de busqueda la palabra "falabella"
        And presiono el boton buscar 
        Then google me redirige a la pagina de resultados mostrando en las opciones el texto "Herramientas"
        And hago clic en el resultado que contiene la palabra "Falabella.com - Mejor Compra Online"
        Then google me derigire a www.falabella.com que contiene el texto "VENTA TELEFÓNICA"
        And ingreso en el campo de busqueda la palabra "PS4" y presiono la tecla Enter