describe('Note List and add test pag. Puchase', () => {
        //Test to identify initial phrase to the screen
    it('Access main "notelist" and localize all graphic inserts on the screen', () => {
        cy.visit('http://localhost:4200/list-note'); //Visiting Note Page 
        cy.get('button.buttom').should('be.visible'); // Verify a button contain
    })
        //Addition note Test.
    it('Access note page and adding note located by class:', () => {
        cy.visit('http://localhost:4200/list-note'); //Visiting Note Page
        cy.get('button.buttom').click(); //Click the button.
        cy.url().should('eq','http://localhost:4200/create-note') // checks if the URL that has been directed is the same as declared.  
    })
        //Addition note Test 
    it('Access note page and adding note located by Button Name ', () => {
        cy.visit('http://localhost:4200/list-note'); //Visiting Note Page
        cy.contains('Add notes').should('be.visible').click(); //Click the button.
    })
  })


describe('Creating notes Test' , () => {
    it('Checks the Text Label', () => {
        cy.visit('http://localhost:4200/create-note'); //Visiting Note Page
        cy.url().should('eq','http://localhost:4200/create-note'); //URL Check.
        cy.get('input#note').should('be.visible'); //Find "Note" text Area
        cy.get('input#origin').should('be.visible'); //Find "Origin" text Area
    })

    it('Check Text in TExtArea', () => {
        cy.visit('http://localhost:4200/create-note'); //Visiting Note Page
        cy.url().should('eq','http://localhost:4200/create-note'); //URL Check.

            //If TextArea have something write, it will return an error;
        cy.get('input#note').should('be.visible');         
        cy.get('input#origin').should('be.visible');
    })
    
    it('Insert Text', () => {
        cy.visit('http://localhost:4200/create-note'); //Visiting Note Page
        cy.url().should('eq','http://localhost:4200/create-note'); //URL Check.
            //Input String on text area
        cy.get('input#note').type('Anotação simples que devera estar dentro da parte de anotações');
        cy.get('input#origin').type('Aqui fica a origem da anotação');
    })

    it('Delete text', () => {
        cy.visit('http://localhost:4200/create-note'); //Visiting Note Page
        cy.url().should('eq','http://localhost:4200/create-note'); //URL Check.
            //Delete anyone string in Text Area
        cy.get('input#note').type('{selectall}{backspace}');
        cy.get('input#origin').type('{selectall}{backspace}');
            // Checks if area is clear
            cy.get('input#note').should('have.value','');         
            cy.get('input#origin').should('have.value','');
    })

    it('Choose 1 Category', () => {
        cy.visit('http://localhost:4200/create-note'); //Visiting Note Page
            //Choose a category
        cy.get('input[type="radio"][value="model1"]').should('not.be.visible');
        cy.get('input#model1.ng-untouched.ng-pristine.ng-valid')
            .invoke('css','display','block').check().invoke('css','display','none'); //Model1
    })

    it('Choose 2 Category', () => {
        cy.visit('http://localhost:4200/create-note'); //Visiting Note Page
            //Choose a category
        cy.get('input[type="radio"][value="model2"]').should('not.be.visible');
        cy.get('input#model2.ng-untouched.ng-pristine.ng-valid')
            .invoke('css','display','block').check().invoke('css','display','none'); //Model2
    })

    it('Choose 3 Category', () => {
        cy.visit('http://localhost:4200/create-note'); //Visiting Note Page
            //Choose a category
        cy.get('input[type="radio"][value="model2"]').should('not.be.visible');
        cy.get('input#model3.ng-untouched.ng-pristine.ng-valid')
            .invoke('css','display','block').check().invoke('css','display','none'); //Model3
    })

    it('Save Note', () => {
        cy.visit('http://localhost:4200/create-note'); //Visiting Note Page
        cy.url().should('eq','http://localhost:4200/create-note'); //URL Check.
            
        cy.contains('Save').should('be.visible');
        cy.contains('Save').click(); // Click in save
            //After clicking in save, the app needs to return to list note page
        cy.url().should('eq','http://localhost:4200/list-note'); //Check URL after click
    })

    it('Cancel Note', () => {
        cy.visit('http://localhost:4200/create-note'); //Visiting Note Page
        cy.url().should('eq','http://localhost:4200/create-note'); //URL Check.
        cy.contains('Cancel').should('be.visible');
        cy.contains('Cancel').click(); // Click in save
            //After clicking in save, the app needs to return to list note page
        cy.url().should('eq','http://localhost:4200/list-note'); //Check URL after click    
    
    })
}
)

describe('Note List Test Section, edition and deleting Notes', () => {
    //Test to identify Edito and Delete
it('Identify Edit and delete Button', () => {
    cy.visit('http://localhost:4200/list-note'); //Visiting Note Page 
    cy.get('button.button-edit').should('be.visible'); // Verify a button contain
})
    //Action on Edit button.
it('Click to edit Button ', () => {
    cy.visit('http://localhost:4200/list-note'); //Visiting Note Page 
    cy.get('button.button-edit').should('be.visible').click(); // Click
    cy.url().should('eq','http://localhost:4200/create-note'); // After action, redirecting to Create Note URL.
})
    //Action on Delete button.
it('Click to delete Button ', () => {
    cy.visit('http://localhost:4200/list-note'); //Visiting Note Page 
    cy.get('button.button-edit').should('be.visible').click(); // Click
})
})