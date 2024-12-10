
export function createEmail() {
    const timestamp = Date.now();
    const email = `test_new${timestamp}@mailinator.com`; 
    console.log('Generated email:', email); 
    return email;   
  }
  
  