/**
 * File: resultPage.js
 * Autor: Renato Reis
 * Data: 03/08/2020
 */

class ResultPage {
    // define os elementos
    get resultadoLbl() { return $('div#rso div:nth-child(1) > div > div.r > a > h3') };

    // métodos dos elementos
    resultado() {
        this.resultadoLbl.waitForDisplayed();
        return this.resultadoLbl.getText();
    }

}

module.exports = ResultPage