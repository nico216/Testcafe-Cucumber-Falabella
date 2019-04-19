const {Selector} = require('testcafe');

exports.falabellaListadoProducto = {

    linkProducto: function(seleccionarProducto) {
        return Selector('.pod-body').with({ boundTestRun: testController }).find('a').withText(seleccionarProducto)        
    },
}