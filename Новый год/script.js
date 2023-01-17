let elements = myForm.elements;
let titleName = document.querySelector('#titleName');
let compliment = document.querySelector('.compliment');

elements.myBtn.addEventListener('click', function (event) {
    event.preventDefault();
    titleName.textContent = elements.userName.value
    compliment.style.backgroundImage = `url(${elements.urlImg.value})`;
    console.log(element.urlImg.value);
})