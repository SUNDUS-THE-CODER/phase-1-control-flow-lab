function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride > 2500) return 'No can do.'
  let charge = '';
  ride <= 400 ? charge = 'This one is on me!' 
    : ride > 400 && ride < 2000 ? charge = 'That will be twenty bucks.' 
      : ride > 2000 && ride <= 2500 ? charge = 'I will gladly take your thirty bucks.' : null;
  return charge;
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') return 'Ok, sounds good.';
  if (city !== 'NYC') return 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === 'generous') return 'Thank you so much.'
  if (tip === 'not as generous') return 'Thank you.'
  return 'Bye.'
}