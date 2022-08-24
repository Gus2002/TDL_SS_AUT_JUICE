import BasePage from "./basePage";


class BasketPage extends BasePage{
    static get url() {
        return "/basket"
      }
    static get checkoutBtn(){
        return cy.get('#checkoutButton')
    }

}

export default BasketPage