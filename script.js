 // Define the input elements with the document.querySelector method
   
//  const form = document.getElementById('myForm');
//  const fname = document.getElementById('fname');
//  const email = document.getElementById('email');
//     form.addEventListner("submit", function(e){ 
//        e.preventDefault();

//        if (fname.value == '') {
//        alert("Full name is reqired!");
//        e.preventDefault();
//      }
//      if (email.value == '') {
//      alert("E-Mail is required!");
//      e.preventDefault();
//      }

//    });
const form = document.getElementById('myForm');
const fname = document.getElementById('fname');
const email = document.getElementById('email');

form.addEventListener ('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const AddressValue = Address.value.trim();

        if(fname.value == ''){
            alert("Full name is required!");
            e.preventDefault();
        }
        if(email.value == ''){
            alert("E-mail is required!");
            e.preventDefault();
        }
        if(Address.value == ''){
            alert("Address is required!");
            e.preventDefault();
        }
};