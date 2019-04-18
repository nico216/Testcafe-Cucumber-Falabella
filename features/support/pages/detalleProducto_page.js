const {Selector} = require('testcafe');

exports.detalleProducto = {
    
    botonAgregarBolsa: function() {
        return Selector('.fb-product-cta__controls--actions--choose').with({ boundTestRun: testController })
    },
    botonVerBolsa: function() {
        return Selector('#fb-modal-add > div.fb-added-to-basket__footer > div.fb-added-to-basket__ctas > a').with({ boundTestRun: testController })
        
    }
}
