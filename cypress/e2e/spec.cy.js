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

  it("Registering", () => {
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

context("Shop testing", () => {
  beforeEach(()=>{
    LoginPage.visit()
    LoginPage.closeWelcome.click()
    LoginPage.meWantIt.click()
    LoginPage.emailInput.type("demo")
    LoginPage.passwordInput.type("demo")
    LoginPage.loginBtn.click()
  })
  it("Search and validate lemon", () => {

    SearchPage.searchIcon.click()
    SearchPage.searchInput.type("Lemon").type('{enter}')
    SearchPage.productImg("Lemon Juice (500ml)").click()
    SearchPage.productCard.should("contain", "Sour but full of vitamins.")
  })
  it("Search 500ml and validate Lemon, while having multiple cards", () => {
    SearchPage.searchIcon.click()
    SearchPage.searchInput.type("500ml").type('{enter}')
    SearchPage.productImg("Lemon Juice (500ml)").click()
    SearchPage.productCard.should("contain", "Sour but full of vitamins.")
  })
  it.only("Search 500ml and validate cards", () => {
    const products = ["Eggfruit Juice (500ml)","Lemon Juice (500ml)","Strawberry Juice (500ml)"]
    const descriptions = ["Now with even more exotic flavour.","Sour but full of vitamins.", "Sweet & tasty!"]

    SearchPage.searchIcon.click()
    SearchPage.searchInput.type("500ml").type('{enter}')
    for(let i = 0;i<products.length;i++){
      SearchPage.productImg(products[i]).click()
      SearchPage.productCard.should("contain", descriptions[i])
      SearchPage.closeCard.click()
    }
  })
})