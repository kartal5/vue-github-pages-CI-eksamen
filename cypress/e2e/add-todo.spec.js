describe('Add To-Do Item', () => {
    it('adds a new to-do item to the list', () => {
      cy.visit('/'); 
  
      // Type the new to-do item into the input field
      cy.get('input[name="new-todo"]').type('New ToDo Item');
  
      // Click the add button
      cy.get('button').contains('Add').click();
  
      // Verify the new to-do item is in the list
      cy.get('ul').contains('New ToDo Item').should('be.visible');
    });
  });
  