import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const promise = new Promise((resolve, reject)=> {})
    



const form = document.querySelector('.form')
const inputForm = document.querySelector('[name="delay"]')
inputForm.addEventListener('input', event => {
    console.log('Введене значення:', event.target.value);
})

