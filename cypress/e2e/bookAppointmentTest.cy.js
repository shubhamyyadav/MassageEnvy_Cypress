import appointment from "../pageObjects/bookAppointmentPage";

describe('E2E Appointment Booking', function () {

    it('Navigate to Website and Book an Appointment', function () {
        appointment.endToEndBooking();
    });

});