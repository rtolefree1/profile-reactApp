import React, { useState } from 'react';
import image_7 from '../../Assets/image_7.jpg';
import '../../styles/portfolio.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail, checkTextField, checkNameField } from '../../utils/helpers';

// import ReactDOM from 'react-dom/client';

// const myElement = (
//     <>
//       <p>I am a paragraph.</p>
//       <p>I am a paragraph too.</p>
//     </>
//   );

//   const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//export default function Contact() {
    function Contact() {

    // creating variables and its setter functions
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [textField, setTextField] = useState('');   
    const [errorMessage, setErrorMessage] = useState('');

    const handleInput = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        console.log('input type:', inputType)
        if (inputType === 'name'){
            setUserName(inputValue)
        }else 
        if (inputType === 'email')
            {
                setEmail(inputValue)
        }else
        if (inputType === 'textArea')
            {
                setTextField(inputValue)
            }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('checking email validation')
        console.log('email',email)
        console.log(checkNameField(username))
        if(checkNameField(username))
        {
            setErrorMessage('Name field is Empty')
            return;
        }else if(!validateEmail(email)){
            setErrorMessage('Email address is invalid')
            return;
        }
        else if (!checkTextField(textField))
        {
            setErrorMessage('Text Field is Empty')
            return;
        }

    setEmail('');
    setErrorMessage('');
    }
        
    
    return (
      <div>
        {/* <h1>Contact Page</h1>
        
        <p>
          Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
          molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
          magna a ultrices. Aenean pellentesque placerat lacus imperdiet
          efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
          mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
          posuere, eget tristique dui dapibus. Maecenas fermentum elementum
          faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
          ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
          dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
          rhoncus. Etiam vel condimentum magna, quis tempor nulla.



        </p> */}
       <div className='pageTitle'>
        <h1>Home Page</h1>
          <section className="bannerClass">
            <div>
              <img src={image_7} alt="Computer circuit board"/>
            </div>
            <div class="bannerClassPara"> 
            <p >Georgia Tech Coding Projects</p>
            </div>
        </section>
        
        <h2>Contact form</h2>
        <form>
            <label for="name">Name: </label><br></br>
            <input type="text" id="name" name="name" placeholder="John Doe" onChange={handleInput}></input>
            <br></br>
            <br></br>
            <label for="email">Email Address: </label><br></br>
            <input type="text" id="email" name="email" placeholder="jdoe@email.com" onChange={handleInput} ></input>
            <br></br>
            <br></br>
            <textarea id="textArea" name="textArea" rows="4" placeholder="Please enter info"  cols="100" onChange={handleInput}></textarea>
            <br></br>
            <br></br>
            <button type="button" onClick={handleFormSubmit}>Submit</button>
            {/* <input type="submit" id="submit" value="Submit" onClick={handleFormSubmit}></input> */}
            
        </form>

        {errorMessage && (
        <div>
          <p className="error-text"><b>{errorMessage}</b></p>
        </div>
      )}
        
        
        </div>
      </div>
    );

    
    
  }
//   document.querySelector('#submit').addEventListener('click', 
//     console.log("Hello")
//   )
  export default Contact;