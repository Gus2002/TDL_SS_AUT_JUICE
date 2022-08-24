import BasePage from "./basePage";

class SelectAddressPage extends BasePage{
    static get url() {
        return "/address"
      }
    static get selectRadio(){
        return cy.get('.mat-radio-outer-circle')
    }
    static get continueBtn(){
        return cy.get("[aria-label='Proceed to payment selection']")
    }

}






export default SelectAddressPage