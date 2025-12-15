const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const radioButton = document.querySelectorAll('input[name="query"]')
const textArea = document.querySelector('#textArea');
const checkedBox = document.querySelector('#checkbox');
const successMsg = document.querySelector('#successMsg')
const radioWrapper = document.querySelector('#radio-Wrapper')
const checkedBoxWrapper = document.querySelector('#checkbox-wrapper')
const form = document.querySelector('form');

const formData = {
    FirstName: "",
    LastName: "",
    emailAddress: "",     
    queryValue: "",
    messageContent: "",
    checkedBoxValue: ""
}


firstName.addEventListener('input', (e) => {
    formData.FirstName = e.target.value
    
})

lastName.addEventListener('input', (e) => {
    formData.LastName = e.target.value
    
})

email.addEventListener('input', (e) => {
    formData.emailAddress = e.target.value
    
})

textArea.addEventListener('input', (e) => {
    formData.messageContent = e.target.value
    
})

checkedBox.addEventListener('change', (e) => {
    formData.checkedBoxValue = e.target.checked
    hideRadioError(checkedBoxWrapper);
})

radioButton.forEach(radio => {
    radio.addEventListener('change', () => {
        hideRadioError(radioWrapper);
    });
});

function validateText(name){
    if(!name) return false;

    const trimmed = name.trim();
    if(trimmed.length < 2) return false;

    const allowed = /^[A-Za-z\s'-]+$/;
    if (!allowed.test(name)) return false;

    return true;

}

function validateEmail(email){
    if(!email) return false;
    const allowed = /^\S+@\S+\.\S+$/
    if (!allowed.test(email)) return false ;
    return true 
}


function validateRadio(){
    if  (!selectedRadio) return false;
    return true;
}



function validateCheck(check){
    if (!check) return false;

    return true;
}


function validateForm() {
    if (!validateText(formData.FirstName)) return false;
    if(!validateText(formData.LastName)) return false;
    if(validateText(formData.messageContent)) return false;
    if (!validateEmail(formData.emailAddress)) return false;
    if (!validateRadio()) return false;
    if (!validateCheck(formData.checkedBoxValue)) return false;

    return true;
}

function showError(error) {
    const wrapper = error.parentElement;
    const errorMsg = wrapper.querySelector('p');


    errorMsg.classList.remove('hidden');
    error.classList.add('error-border')
}

function clearError(error) {
    const wrapper = error.parentElement;
    const errorMsg = wrapper.querySelector('p');
    errorMsg.style.display = 'none';

    error.classList.remove('error-border')
}


function showRadioError(index) {
 const errormsg = index.querySelector('.errorSign');
  errormsg.classList.remove('hidden')
}

function hideRadioError(index) {
 const errormsg = index.querySelector('.errorSign');
 errormsg.style.display = 'none';
}


function successfulMsg() {
  form.reset();
  successMsg.classList.remove('hidden');
  setTimeout(() => {
    successMsg.classList.add('hidden');
  }, 10000);
}

firstName.addEventListener("blur", () => {
  if (!validateText(firstName.value)) {
    showError(firstName);
  } else {
    clearError(firstName);
  }
});

lastName.addEventListener("blur", () => {
  if (!validateText(lastName.value)) {
    showError(lastName);
  } else {
    clearError(lastName);
  }
});


email.addEventListener("blur", () => {
  if (!validateEmail(email.value)) {
    showError(email);
  } else {
    clearError(email);
  }
});


textArea.addEventListener("blur", () => {
  if (!validateText(textArea.value)) {
    showError(textArea);
  } else {
    clearError(textArea);
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault()

  if(!firstName.value){
    showError(firstName)
    return;
  } 

  if(!lastName.value){
    showError(lastName)
    return;
  } 

  if(!email.value){
    showError(email)
    return;
  } 

    
  

  const selectedRadio = document.querySelector('input[name="query"]:checked')
  if  (!selectedRadio) {
    showRadioError(radioWrapper)
    return;
  }


  if (!validateText(textArea.value)) {
    showError(textArea);
    return;
  }
  
  const checkedBoxTicked = document.querySelector('input[name="agreement"]:checked')
  if (!checkedBoxTicked){
    showRadioError(checkedBoxWrapper)
    return;
  }
  


  
  successfulMsg();
  

})


