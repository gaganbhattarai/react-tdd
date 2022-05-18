/* eslint-disable no-undef */
describe('Displays the logged user name', () => {
  it('User signup complete', () => {
    cy.visit('http://localhost:3000');

    // for component testing
    // it('Valid username', () => {
    //   it('Username should not be empty', () => {
    //     cy.get('[data-testid="username"]').type('');
    //     cy.get('[data-testid="usernameError"]').should('have.value', 'Should not be empty')
    //   })

    //   it('Username should be atleast 6 character long and not more than 25', () => {
    //     cy.get('[data-testid="username"]').type('');
    //     cy.get('[data-testid="usernamError"]').its('length').should('be.gt', 6).and('be.lt', 25);
    //   })
    // })

    cy.get('[data-testid="username"]').type('Sanjay');
    cy.get('[data-testid="password"]').type('gritfeat@123');
    cy.get('[data-testid="rpassword"]').type('gritfeat@123');

    cy.get('[data-testid="signupButton"]').click();

    cy.contains('Successfully signup');
    cy.contains('Welcome Sanjay');

  })
})