function validateUsr(username) {
    res = /^[0-9a-z\_]{4,16}$/.test(username)
    return res
  }
  
  let username = 'asddsa_432';
  
  validateUsr();
  
  //Write a simple regex to validate a username.
  
  //Allowed characters are:
  
  //-lowercase letters -numbers -underscore
  
  //length shoould be between 4 and 16 characters.