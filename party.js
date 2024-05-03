//This is my first javascript program
var guestName = prompt("What is your name?");
var guest_List = ["Angela", "aishu", "aryan"];

if (guest_List.includes(guestName.toLowerCase())) {
    alert("Welcome to the party!");
} else {
    alert("Sorry, you are not on the guest list :(");
}
