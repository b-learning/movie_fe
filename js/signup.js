let button = document.getElementById("btn-signup");
let emailElement = document.getElementById("txt-email");
let usernameElement = document.getElementById("txt-username");
let passwordElement = document.getElementById("txt-password");
let repasswordElement = document.getElementById("txt-repassword");

const checkemail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    emailElement.style.borderColor = "green";
    return true;
  } else {
    emailElement.style.borderColor = "red";
    return false;
  }
};

const checkusername = (username) => {
  if (username.length > 7 && !username.includes(" ")) {
    usernameElement.style.borderColor = "green";
    return true;
  } else {
    usernameElement.style.borderColor = "red";
    return false;
  }
};

const checkpassword = (password) => {
  if (password.length > 7) {
    passwordElement.style.borderColor = "green";
    return true;
  } else {
    passwordElement.style.borderColor = "red";
    return false;
  }
};

const checkrepassword = (repassword) => {
  if (repassword == passwordElement.value) {
    repasswordElement.style.borderColor = "green";
    return true;
  } else {
    repasswordElement.style.borderColor = "red";
    return false;
  }
};

emailElement.addEventListener("input", (event) => {
  checkemail(event.target.value);
});

usernameElement.addEventListener("input", (event) => {
  checkusername(event.target.value);
});

passwordElement.addEventListener("input", (event) => {
  checkpassword(event.target.value);
});

repasswordElement.addEventListener("input", (event) => {
  checkrepassword(event.target.value);
});

// hoisting
const signup = () => {
  if (
    checkemail(emailElement.value) &&
    checkusername(usernameElement.value) &&
    checkrepassword(repasswordElement.value) &&
    checkpassword(passwordElement.value)
  ) {
    let newAccount = {
      username: usernameElement.value,
      email: emailElement.value,
      password: passwordElement.value,
    };
    console.log(newAccount);
    axios({
      url: "http://localhost:8080/account",
      method: "post",
      data: newAccount,
    })
      .then((response) => {
        Swal.fire("Notification", "Create new account success!", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

// call back
button.addEventListener("click", signup);
