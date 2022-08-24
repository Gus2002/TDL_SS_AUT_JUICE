import BasePage from "./basePage";

class OrderSummaryPage extends BasePage{
    static get url() {
        return "/order-summary"
      }
    static get checkoutBtn(){
        return cy.get('#checkoutButton')
    }
   

}

export default OrderSummaryPage 