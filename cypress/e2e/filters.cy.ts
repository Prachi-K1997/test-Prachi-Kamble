describe('Category Filters', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })

  it('Should validate that all checkboxes are checked by default', () => {

        categoryFilters('Thoroughbred')
        categoryFilters('Greyhound')
        categoryFilters('Harness')

  });

function categoryFilters(categoryName){
    cy.get('[data-testid="category-filters"]').contains(categoryName)
    .parent()
    .find('[data-testid="category-filter-checkbox"]')
    .should('be.checked')
}

  it.skip('Should validate that checkboxes filter content appropriately', () => {
    // Compare against intercepted real data
    // This test may need to be split into multiple for each category depending on how you structure it
  });

  it('Should validate that unchecking all checkboxes re-enables all', () => {

    cy.get('[data-testid="category-filter-checkbox"]').click({ multiple: true })
    cy.get('[data-testid="category-filter-checkbox"]').should('be.checked')
  });

  it('Insert additional tests here and below', () => {
    
  });
});
