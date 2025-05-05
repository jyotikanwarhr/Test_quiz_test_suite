import Quiz from "../../client/src/components/Quiz";


describe("This is the Quiz component testing", () => {

    // there should be a start button at the beginning
    it("should have a start button", () => {
        cy.mount(<Quiz/>);

        cy.get("button").should('contain.text', 'Start Quiz');
    })

    // after clicking start, it should show the first question
    it("should show the first question after clicking start", () => {
        cy.mount(<Quiz/>);

        cy.intercept("/api/questions/random", {
            fixture: "questions.json",
            statusCode: 200,
        })

        cy.get("button").click();

        cy.get("h2").should('contain.text', 'What does the range function do?');
    })

    // after clicking one of the answers, it should show the next question
    it("should show the next question after clicking an answer", () => {
        cy.mount(<Quiz/>);

        cy.intercept("/api/questions/random", {
            fixture: "questions.json",
            statusCode: 200,
        })

        cy.get("button").click(); // click the start button

        cy.get("button").eq(0).click(); // click one of the answers

        cy.get("h2").should('contain.text', 'What is the correct syntax to create a dictionary in Python?');
    })

    // after answering all questions, it should show "Quiz Completed"
    it("should show 'Quiz Completed' after answering all questions", () => {
        cy.mount(<Quiz/>);

        cy.intercept("/api/questions/random", {
            fixture: "questions.json",
            statusCode: 200,
        })

        cy.get("button").click(); // click the start button

        // answer all questions
        cy.get("button").eq(0).click(); // answer first question
        cy.get("button").eq(1).click(); // answer second question

        cy.get("h2").should('contain.text', 'Quiz Completed');
    })


    // after clickng "Take new Quiz", it should show the first question again
    it("should show the first question again after clicking 'Take new Quiz'", () => {
        cy.mount(<Quiz/>);

        cy.intercept("/api/questions/random", {
            fixture: "questions.json",
            statusCode: 200,
        })

        cy.get("button").click(); // click the start button

        // answer all questions
        cy.get("button").eq(0).click(); // answer first question
        cy.get("button").eq(1).click(); // answer second question

        cy.get("button").contains('Take New Quiz').click(); // click the take new quiz button

        cy.get("h2").should('contain.text', 'What does the range function do?');
    })

})