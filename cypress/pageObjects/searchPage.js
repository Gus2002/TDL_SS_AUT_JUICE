import BasePage from "./basePage";

class SearchPage extends BasePage{
    static get url() {
        return "/search"
      }
    static get searchIcon(){
        return cy.get("[role='img']").contains("search")
    }
    static get searchInput(){
        return cy.get("#mat-input-0")
    }
    static productImg(name){
       let selector = "[alt='"+name+"']"
       return cy.get(selector) 
    }
    static get productCard(){
        return cy.get("h1 + div")
    }
    static get closeCard(){
        return cy.get('.close-dialog > .mat-button-wrapper > span')
    }
    static get reviewInput(){
        return cy.get("[aria-label='Text field to review a product']")
    }
    static get expandReviews(){
        return cy.get("mat-expansion-panel-header > span").eq(0)
    }
    static get review(){
        return cy.get("cite + p").eq(0)
    }
}

export default SearchPage