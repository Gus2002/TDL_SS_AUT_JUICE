import LoginPage from "../../cypress/pageObjects/loginPage";
import BasePage from "../../cypress/pageObjects/basePage";
import SearchPage from "../pageObjects/searchPage";
import RegisterPage from "../pageObjects/registerPage";



context("Login and registration", () => {
  beforeEach(()=>{
    BasePage.visit()
    BasePage.closeWelcome.click()
    BasePage.meWantIt.click()
  })

  it("Logging in", () => {
    BasePage.accountBtn.click({force:true})
    BasePage.loginBtn.click({force:true})
    LoginPage.emailInput.type("demo")
    LoginPage.passwordInput.type("demo")
    LoginPage.loginBtn.click()
    SearchPage.accountBtn.click()
    SearchPage.accountName.should("contain", "demo")
  });

  it.only("Registering", () => {
    BasePage.accountBtn.click({force:true})
    BasePage.loginBtn.click({force:true})
    LoginPage.newCustomerLink.click({force:true})
    const email = RegisterPage.generateEmail()
    const password = "testPass21"
    RegisterPage.emailInput.type(email)
    RegisterPage.passwordInput.type(password)
    RegisterPage.repeatPasswordInput.type(password)
    RegisterPage.securityQuestion.click()
    RegisterPage.securityQuestionPet.click()
    RegisterPage.securityAnswer.type("Cat")
    RegisterPage.registerButton.click()
    LoginPage.emailInput.type(email)
    LoginPage.passwordInput.type(password)
    LoginPage.loginBtn.click()
    SearchPage.accountBtn.click()
    SearchPage.accountName.should("contain", email)

  })
})