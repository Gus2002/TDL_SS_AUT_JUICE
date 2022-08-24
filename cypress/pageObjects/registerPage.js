import BasePage from "./basePage";


class RegisterPage extends BasePage{
    static get url() {
        return "/register"
      }
    static get emailInput(){
        return cy.get("#emailControl")
    }
    static generateEmail(){
        let st1 = "email_"
        let number = Math.floor(Math.random() * 10000)
        let finalEmail=st1+number+"@ebox.com"
        return finalEmail
    }
    static get passwordInput(){
        return cy.get("#passwordControl")
    }
    static get repeatPasswordInput(){
        return cy.get("#repeatPasswordControl")
    }
    static get securityQuestion(){
        return cy.get("[name='securityQuestion']")
    }
    static get securityQuestionPet(){
        return cy.get("#mat-option-9")
    }
    static get securityAnswer(){
        return cy.get("#securityAnswerControl")
    }
    static get registerButton(){
        return cy.get("#registerButton")
    }
}

export default RegisterPage