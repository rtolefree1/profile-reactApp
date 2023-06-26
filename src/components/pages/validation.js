let emailInput = document.querySelector('#email');

let contactButton = document.querySelector('#submit')

console.log('submission', document.querySelector('#submit'))


function checkInputValues(){
    console.log('Checking input values now...', emailInput)
        
}

contactButton.addEventListener('click', checkInputValues)