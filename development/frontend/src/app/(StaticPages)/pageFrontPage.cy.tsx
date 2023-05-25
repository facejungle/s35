import React from 'react'
import FrontPage from './page'

describe('<FrontPage />', () => {
    it('renders', () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<FrontPage/>)
    })
})