import LoginPage from "../../cypress/pageObjects/loginPage";
import BasePage from "../../cypress/pageObjects/basePage";
import SearchPage from "../pageObjects/searchPage";
import RegisterPage from "../pageObjects/registerPage";
import BasketPage from "../pageObjects/basketPage";
import SelectAddressPage from "../pageObjects/selectAddressPage";
import DeliveryMethodPage from "../pageObjects/deliveryMethodPage";
import PaymentOptionsPage from "../pageObjects/paymentOptionsPage";
import OrderSummaryPage from "../pageObjects/orderSummaryPage";
import OrderCompletionPage from "../pageObjects/orderCompletionPage";



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
  it("Search 500ml and validate cards", () => {
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
  it("Add a review", () => {

    SearchPage.searchIcon.click()
    SearchPage.searchInput.type("Raspberry").type('{enter}')
    SearchPage.productImg("Raspberry Juice (1000ml)").click()
    SearchPage.reviewInput.type("Tastes like metal", {force: true})
    SearchPage.submitReview.click()
    SearchPage.expandReviews.click()
    SearchPage.review.should("have.text", "Tastes like metal")
  })
  it.only("Validate product card amount", () => {
    
    SearchPage.cardAmount.scrollIntoView()
    SearchPage.imgButtons.should("have.length", 12)
    SearchPage.cardAmount.click()
    SearchPage.resultCountBtn("24").click()
    SearchPage.cardAmount.scrollIntoView()
    SearchPage.imgButtons.should("have.length", 24)
    SearchPage.cardAmount.click()
    SearchPage.resultCountBtn("36").click()
    SearchPage.cardAmount.scrollIntoView()
    SearchPage.imgButtons.should("have.length", 35)
  })
  it("Buy Girlie T-shirt", () => {
  
    SearchPage.searchIcon.click()
    SearchPage.searchInput.type("Girlie").type('{enter}')
    SearchPage.addToBasket(0).click()
    SearchPage.yourBasket.click()
    BasketPage.checkoutBtn.click({force:true})
    SelectAddressPage.selectRadio.click({force:true})
    SelectAddressPage.continueBtn.click()
    DeliveryMethodPage.standardDeliveryBtn.click({force:true})
    DeliveryMethodPage.continueBtn.click()
    PaymentOptionsPage.selectCard.click()
    PaymentOptionsPage.continueBtn.click()
    OrderSummaryPage.checkoutBtn.click()
    OrderCompletionPage.confirmMsg.should("have.text", "Thank you for your purchase!")
    

  })
})