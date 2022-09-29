import { Provider } from "react-redux"
import FetchAndDisplayData from "../../src/react/components/fetchData/index"
import store from "../../src/redux/store/index"
describe('FetchAndDisplayData.cy.js', () => {
  beforeEach(() => {
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

  it('playground', () => {
    cy.mount(<Provider store={store}><FetchAndDisplayData /></Provider>)
    cy.get("tr").should("have.length", 2)
    cy.get("tr th").eq(0).should("have.text", "Name")
    cy.get("tr th").eq(1).should("have.text", "Email")
    cy.get("tr th").eq(2).should("have.text", "Mobile Number") 
  })
})