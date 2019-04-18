const {Selector} = require('testcafe');

exports.falabellaMain = {
    busquedaFalabella: function() {
        return Selector('#searchQuestionSolr').with({ boundTestRun: testController })
    }
}