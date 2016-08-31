// Write a script that can generate random addresses
// As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
// Your script should randomly select one item from each of these arrays and then use them to construct a random address
// Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
// node random-address.js
// => 34578 Dolphin Street, Wonka NY, 44506

var number = [ 22, 15, 5, 293, 648, 89, 34, 80, 3567, 655];
var street = ['Dolphin Street', 'Station Street', 'High Street', 'Elizabeth Street',
            'City Road', 'Anzac Parade', 'Crown Street', 'Infinate Loop', 'Ocean Drive', 'Random Ave' ];
var city = ['Sydney', 'Melbourne', 'Hobart', 'Perth', 'Brisbane', 'Adelaide', 'Canberra', 'Darwin', 'Cairns', 'Wagga Wagga' ];
var postcode = [3621, 7865, 2456, 8299];

var randomNumber = Math.floor(Math.random() * number.length)
var randomStreet = Math.floor(Math.random() * street.length)
var randomCity = Math.floor(Math.random() * city.length)
var randomPostcode = Math.floor(Math.random() * postcode.length)

console.log( number[randomNumber] + ', ' + street[randomStreet] + ', ' + city[randomCity] + ', ' + postcode[randomPostcode]);
