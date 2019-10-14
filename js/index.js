// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let h3 = document.getElementById("myBtn");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 

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
  constructor(firstName , email , major , role , bio , time){
    this.firstName=firstName;
    this.email=email;
    this.major=major;
    this.role=role;
    this.bio=bio;
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
  let bio=document.getElementById("bio").value;
  let time=Date.time;
  let item = new member(firstName , email , major , role , bio , time);
  members.push(item);
  console.log(Date.time);
  localStorage.setItem('memberList',JSON.stringify(members));
  members =JSON.parse(localStorage.getItem('memberList')); 
  show(members);
 }
 function HTMLMember(firstName, email, major, role, bio) {
  return `<div class="subview">
            <div class="delete"> <button onclick="deletemember()" ('${email}' id="deleteBtn" )>-</button></div>
                <div class="detiles">
                    <h3 id="myBtn">${firstName}</h3>
                    <h4> ${email} / ${major} / ${role} </h4>
                </div>
                <p> ${bio} </p>
                </div>
            </div>
          </div>`;
}
 function show(membersview){  
  document.getElementById("members").innerHTML =" ";
  membersview.forEach((members) => {
    const memberDiv = HTMLMember(members.firstName, members.email, members.major, members.role,members.bio);
    document.getElementById("members").innerHTML += memberDiv;     
  });
  
 }
 function deletemember(){
  members.splice((member) => { 
    member.email !== email;
  },1);
  localStorage.setItem('memberList',JSON.stringify(members));
  show(members);
 }

function isEmailExist(email) {
  members.find(member =>(member.email == document.getElementById("email").value));
}



 
