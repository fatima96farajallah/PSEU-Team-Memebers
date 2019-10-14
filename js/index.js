// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let h3 = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
h3.onclick = function() {
  modal.style.display = "flex";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
class member {
  constructor(firstName , email , major , role , biography , time){
    this.firstName=firstName;
    this.email=email;
    this.major=major;
    this.role=role;
    this.biography=biography;
    this.time=time;
  }
}

let members = [];
console.log(members);

 function saveData() {
  let firstName=document.getElementById("firstName").value;
  let email=document.getElementById("email").value;
  let major=document.getElementById("major").value;
  let role=document.getElementById("role").value;
  let biography=document.getElementById("bio").value;
  let time=Date.time;
  let item = new member(firstName , email , major , role , biography , time);
  members.push(item);
  console.log(Date.time);
  localStorage.setItem('memberList',JSON.stringify(members));
  members =JSON.parse(localStorage.getItem('memberList')); 
  show(members);
 }

 function HTMLMember(name, email, major, role, biography) {
  return `<div class="subview">
            <div class="delete" <button class=""> - </button>></div>
            <div class="content" onclick="memberClicked()">
                <div class="detiles">
                    <h3 id="myBtn">${name}</h3>
                    <h4> ${email} / ${major} / ${role} </h4>
                </div>
                <p> ${biography} </p>
                </div>
            </div>
          </div>`;
}

 function show(membersview){  
  document.getElementById("memberList").innerHTML = "";
  membersview.array.forEach(element => {

    
  });


 }