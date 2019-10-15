// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let members = JSON.parse(localStorage.getItem('memberList'));

window.onload=function () {
  show(members);
};
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

console.log(members);
 function saveData() {
  let firstName=document.getElementById("firstName").value;
  let email=document.getElementById("email").value;
  let major=document.getElementById("major").value;
  let role=document.getElementById("role").value;
  let bio=document.getElementById("bio").value;
  let time=Date.time;
  if (firstName == "" || email== "" || major=="" ||
   role=="" || bio=="" )
  {

    document.getElementById("required").style.display='block';
  }
  else if(members.find(member => (member.email == document.getElementById("email").value)) ==undefined) {
  let item = new member(firstName , email , major , role , bio , time);
  document.getElementById("required").style.display='none';
  if(document.getElementById("checkbox").ischecked==true )
  {
    members.push(item);
  } else {
   if(document.getElementById("num").value == "") {
    members.push(item);
   } else {
    members.splice((document.getElementById("num").value),0,item);
   }
  }
  console.log(Date.time);
  localStorage.setItem('memberList',JSON.stringify(members));
  members =JSON.parse(localStorage.getItem('memberList')); 
  show(members);
 } else {
    alert("email error");
 } 
}
 function HTMLMember(firstName, email, major, role, bio) {
  return `<div class="subview">
            <div class="delete"> <button onclick="deletemember()" ('${email}' id="deleteBtn" )>-</button></div>
                <div class="detiles">
                    <h3 id="myBtn">${firstName}</h3>
                    <h4> ${email} / ${major} / ${role} </h4>
                    <p> ${bio}</p>
                </div>
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
 function sortBy() {
    let result=  document.getElementById("sort").value;
    switch(result){
      case "A-Z":{
        show(members.sort((a,b) => (a.firstName > b.firstName) ? 1 : -1));
        break;
      }
      case "Z-A":
        show(members.sort((a,b) => (a.firstName < b.firstName) ? 1 : -1));
        break;
      case "Newest":
          show(members.sort((a,b) => (a.time < b.time) ? 1 : -1));
          break;
      case "Oldest":
              show(members.sort((a,b) => (a.time > b.time) ? 1 : -1));
           break;

    }
  }

  

