const d = document;
var username = d.getElementById("name");
var email = d.getElementById("email");
var age = d.getElementById("age");
var submit = d.querySelector("button");
var namein = d.getElementById("namein");
var emailin = d.getElementById("emailin");
var agein = d.getElementById("agein");

let input = {
  username: "",
  email: "",
  age: ""
};

function reducer(state = input, action) {
  switch (action.type) {
    case "name":
      return { ...state, username: action.data.value };
    case "email":
      return { ...state, email: action.data.value };
    case "age":
      return { ...state, age: action.data.value };
    default:
        return state
  }
}

let store = Redux.createStore(reducer);

function handleSubmit(event) {
  event.preventDefault();
  namein.innerText = store.getState().username;
  emailin.innerText = store.getState().email;
  agein.innerText = store.getState().age;
}

username.addEventListener("keyup", (event)=>{
    store.dispatch({type:"name", data:event.target})
})

email.addEventListener("keyup", (event)=>{
    store.dispatch({type:"email", data:event.target})
})

age.addEventListener("keyup", (event)=>{
    store.dispatch({type:"age", data:event.target})
})

submit.addEventListener("click",handleSubmit)

