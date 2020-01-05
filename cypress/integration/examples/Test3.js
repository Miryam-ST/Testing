/// <reference types="Cypress"/>

describe('My First Test', function() {
    it('My First Test', function() { 

    var quantity=0;
      var price=0;
      var sum=0;
      var A;

      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#1111/')
      cy.viewport(1200, 850)
      cy.get('.brand').then((element) => {
              cy.log(element.text())
      
      //price
      cy.get(':nth-child(1) > .product-price').then((price) => {
               price = price.text()
              // cy.get(':nth-child(1) > .stepper-input > .increment').click()
              // cy.pause()

               //Qantity
               cy.get(':nth-child(1) > .stepper-input > .quantity').then((input) => 
               {
               quantity = input.val()
               //cy.log(quantity)
               expect(input.val()).to.equal('1')
               })

               cy.get(':nth-child(1) > .product-action > button').click()
      
               //sum
               cy.get(':nth-child(2) > :nth-child(3) > strong').then((price1) =>{
               sum = price1.text()
               sum = Number(sum) 

                cy.log(quantity)  
                cy.log(price) 
                cy.log(sum) 
                expect(quantity * price).to.equal(sum)
                
              
                cy.get(':nth-child(2) > .product-action > button').click()
              
                cy.get(':nth-child(3) > .product-action > button').click()
              
                cy.get('.cart-icon > img').click()
                cy.wait(1000) 
             //   cy.get('.cart-items>li>a.product-remove').eq(1).click()
            // cy.get('.cart-item>div.product-info>p.product-name').each(($element,index,$list) => {
             // var str = $element.text()
             // cy.log(str)
              //if(str.includes("Cucumber"))
            //  {
              //  cy.get('.cart-items>li>a.product-remove').eq(index).click()
            // }
               
            // })
       
                 cy.get('.cart-items>.cart-item>.product-info>.product-name').each(($element1,index,$list) => {
                  cy.get($element1).then((product1)=>{

                    if(product1.text().includes("Cucumber11")){
                      cy.log(product1.text())
                      cy.get('.cart-items>.cart-item>.product-remove').eq(index).click()
                      return false
                   }

                  })
                 })
               
     


         
                })
              })
            })

      
})
  })