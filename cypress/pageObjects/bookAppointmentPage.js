const baseUrl = 'https://meqa5.salonclouds.io/';
const continueAsGuest_Button = '#me-logincaag';
const zipCode = '#zip-code';
const findLocation_Button = '#find-location';
const addLocation = ':nth-child(1) > :nth-child(1) > div.service-radio-label > .custom-control > .service-radio-label > .mob-align';
const continueWithLocation_Button = '.map-btn-group';
const subCategory = '.open_subcategories > .custom-control > .service-radio-label > .bring-box > .bring-content > h3';
const serviceOption = ':nth-child(2) > .custom-control > .service-radio-label > .mob-align > .mob-align-position';
const continueWithService = '.continue-button > .btn-purple';
const agree_Button = '.agree-gird > .btn';
const chooseSession_Button = '.lets-talk-bottom-button > .btn-purple';
const chooseRecommendation = '.row > :nth-child(1) > .custom-control > .service-radio-label > .time-better-session > .mob-align > .price-section > .mob-align-position';
const enhancementContinue_Button = '.lets-talk-bottom-button > .btn-purple';
const chooseTime = '[style=""][data-startdatetime="1679590800"] > .custom-control > .service-radio-label > .mob-align > :nth-child(3) > .mob-align-position';
const continueBooking = '.lets-talk-bottom-button > .btn-purple';
const email = '#email';
const password = '#password';
const Login_Button = '#consumer-login';

export default class appointment {

    static endToEndBooking() {
        cy.visit(baseUrl);
        cy.get(continueAsGuest_Button).should('be.visible').click();
        cy.fixture('example').then((DATA) => {
            cy.get(zipCode).type(DATA.zipCode);
        })
        cy.get(findLocation_Button).should('be.visible').click();
        cy.get(addLocation).should('be.visible').click();
        cy.get(continueWithLocation_Button).should('be.visible').click();
        cy.get(subCategory).should('be.visible').click();
        cy.get(serviceOption).should('be.visible').click();
        cy.get(continueWithService).should('be.visible').click();
        cy.wait(2000);
        cy.scrollTo(0, 1000);
        cy.get(agree_Button).should('be.visible').click();
        cy.get(chooseSession_Button).should('be.visible').click();
        cy.scrollTo(0, 1000);
        cy.get(chooseRecommendation).should('be.visible').click();
        cy.wait(2000);
        cy.get(enhancementContinue_Button).should('be.visible').click();
        cy.get(chooseTime).should('be.visible').click();
        cy.scrollTo(0, 1000);
        cy.get(continueBooking).should('be.visible').click();
        cy.fixture('example').then((DATA) => {
            cy.get(email).type(DATA.email);
        })
        cy.fixture('example').then((DATA) => {
            cy.get(password).type(DATA.password);
        })
        cy.get(Login_Button).should('be.visible').click();
    }

}