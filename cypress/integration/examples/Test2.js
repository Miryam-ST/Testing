/// <reference types="Cypress" />

describe('My First Test', function() {
    it('My First Test', function() { 
     cy.viewport(1400, 860) 
      cy.visit('https://www.rami-levy.co.il/')
     cy.wait(1000)
      cy.get('#ZA_CANVAS_910860_CLOSE_X2_6_CONT').click()
      
      //cy.get('.container > ul > :nth-child(1) > a')
     // .should('have.text', 'אודות');
     // cy.get('#strSearch').type('קמח')
      //cy.get('.search_but').click()
      
      //cy.wait(1000)

      cy.get('.reg_link').click()
      cy.get('#ShipCity').type('תל אביב - יפו')
      cy.get('#ShipStreet').type('הדף היומי')
      cy.get('#ShipAddressNumber').type('6')
      cy.wait(1000)
      
      cy.get('#div_registration > a > span').click()
      cy.scrollTo(0, 300) 

      //cy.get('#ShipZip').then{function(zip)
      //cy.log(zip.text())}


     cy.get('#ShipZip').should('have.value', '6944028')
     
        //cy.log(cy.get('#ShipZip').value)
      
        cy.get('#ShipZip')
        .invoke('val')
        .then(ttt => cy.log(ttt));
        cy.get('#ShipHomeFloor').type('4').should('have.value','4')
        cy.get('#marital_status').select('נשוי/ה')
        cy.get('.field_name').find('#caption_sex').contains('מין').log('SUCCSES')
        cy.get('.field_input').find('[name="sex"]').eq(1).click()
        cy.get('#FName').type('First')
        cy.get('#LName').type('Last')
        var random_string = Math.random().toString(36).substring(2, 15)
        cy.get('#Email').type(random_string+'@gmail.com')
        var random_string1 = Math.floor(Math.random() * 1000000000)
        cy.get('#idno').type(random_string1)
        cy.get('#LoginName').type('User Name')
        cy.get('#Pwd').type('Aa123456!')
        cy.get('#phone1').type('1111111')
        cy.get('#IsSeeTerms').click()
        cy.get('#recaptcha-anchor').click()

      //  cy.get('.field_input').within(() => {
        //    cy.get('sex').click()
           
          //})

        
       
    })

    
  })