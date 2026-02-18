class menuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/searchEvaluatePerformanceReview"]',
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }

    acessPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }
}

export default menuPage