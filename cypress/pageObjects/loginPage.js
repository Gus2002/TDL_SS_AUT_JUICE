import BasePage from "./basePage";

class LoginPage extends BasePage{
    static get url() {
        return "/login"
      }
    static get emailInput(){
        return cy.get("#email")
    }
    static get passwordInput(){
        return cy.get("#password")
    }
    static get loginBtn(){
        return cy.get("#loginButton")
    }


}

export default LoginPage