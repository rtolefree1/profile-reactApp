
// validating email
export function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

// validating the Text box input  
export function checkTextField(input)
{
    if(input.length===0)
    {
        return false;
    }
    return true;
}

// validating the namefield
export function checkNameField(input)
{
    if(input.length===0)
    {
        console.log('input value',input.match(''))
        return false;
    }
    return true;
}