module.exports = (theme = '') => {
  const baseUrl = require('./utils')(theme, 'options')

  describe('Welcome Test', () => {
    // it('Test Custom AJAX', () => {
    //   cy.visit(`${baseUrl}table-ajax.html`)
    //     .get('div.pagination-detail').should('have.length', 1)
    //     .get('div.pagination').should('have.length', 1)
    //     .get('span.pagination-info').should('contain', '800')
    // })

    // it('Test Custom AJAX', () => {
    //   cy.visit(`${baseUrl}ajax-options.html`)
    //     .intercept('GET', '**/json/data1.json').as('ajax')
    //     .wait('@ajax')
    //     .should(({ request }) => {
    //       expect(request.headers).to.have.property('custom-auth-token')
    //         .and.eq('custom-auth-token')
    //     })
    // })

    // it('Test Basic Columns', () => {
    //   cy.visit(`${baseUrl}basic-columns.html`)
    //     .get('.fixed-table-toolbar .columns').should('exist')
    // })

    it('Test Custom Buttons', () => {
      cy.visit(`${baseUrl}buttons.html`)
        .get('div.fixed-table-toolbar').should('have.length', 1)

      const buttons = cy.get('div.fixed-table-toolbar button')

      buttons.should('have.length.above', 0)
        .find('button[name="btnUsersAdd"]')
        .should('have.length', 1)
        .invoke('attr', 'title')
        .should('equal', 'Search all users which has logged in the last week')
    })
  })
}
