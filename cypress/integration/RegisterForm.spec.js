/// <reference types="Cypress" />

describe('register form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register');
  });

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100000);
    return randomNumber;
  };

  it('should show the name field error messages', () => {
    // simulates a click in the input
    cy.get('#inputName').click();

    //  simulates a click in another element in order to
    //   fullfill the conditions of the error message
    //   (there's an error and the field was touched)
    cy.get('#nameLabel').click();

    // verifies if the error message exists
    cy.get('#inputError').should('be.visible');

    // verifies if the submit button is disabled due to errors presence
    cy.get('#submitButton').should('be.disabled');

    //simulates typing something not valid, checks if the
    //error message is shown properly, and
    //checks if the submit button is disabled
    cy.get('#inputName').type('a').should('have.value', 'a');
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
  });

  it('should show the last name field error message', () => {
    cy.get('#inputLastName').click();
    cy.get('#nameLabel').click();
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
    cy.get('#inputLastName').type('a').should('have.value', 'a');
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
  });

  it('should show the email field error message', () => {
    cy.get('#inputEmail').click();
    cy.get('#nameLabel').click();
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
    cy.get('#inputEmail').type('a').should('have.value', 'a');
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
  });

  it('you shouldn`t be able to type letters', () => {
    cy.get('#inputAge').click().type('mockText').should('have.value', '');
    cy.get('#inputAge').click().type(20).should('have.value', '20');
  });

  it('should show the role field error message', () => {
    cy.get('#inputRole').select(0);
    cy.get('#nameLabel').click();
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
  });

  it('should show the password field error message', () => {
    cy.get('#inputPassword').click();
    cy.get('#nameLabel').click();
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
    cy.get('#inputPassword').type('a').should('have.value', 'a');
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
  });

  it('should show the password confirm field error message', () => {
    cy.get('#inputPasswordConfirm').click();
    cy.get('#nameLabel').click();
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
    cy.get('#inputPasswordConfirm').type('a').should('have.value', 'a');
    cy.get('#inputError').should('be.visible');
    cy.get('#submitButton').should('be.disabled');
  });

  it('should fail due to the usage of a taken email', () => {
    cy.get('#inputName').type('Solid');
    cy.get('#inputLastName').type('Snake');
    cy.get('#inputEmail').type('test@test.com');
    cy.get('#inputAge').type(20);
    cy.get('#inputRole').select(1);
    cy.get('#inputPassword').type('Aaaaaaaa1!');
    cy.get('#inputPasswordConfirm').type('Aaaaaaaa1!');
    cy.get('#submitButton').should('be.enabled').click();
    cy.contains(
      'Hubo un error. Por favor verifique los datos e intente nuevamente.'
    );
  });

  it('should register a new user successfully', () => {
    cy.get('#inputName').type('Solid');
    cy.get('#inputLastName').type('Snake');
    cy.get('#inputEmail').type(`test${getRandomNumber()}@test.com`);
    cy.get('#inputAge').type(20);
    cy.get('#inputRole').select(1);
    cy.get('#inputPassword').type('Aaaaaaaa1!');
    cy.get('#inputPasswordConfirm').type('Aaaaaaaa1!');
    cy.get('#submitButton').should('be.enabled').click();
    // verifies if the sweet alert popped up properly
    cy.contains('Registro exitoso. Redirigiendo al home...');
    // verifies if the redirection was done
    cy.url().should('be.equal', 'http://localhost:3000/');
  });
});
