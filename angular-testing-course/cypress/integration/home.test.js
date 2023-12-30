
describe('Home Page', () => {

    it('should display a list of courses', () => {

        cy.fixture('courses.json').as('coursesJSON');

        cy.server();

        cy.route('/api/courses', '@coursesJSON').as('courses');

        cy.visit('/'); // Access the application with the configured base URL 

        cy.contains("All Courses");

        cy.wait('@courses');

        cy.get('mat-card').should("have.length", 9);

    });
});
