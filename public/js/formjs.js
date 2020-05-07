var stripe = Stripe('pk_test_sRclQLhjCXt0takAo5Hj7H9Q');
var elements = stripe.elements();

var card = elements.create('card', {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#8898AA',
      color: 'white',
      lineHeight: '36px',
      fontWeight: 300,
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSize: '19px',

      '::placeholder': {
        color: '#8898AA',
      },
    },
    invalid: {
      iconColor: '#e85746',
      color: '#e85746',
    }
  },
  classes: {
    focus: 'is-focused',
    empty: 'is-empty',
  },
});
card.mount('#card-element');

var inputs = document.querySelectorAll('input.field');
Array.prototype.forEach.call(inputs, function(input) {
  input.addEventListener('focus', function() {
    input.classList.add('is-focused');
  });
  input.addEventListener('blur', function() {
    input.classList.remove('is-focused');
  });
  input.addEventListener('keyup', function() {
    if (input.value.length === 0) {
      input.classList.add('is-empty');
    } else {
      input.classList.remove('is-empty');
    }
  });
});

function setOutcome(result) {
  var successElement = document.querySelector('.success');
  var errorElement = document.querySelector('.error');
  successElement.classList.remove('visible');
  errorElement.classList.remove('visible');

  if (result.token) {
    // Use the token to create a charge or a customer
    // https://stripe.com/docs/charges
    successElement.querySelector('.token').textContent = result.token.id;
    successElement.classList.add('visible');
  } else if (result.error) {
    errorElement.textContent = result.error.message;
    errorElement.classList.add('visible');
  }
}

card.on('change', function(event) {
  setOutcome(event);
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var form = document.querySelector('form');
  var extraDetails = {
    name: form.querySelector('input[name=cardholder-name]').value,
  };
  stripe.createToken(card, extraDetails).then(setOutcome);
});
        
    
        
        
    // javascript code will only run once the DOM is ready   
    $(document).ready(function(){
        // wait for a submit event on the form
        $( "form" ).submit(function( event ) {
            // get the values of the form into an array
            var formValues=$( this ).serializeArray() ;
            // write the formvalues to the console log
            console.log( formValues );
            localStorage.setItem('regForm', JSON.stringify(formValues));
            // prevent the form from actually submitting - event.preventDefault() could also be used..
            return false;
        });       
    });