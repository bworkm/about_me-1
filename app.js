'use sctrict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses,with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var question1 = prompt('Does Cayla have any cats?').toLowerCase();

if (question1 === 'yes' || question1 === 'y') {
  alert('Yes, Cayla does have a cat!');
} else if (question1 === 'no' || question1 === 'n') {
  alert('Sorry, you\'re wrong, Cayla does have a cat');
} else {
  alert('Try to answer with a yes or no answer next time');
}
