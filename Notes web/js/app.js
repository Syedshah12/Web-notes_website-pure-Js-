//Java script for notes saving website

shownotes();
//adding note to local strorage
let addbtn=document.getElementById('addbtn');
addbtn.addEventListener("click",function(e){
let addtxt=document.getElementById('addtxt');
let notes=localStorage.getItem("notes");
if(notes==null){
notesObj=[];
}
else{
notesObj=JSON.parse(notes);
}
notesObj.push(addtxt.value);
localStorage.setItem('notes',JSON.stringify(notesObj));
addtxt.value="";
shownotes();
});

//function to show notes
function shownotes(){
let notes=localStorage.getItem('notes');
if(notes==null){
notesObj=[];
}
else{
    notesObj=JSON.parse(notes);
}
let html="";
notesObj.forEach(function(element,index) {
html+=`
<div class="notecard my-2 mx-2" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Note${index+1}</h5>
  <p class="card-text">${element}</p>
  <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
</div>
</div>  
   `;
});
let noteElm=document.getElementById("notes");
if(notesObj.length!=0){
noteElm.innerHTML=html;
}
else{
    noteElm.innerHTML=`Nothing To Show!`;
}
}



//function to delete notes
function deleteNote(index){
let notes = localStorage.getItem("notes");
if (notes == null) {
  notesObj = [];
} else {
  notesObj = JSON.parse(notes);
}
notesObj.splice(index,1);
localStorage.setItem('notes',JSON.stringify(notesObj));
shownotes();
}

//search functinality
let search=document.getElementById('searchtxt');
search.addEventListener('input',function(){
searchVal=search.value.toLowerCase();
let card=document.getElementsByClassName('notecard');
Array.from(card).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(searchVal)){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
  
})
})