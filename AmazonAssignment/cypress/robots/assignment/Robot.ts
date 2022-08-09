import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';
import locators from '../../fixtures/locators.json'
import data from '../../fixtures/data.json'


export class Dependencies extends BaseDependencies {
   
    visitAmazon(){
        this.accessUrl('https://www.amazon.in/');
    }
   
}

export class RobotEyes extends BaseEyes{
    veryfyingTheCart(){
        this.seesTextWithClass(locators.veryfyingTheCart,data.veryfyingTheCart)
    } 
    assertingTheAddress(){
        this.seesTextWithClassAndIndex(locators.assertingTheAddress,3,data.assertingTheAddress)
    }
    assertingPayment(){
this.seesTextWithClassAndIndex(locators.assertingPayment,1,data.assertingPayment)
    }
    recentOrderDelivered(){
        this.seesTextWithClassAndIndex(locators.recentOrderDelivered,0,data.recentOrderDelivered)
    }
}

export class RobotHands extends BaseHands{

    todaysDeals(){
        this.clickOnDomElement(locators.todaysDeals);
    }

    ClickOnThirdElement(){
        this.clickOnChildDomElementWithIndex(locators.ClickOnThirdElement,6)
        
    }
    clickOnFirstElement(){
        this.ClickOnTextWithClassAndIndex(locators.clickOnFirstElement,1);
    }
    addingItemToCart(){
        this.clickOnId(locators.addingItemToCart)
    }
    goToCart(){
        this.clickOnId(locators.goToCart)
    }
    searchingMobiles(){
        this.typeTextonId(locators.searchingMobiles,"Mobiles")
        this.clickOnId(locators.searchingMobiles1)
    }
    scroll(){
        Cypress.on('uncaught:exception', (err, runnable) => {
                    return false
                   })
        this.ScrollintoView(locators.scroll,23)
    }
    clickOnMenu(){
       
        this.clickOnDomElement(locators.clickOnFirstElement)
    }
    clickOnMobiles(){
        this.ClickOnTextWithClassAndIndex(locators.clickOnMobiles,6)
    }
    clickOnMainMenu(){
        this.ClickOnTextWithClassAndIndex(locators.clickOnMainMenu,6)
        
    }
    navigateBack()
    {
        this.clickback()
    }

    moveToLoginPage(){
        this.clickOnId(locators.moveToLoginPage)
    }
    logIn(){
        console.log(locators.email_input)
        this.typeTextonId(locators.email_input,data.emailId)
        this.clickOnId(locators.continue)
        // this.clickOnDomElement('a[class="amzn-btn btn-prim-med-la"]')
        // this.clickOnId("continue.a-button-input")
        this.typeTextonId(locators.password,data.password)
        this.clickOnId(locators.signin)
    }
    
    navigatingToOrders(){
        this.clickOnId(locators.navigateToOrders)
    }
    
    selectingPastOneYearOrders(){
        this.clickOnId(locators.selectingPastOneYearOrders)
        this.clickOnId(locators.selectingPastOneYearOrders1)
    }
    yourAccount(){
        this.clickOnId(locators.yourAccount)
    }
    addingNewAddress(){
        this.ClickOnTextWithClassAndIndex(locators.addingNewAddress,3)
        this.clickOnId(locators.addingNewAddress1)
        this.typeTextonId(locators.name,data.name)
        this.typeTextonId(locators.mobileNo,data.mobileNo)
        this.typeTextonId(locators.pinCode,data.pinCode)
        this.typeTextonId(locators.houseNo,data.houseNo)
        this.typeTextonId(locators.colony,data.colony)
        this.typeTextonId(locators.area,data.area)
        this.typeTextonId(locators.place,data.place)
        this.clickOnId(locators.submit)
    }
    selectingThePaymentOption(){
        this.ClickOnTextWithClassAndIndex(locators.selectingThePaymentOption,4)
    }
    addingPaymentMethods(){
        this.clickOnId(locators.addingPaymentMethods)

    }
    
}