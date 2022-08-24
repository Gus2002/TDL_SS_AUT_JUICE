import BasePage from "./basePage";

class DeliveryMethodPage extends BasePage{
    static get url() {
        return "/delivery-method"
      }
    static get standardDeliveryBtn(){
        return cy.get("span[class='mat-radio-container'] > span[class='mat-radio-outer-circle']").eq(2)
    }
    static get continueBtn(){
        return cy.get('.nextButton')
    }

}

export default DeliveryMethodPage