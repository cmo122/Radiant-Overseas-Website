import 'cypress-real-events/support';

describe('Link testing', () => {
    beforeEach(() => {
      cy.visit('localhost:3000/')
    })

    it('should load the landing page', () => {
        cy.get('body').should('be.visible');
      });
    
    context('Header Buttons', () => {
        it('should navigate to specific sections when header buttons are clicked', () => {
            cy.contains('Our Carriers').click();
            cy.get('#carriersSection').should('be.visible');
            cy.contains('Our Expertise').click();
            cy.get('#expertiseSection').should('be.visible'); 
            cy.contains('Contact Us').click();
            cy.get('#contactForm').should('be.visible');   
        });
    });

    context('Burger Menu Actions', () => {
        beforeEach(() => {
            cy.viewport('iphone-3');
          })
        it('should open upon click', () => {
            cy.get("#burgermenu").click();
            cy.get('#drawer-body').should('be.visible');
        });
        it('should close upon clicking X button', () => {
            cy.get("#burgermenu").click();
            cy.get('#drawer-body').should('be.visible');
            cy.get('[aria-label="close"]').click();
            cy.get('#drawer-body').should('not.be.visible'); 
        });
        it('should navigate to specific sections when header buttons are clicked', () => {
            cy.get("#burgermenu").click();
            cy.get("#drawer-body").contains('Our Carriers').click();
            cy.get('#carriersSection').should('be.visible');
            cy.get('#drawer-body').should('not.be.visible');

            cy.get("#burgermenu").click();
            cy.get("#drawer-body").contains('Our Expertise').click();
            cy.get('#expertiseSection').should('be.visible');
            cy.get('#drawer-body').should('not.be.visible');
            
            cy.get("#burgermenu").click();
            cy.get("#drawer-body").contains('Contact Us').click();
            cy.get('#contactForm').should('be.visible');
            cy.get('#drawer-body').should('not.be.visible');
        });
    });

    context('Hero Call to Action Button',()=>{
        it('should navigate to contact form when clicked', () => {
            cy.get('div[role="hero"]')
            .find('button[role="contactButton"]')
            .click()
            cy.get('#contactForm').should('be.visible');    
        });
    })

    context('Carrier Links', () => {
        it('Should test all links in carrier grid', () => {
            cy.get('#carriergrid').find('a').each(($link) => {
              const href = $link.prop('href');
              const problematicUrls = ['https://www.hmm21.com/company.do', 'https://www.oocl.com/eng/Pages/default.aspx', 'https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do'];
        
              if (href && !href.startsWith('javascript:')) {
                cy.on('uncaught:exception', (e) => {
                    if (e.message.includes('Cannot read properties of null') || e.message.includes('Things went bad')) {
                      return false;
                    }
                  })
                  if (problematicUrls.includes(href)) {
                    return;
                  }

                cy.visit(href, { failOnStatusCode: false, retryOnNetworkFailure:true });
                cy.url().should('eq', href);
                cy.go('back')
              }
            });
          });

        it('Should test all links in mobile carrier section', () => {
        cy.viewport('iphone-3');
        cy.get('#carriersSection').find('a').each(($link) => {
            const href = $link.prop('href');
            const problematicUrls = ['https://www.hmm21.com/company.do', 'https://www.oocl.com/eng/Pages/default.aspx', 'https://ct.shipmentlink.com/servlet/TDB1_CargoTracking.do'];
            
            if (href && !href.startsWith('javascript:')) {
            cy.on('uncaught:exception', (e) => {
                if (e.message.includes('Cannot read properties of null') || e.message.includes('Things went bad')) {
                    return false;
                }
                })
                if (problematicUrls.includes(href)) {
                return;
                }

            cy.visit(href, { failOnStatusCode: false, retryOnNetworkFailure:true });
            cy.url().should('eq', href);
            cy.go('back')
            }
        });
        });
        
        it('should swipe correctly on the carousel', () => {
        cy.viewport('iphone-3');
        cy.get('#carriersSection')
        .scrollIntoView();
        cy.wait(1000)
        cy.get('.mantine-Carousel-control')
        .eq(1)
        .click()
        .click()
        cy.get('#Zim').should('be.visible');
        });
  })
})