import BasePage from "./basePage";

class SavedPaymentMethodsPage extends BasePage{
    static get url() {
        return "/saved-payment-methods"
      }
    static get addNewCard(){
        return cy.get("mat-expansion-panel-header[role='button']")
    }
    static get nameInput(){
        return cy.get('#mat-input-3')
    }
    static get cardInput(){
        return cy.get('#mat-input-4')
    }
    static get expiryMonthBtn(){
        return cy.get("div > select").eq(0)
    }
    static get expiryYearBtn(){
        return cy.get("div > select").eq(1)
    }
    static get submitButton(){
        return cy.get("#submitButton")
    }
    static get lastRowCells(){
        return cy.get("mat-row[role='row']:last-child > mat-cell")
    }

}


export default SavedPaymentMethodsPage