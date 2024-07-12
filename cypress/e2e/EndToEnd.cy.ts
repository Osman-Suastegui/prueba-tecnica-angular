/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display header, user list, and footer', () => {
    cy.get('app-header').should('exist');
    cy.get('app-user-list').should('exist');
    cy.get('app-footer').should('exist');
  });
});

describe('User List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display the user list', () => {
    cy.get('app-user-list').should('exist');

    cy.get('mat-row').should('have.length.gt', 0);
  });

  it('should add a user', () => {
    cy.get('.add-button-container button').click();

    cy.wait(500);

    cy.get('app-user-form').should('exist');

    cy.get('#name').type('John');
    cy.get('#lastname').type('Doe');
    cy.get('#button-form-create').contains('Crear').click();

    cy.get('app-user-form').should('not.exist');
    cy.contains('John Doe').should('exist');
  });
  it('should search user by name', () => {
    cy.wait(500);

    cy.get('.search-container input').type('John');

    cy.get('mat-row').each(($row) => {
      cy.wrap($row).find('mat-cell').first().should('contain.text', 'John');
    });
  });

  it('should edit a user', () => {
    cy.wait(1500);

    cy.get('.John-edit').click();

    cy.get('app-user-form').should('exist');

    cy.get('#lastname')
      .clear({ force: true })
      .type('lastname updated', { force: true });

    cy.get('#button-form-create').contains('Guardar').click();

    cy.get('app-user-form').should('not.exist');
    cy.contains('lastname updated').should('exist');
  });

  it('should delete a user', () => {
    cy.wait(1500);

    cy.get('.John').click();

    cy.on('window:confirm', () => true);

    cy.contains('John').should('not.exist');
  });
});
