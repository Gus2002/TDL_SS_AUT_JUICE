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
}

export default SearchPage