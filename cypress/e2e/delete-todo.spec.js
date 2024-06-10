describe('Delete To-Do Item', () => {
    it('deletes a to-do item from the list', () => {
      cy.visit('/');
  
      // Ensure there is a to-do item to delete
      cy.get('ul').contains('Learn Vue').should('be.visible');
  
      // Click the delete button for the first to-do item
      cy.get('button').contains('Delete').first().click();
  
      // Verify the to-do item is removed from the list
      cy.get('ul').should('not.contain', 'Learn Vue');
    });
  });
  