import LoginPage from "../../cypress/pageObjects/loginPage";
import BasePage from "../../cypress/pageObjects/basePage";
import SearchPage from "../pageObjects/searchPage";



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

  it("Registering", () => {
    
  })
})