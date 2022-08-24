import BasePage from "./basePage";

class OrderCompletionPage extends BasePage{
    static get url() {
        return "/order-completion"
      }
    
   static get confirmMsg(){
    return cy.get("h1[class='confirmation']")
   }

}

export default OrderCompletionPage