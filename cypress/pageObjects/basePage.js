class BasePage {
    static get url() {
      return "/";
    }
    static visit() {
        return cy
          .visit(this.url)
      }
    static get accountBtn(){
        return cy.get("#navbarAccount")
    }
    static get loginBtn(){
        return cy.get("#navbarLoginButton")
    }
    static get closeWelcome(){
        return cy.get("[aria-label='Close Welcome Banner']")
    }
    static get accountName(){
        return cy.get("button[aria-label='Go to user profile'] > span")
    }
    static get meWantIt(){
        return cy.get("[aria-label='dismiss cookie message']")
    }
    static get yourBasket(){
        return cy.get("[routerlink='/basket']")
    }
    static get ordersAndPaymentsBtn(){
        return cy.get("button[aria-label='Show Orders and Payment Menu']")
    }
    static get mySavedAddressesBtn(){
        return cy.get("[aria-label='Go to saved address page']")
    }


}

export default BasePage;