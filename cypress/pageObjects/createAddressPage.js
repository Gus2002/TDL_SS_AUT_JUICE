import BasePage from "./basePage";

class CreateAddressPage extends BasePage{
    static get url() {
        return "/address/create"
      }
    static get addNewAddressBtn(){
        return cy.get("[aria-label='Add a new address']")
    }
    static get countryInput(){
        return cy.get('#mat-input-3')
    }
    static get nameInput(){
        return cy.get('#mat-input-4')
    }
    static get mobileInput(){
        return cy.get('#mat-input-5')
    }
    static get zipCodeInput(){
        return cy.get('#mat-input-6')
    }
    static get addressInput(){
        return cy.get('#address')
    }
    static get cityInput(){
       return cy.get('#mat-input-8')
    }
    static get stateInput(){
        return cy.get('#mat-input-9')
    }
    static get submitBtn(){
        return cy.get('#submitButton')
    }
}


export default CreateAddressPage