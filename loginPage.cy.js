import login from '../pageObjectModel/loginPage'
import testData from'../../fixtures/testData.json'

describe('Login for github',()=>{
    beforeEach(()=>{

        //visit github website
        cy.visit('https://github.com/login')
    })

    it('valid email invalid password',()=>{
      
        login.getUserName().should('be.visible').should('be.enabled').type(testData.username1)
        login.getPassword().should('be.visible').should('be.enabled').type(testData.password2)
        login.getSignIn().click()
        login.getErrorText()
    })

    it('invalid email valid password',()=>{
        
        login.getUserName().should('be.visible').should('be.enabled').type(testData.username2)
        login.getPassword().should('be.visible').should('be.enabled').type(testData.password1)
        login.getSignIn().click()
        login.getErrorText()
    })

    it('Enter email password blank',()=>{
        
        login.getUserName().should('be.visible').should('be.enabled').type(testData.username1)
        login.getPassword().should('be.visible').should('be.enabled').type(' ')
        login.getSignIn().click()
        login.getErrorText()
    })

    it('Blank email enter password',()=>{
 
        login.getUserName().should('be.visible').should('be.enabled').type(' ')
        login.getPassword().should('be.visible').should('be.enabled').type(testData.password1)
        login.getSignIn().click()
        login.getErrorText()
    })

    it('Email blank password blank',()=>{

        login.getUserName().should('be.visible').should('be.enabled').type(' ')
        login.getPassword().should('be.visible').should('be.enabled').type(' ')
        login.getSignIn().click()
        login.getErrorText()
    })

    it('Valid email valid password',()=>{

        login.getUserName().should('be.visible').should('be.enabled').type(testData.username1)
        login.getPassword().should('be.visible').should('be.enabled').type(testData.password1)
        login.getSignIn().click()
        
    })
})