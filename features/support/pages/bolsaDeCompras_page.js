const {Selector} = require('testcafe');

exports.bolsaDeCompras = {

    comboBoxAgregarUnidad: function() {
        return Selector('.fb-quantity-input__plus').with({ boundTestRun: testController })
    },
    comboBoxGarantia: function() {
        return Selector('#fb-basket-products > div.fb-basket-product-list > section > section > section > div > div > div > div > form > div').with({ boundTestRun: testController })
    },
    opcionGarantia: function() {
        return this.comboBoxGarantia().find('a').with({ boundTestRun: testController })
    },
    botonComprar: function() {
        return Selector('body > div.site-wrapper > main > div.fb-basket > div.fb-basket__order-container > div.fb-basket__order-container__summary > div > div.fb-order-status > form > div:nth-child(4) > div.fb-order-status__cta-group > div.fb-order-status__cta > button').with({ boundTestRun: testController })
    }
}

