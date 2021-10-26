/// <reference types = "cypress" />

var Chance = require('chance')
var chance = new Chance

describe('Verificar disponibilidades', () => {
    before(() => {
        cy.visit('http://automationpractice.com');
       });
    
    it('Botão/Link - Sign in', () => {
        cy.get('div[class=header_user_info] > a').should('exist').click()
    });

    it('Redirecionamento de URL para form de cadastro', () => {
        cy.url().should('contain','http://automationpractice.com/index.php?controller=authentication&back=my-account')
    });

    it('Botão/Link para criar conta - Create an account', () => {
        cy.get('#SubmitCreate').should('exist')
    })

});

describe('Realizar Cadastro', () => {
    it('Informar e-mail', () => {
        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate').click()
        });
    it('Preencher formulário', () => {
        cy.wait(3000)
        //cy.get('input[name=id_gender]').type(chance.integer({ min: 1, max: 2 }))
        cy.get('#customer_firstname').type(chance.first())
        //  chance.string({ length: 5, pool: 'abcde' });

        //cy.get('input#customer_firstname').type('teste')
        cy.get('#customer_lastname').type(chance.first())
        cy.get('#passwd').type(chance.string({length: 5}))

        //data de nascimento
        cy.get('#days').select(chance.integer({ min: 1, max: 30 }))
        cy.get('#months').select(chance.month())
        cy.get('#years').select(chance.year({min: 1900, max: 2021}))

        cy.get('#company').type(chance.company())
        cy.get('#address1').type(chance.address())
        cy.get('#city').type(chance.city())
        cy.get('#id_state').select(chance.integer({ min: 1, max: 50 }))
        cy.get('#postcode').type(chance.zip())
        cy.get('#other').type('Desafio - chapter IV - agilizei!')
        cy.get('#phone').type(chance.phone())
        cy.get('#phone_mobile').type(chance.phone())

       cy.get('#submitAccount').click()

    });
});
