// Create a webpage where a user can select the name of a movie, 
// the time of day that they would like to see the movie and their age. 
// The webpage should let them know how much their movie ticket will cost, 
// based on those three factors. Consider that non-"first-release" movies,
// matinee and senior tickets tend to be cheaper than the regular priced 
// ticket.

// Your constructor and prototype could be called Ticket and you can come up
// with the formula for determining how the price is calculated depending on 
// the input from the user.
function Movie()  {
  this.tickets = {};
  this.currentId = 0;
}
Movie.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
Movie.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
}
// Business logic for movies
function Ticket(time, age, newMovie) {
  this.time = time; // this form needs matinee/not matinee
  this.age = age; //this form will need a dropdown for child, adult, senior
  this.newMovie = newMovie; //this form will need a true/false 
}


Ticket.prototype.ticketPrice = function() {
  this.price = 5.00;
  if (this.time === "7:00" || "9:30") {
    this.price += 2.00;
  }
  if (this.age === "adult") {
    this.price += 3.00;
  }
  if (this.newMovie === "Some Hollywood Reboot" || "Avengers 4000") {
    this.price += 5.00;
  }
};

// User Interface Logic
let movie = new Movie();

$(document).ready(function() {
  $("#ticket-selection").submit(function(event) {
    event.preventDefault();
    // let inputtedMovie =$("input#Title").val();
    let inputtedTime = $("select#time").val();
    let inputtedAge = $("select#age").val(); 
    let inputtedNewMovie = $("select#newMovie").val(); 
    let newTicket = new Ticket(inputtedTime, inputtedAge, inputtedNewMovie);

  // function for inputs to return pricing
    newTicket.ticketPrice();
    movie.addTicket(newTicket);
   //   $(".movie-choice").text(inputtedTitle);
      $(".movie-choice").text(newTicket.newMovie);
      $(".time-choice").text(newTicket.time);
      $(".price").text("$" + newTicket.price);
  });
});


