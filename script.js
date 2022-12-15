
var submitBtn = document.querySelector('#submit-rating');

var ratingState = document.querySelector('#rating-state');
var thankyouState = document.querySelector('#thankyou-state');

var ratings = document.querySelectorAll('.ratingBtn');
var ratingSpan = document.getElementById('rating-value');
var form = document.querySelector('form');



form.onsubmit = (e) =>{
    e.preventDefault();
    ratingState.style.display = 'none';
    thankyouState.classList = 'thankyou-state thankyou-state-active';
    ratings.forEach(element => {
        if(element.checked){
            ratingSpan.textContent = element.value;
        }
    });
}











