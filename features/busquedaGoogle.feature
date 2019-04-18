Feature: Busqueda en Google

    Como un usuario
    Quiero hacer una busqueda en google
    Para que google me redirija e la pagina de resultados

    Scenario: Realizar una busqueda en google
        Given que navego a google
        When ingreso en campo de busqueda la palabra "falabella"
        And presiono el boton buscar 
        And hago clic en el resultado que contiene la palabra "Falabella.com - Mejor Compra Online"
        Then ingreso en el campo de busqueda la palabra "PS4" y presiono la tecla Enter
        And hago clic en el producto que dice "PlayStation 4 VR Worlds Bundle"
        And presiono boton Agregar a la Bolsa de Compras
        And presiono boton Ver Bolsa de Compras
        Then aumento la cantidad del producto a dos unidades
        And selecciono ganantia "2 Años $ 49.190"
        And presiono boton comprar
        