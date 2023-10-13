describe('Form Testing', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/')
        .get('#contactForm')
        .scrollIntoView()
      })

    it('should not send any request when submitting an empty form', () => {
        cy.get('form').submit()
        cy.get("#success").should("not.exist")
    });

    it('should display error messages upon typing and then exiting a field', () => {
        cy.get("form")
        .get("#name")
        .type("a")
        .blur()
        .get("#nameError")
        .should("exist")
        .get("#email")
        .type("a")
        .blur()
        .get("#emailError")
        .should("exist")
        .get("#subject")
        .type("a")
        .blur()
        .get("#subjectError")
        .should("exist")
        .get("#message")
        .type("a")
        .blur()
        .get("#messageError")
        .should("exist")
    });

    it('should display error messages for excessive text input', () => {
        cy.get("form").as("myForm");

        cy.get("@myForm")
        .get("#name")
        .type("CypressTestMessageWith51CharactersExcludingSpaces!!")
        .blur()
        .get("#nameError")
        .invoke('text')
        .should('eq', 'Name cannot exceed 50 characters')

        cy.get("@myForm")
        .get("#subject")
        .type("CypressTestMessageWith51CharactersExcludingSpaces!!")
        .blur()
        .get("#subjectError")
        .invoke('text')
        .should('eq', 'Subject cannot exceed 50 characters')

        cy.get("@myForm")
        .get("#message")
        .type("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec p")
        .blur()
        .get("#messageError")
        .invoke('text')
        .should('eq', 'Message cannot exceed 300 characters')
    });

    it('should unrender error message on type if user goes back to correct field', () => {
        cy.get("form").as("myForm");

        // Name field
        cy.get("@myForm")
        .get("#name")
        .type("a")
        .blur()
        .get("#nameError")
        .should("exist")
        .get("#name")
        .type("aaaa")
        .get("#nameError")
        .should("not.exist")

        // Email field
        cy.get("@myForm")
        .get("#email")
        .type("a")
        .blur()
        .get("#emailError")
        .should("exist")
        .get("#email")
        .type("aaaa@aaaaa.aaaaaa")
        .get("#emailError")
        .should("not.exist")

        // Subject field
        cy.get("@myForm")
        .get("#subject")
        .type("a")
        .blur()
        .get("#subjectError")
        .should("exist")
        .get("#subject")
        .type("aaaaaaaaa")
        .get("#subjectError")
        .should("not.exist")

        // Message field
        cy.get("@myForm")
        .get("#message")
        .type("a")
        .blur()
        .get("#messageError")
        .should("exist")
        .get("#message")
        .type("aaaaaaaaaaaaaaaaaaaaaaaaaa")
        .get("#messageError")
        .should("not.exist")
    });

    it('should submit the form with valid input', () => {
        cy.get("form").as("myForm");

        // Name field
        cy.get("@myForm")
        .get("#name")
        .type("Test")
        .get("#email")
        .type("test@test.test")
        .get("#subject")
        .type("Test")
        .get("#message")
        .type("Testing Testing One Two Three")
        cy.get("@myForm").submit()

        cy.get("#success").should("exist")
    });
  
    
  });
  