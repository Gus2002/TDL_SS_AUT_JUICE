import BasePage from "./basePage";

class PaymentOptionsPage extends BasePage{
    static get url() {
        return "/payment"
      }
    
    static get continueBtn(){
        return cy.get(".nextButton")
    }
    static get selectCard(){
        return cy.get("#mat-radio-44")
    }

}

export default PaymentOptionsPage