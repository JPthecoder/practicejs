// write a variable for the array with name and contact number

  const contacts = [
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
    ];
    

// link js to html for variables para, input, and btn
  const para = document.querySelector("p");
  const input = document.querySelector("input");
  const btn = document.querySelector("button");

// mistake not declaring variable with const and assisgnging id in () instead of element
  
btn.addEventListener("click", ()=>{
    const searchName = input.value.toLowerCase();
    para.textContent = "";
    input.value = "";
    input.focus();

    for (const contact of contacts){
        const splitContact = contact.split(":");
        // wrote searchName here thinking it had something to do with the contact split but it didn't
        // splitContact is correct here as we identify the array in the code in the
       if (splitContact[0].toLowerCase() === searchName){
            para.textContent = `${splitContact[0]}'s contact number is: ${splitContact[1]}.`;
            break;
    }
    }
        if (para.textContent === ""){
            para.textContent = "Contact not found."
        }
    });

// add event listener to btn that activates a click and use the arrow function
// add lower case to input value on variable searchName
// set the rest of the search bar with focus, clear, and an empty text



// write a for loop that goes through the contacts one by one
// write a variable to split the contact after the colon

// write an if else statement that matches contact and searchName to return phone number and lower case
// break the loop if the input matches

// write an if statement where it return Contact not found. if the input doesn't exist