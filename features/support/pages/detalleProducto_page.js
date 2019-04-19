const {Selector} = require('testcafe');

exports.detalleProducto = {
    
    botonAgregarBolsa: function() {
        return Selector('.fb-product-cta__controls--actions--choose').with({ boundTestRun: testController })
    },
    botonVerBolsa: function() {
        return Selector('#fb-modal-add > div.fb-added-to-basket__footer > div.fb-added-to-basket__ctas > a').with({ boundTestRun: testController })
        
    },
    btnBolsa: function() {
        return Selector('#header > nav > div.fb-masthead__util-bar > div > div.fb-masthead__util-bar__util-wrapper > div.fb-masthead-item__main.fb-masthead-basket').with({ boundTestRun: testController })
    }
}
