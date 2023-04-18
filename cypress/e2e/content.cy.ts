import { RACING_CATEGORIES } from "../config/constants";

describe('Page Content', () => {

    beforeEach(() => {
            cy.visit('http://localhost:3000/')
          })

  it('Should correctly display page title', () => {
    // Next To Go Races
    cy.get('[data-testid="page-title"]').should('contain', 'Next To Go Races')
  });

  it('Should display expected values for race row contents', () => {
    // Race number, venue name, time to jump

  });

  it('Insert additional tests here and below', () => {
    
  });
});
