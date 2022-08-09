import { RobotEyes, RobotHands, Dependencies } from '../../robots/assignment/Robot';

context('Amazon assignment', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()

    describe('Amazon assignment', ()=>{

        it("navigate to amazon page", () => {
            dependencies.visitAmazon();
        });

        describe("Tests without login",()=>{
        // it("Clicking on TodaysDeals",()=>{
        //     robotHands.todaysDeals()});

        // it("Cliking on element in todays deals",()=>{  
        //     robotHands.ClickOnThirdElement()});
        
        // it("Cliking on first element ",()=>{     
        //     robotHands.clickOnFirstElement()});
         
        it("Adding item to the cart",()=>{
            robotHands.todaysDeals()
            robotHands.ClickOnThirdElement()
            robotHands.clickOnFirstElement()
            robotHands.addingItemToCart()
            robotHands.goToCart()
            robotEyes.veryfyingTheCart()
            robotHands.navigateBack()
            robotHands.searchingMobiles()
            robotHands.scroll()
            robotHands.navigateBack()
            robotHands.clickOnMenu()
            robotHands.clickOnMobiles()
            robotHands.clickOnMainMenu()
        }) ; 
        
    });

        // it("navigate back",()=>{
        //     robotHands.navigateBack()
        // });

        // it("Searching the mobiles",()=>{
        //     robotHands.searchingMobiles()
        // });

        // it("Scrolling",()=>{
        //     robotHands.scroll()
        //     robotHands.navigateBack()
        // });

        // it("Click on menu",()=>{
        //     robotHands.clickOnMenu()
        // });

        // it("Click on mobiles",()=>{
        //     robotHands.clickOnMobiles()
        // });

        // it("Click on main menu",()=>{
        //     robotHands.clickOnMainMenu()
        // });
       
    

      
    describe("Tests without login",()=>{
        it("navigate to amazon page", () => {
            dependencies.visitAmazon();
        });

        it("Move to login page",()=>{
            robotHands.moveToLoginPage()
            robotHands.logIn()
            robotHands.navigatingToOrders()
            robotEyes.recentOrderDelivered()
            robotHands.selectingPastOneYearOrders()
            robotHands.yourAccount()
            robotHands.addingNewAddress()
            robotEyes.assertingTheAddress()
            robotHands.yourAccount()
            robotHands.selectingThePaymentOption()
            robotEyes.assertingPayment()
        });

        

     });

});

});