import BasePage from "./basePage";

class SavedAddressesPage extends BasePage{
    static get url() {
        return "/address/saved"
      }
    static get addNewAddressBtn(){
        return cy.get("[aria-label='Add a new address']")
    }
    static get LastRowCells(){
        return cy.get("mat-row[role='row']:last-child > mat-cell")
    }

}


export default SavedAddressesPage