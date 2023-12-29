
describe('Home Page', () => {

    it('should display a list of courses', () => {

        cy.visit('/'); // Access the application with the configured base URL 
        cy.contains("All Courses");

    });
});
