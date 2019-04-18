const {Selector} = require('testcafe');

exports.BusquedaGoogle = {
    campoBusqueda: function() {
        return Selector('[name="q"]').with({ boundTestRun: testController })
    },
    botonBuscar: function() {
        return Selector('[name="btnK"]').with({ boundTestRun: testController })
    },
    linkFalabella: function(criterioDeBusqueda) {
        return Selector('#rso').with({ boundTestRun: testController }).find('a').find('h3').withText(criterioDeBusqueda)        
    },
   /*campoMensaje: function() {
        return Selector('#hdtb-tls').with({ boundTestRun: testController })
    },
    mensajeConfirmacion: function() {
        return Selector('#desktop-true').with({ boundTestRun: testController })
    }    */
}


