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
Movie.prototype.assignId = function(member) {
  member.id = this.assignId();
  this.members[member.id] = contact;
}


// Business logic for movies
function Ticket(time, age, newMovie) {
  this.time = time; // this form needs matinee/not matinee
  this.age = age; //this form will need a dropdown for child, adult, senior
  this.newMovie = newMovie; //this form will need a true/false 
}
// let price = 5.00$
// if age > 12 && age < 65,  price = price + 2.00
//   else if (matinee = false) price = price +3.00
//    else if (newMovie = true) price = price + 2.00
//     


$(document).ready(function() {
  $("#ticket-selection").submit(function(event) {
    event.preventDefault();
    let inputtedTime = $("input#time").val();
    let inputtedAge = $("input#age").val(); 
    let inputtedNewMovie = $("input#newMovie").val(); 
    let newTicket = new Ticket(inputtedTime, inputtedAge, inputtedNewMovie);
    Movie.addAccount(newTicket);
  });
});
