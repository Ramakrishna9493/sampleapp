describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
      cy.intercept(
        {
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/users',
        },
        [{
          name: "Test",
          email: "test@test.com",
          phone: "9999999999"
        }]
      ).as('getData')
    })
  
    it('can filter for uncompleted tasks', () => {
        cy.wait("@getData")
        cy.get("tr").should("have.length", 2)
        cy.get("tr th").eq(0).should("have.text", "Name")
        cy.get("tr th").eq(1).should("have.text", "Email")
        cy.get("tr th").eq(2).should("have.text", "Mobile Number") 
    })
})
  