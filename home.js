let count=0;
let countbeach1=0;
let countbeach2=0;
let counttemple1=0;
let counttemple2=0;

function change(event){
  event.preventDefault();
 let input = document.getElementById("search").value.trim().toLowerCase();
;
 let parent=document.getElementById("parent");
let url='./file_with_images.json'


axios({
  url:url
})
.then(response=>{

  
let newdiv=document.createElement('div');

count=count+1;
if(count<=2){
  //if country inserted 
  let wanteddiv=response.data.find(element=>element.name.toLowerCase().trim()===input)
  let index = response.data.findIndex(element => element.name.toLowerCase().trim() === input);

    console.log(wanteddiv);
    console.log(index);
       if(index!==-1){
newdiv.innerHTML=`
<div class="card card3" style="width: 30rem;">
   <div >
    <img src="${response.data[index].states[count].image}" class="pic" alt="">
               
    </div>
  <div class="card-body">
    <h5 class="card-title">${response.data[index].states[count].name}</h5>
    <p class="card-text desc" >${response.data[index].states[count].description}</p>
    <a href="#" class="btn btn-primary">Visit</a>
    
  </div>
</div>`;

parent.appendChild(newdiv);
}

     
else if (input === "beach") {
  let recommendations = []; 

  for (let i = 0; i < response.data.length; i++) {
    const country = response.data[i];
    
    if (country.name.toLowerCase().trim() === "maldives" && countbeach1 < 1) {
      const randomIndex = Math.floor(Math.random() * country.states.length);
      recommendations.push(country.states[randomIndex]); // Add to array
      countbeach1++;
    }
    else if (country.name.toLowerCase().trim() === "seychelles" && countbeach2 < 1) {
      const randomIndex2 = Math.floor(Math.random() * country.states.length);
      recommendations.push(country.states[randomIndex2]); // Add to array
      countbeach2++;
    }
  }


  recommendations.forEach(rec => create(rec));
}
     
    


    else if(input==="temple"){
     
for(let i=0;i<response.data.length;i++){
 const country = response.data[i];
       if(country.name.toLowerCase().trim()==="thailand"&&counttemple1<1){
           var randomIndex = Math.floor(Math.random() * country.states.length);
            var recommended1 = country.states[randomIndex]; 
           console.log(recommended1);
           create(recommended1);
       }
       else if(country.name.toLowerCase().trim()==="india"&&counttemple2<1){
           var randomIndex2= Math.floor(Math.random() * country.states.length);
            var recommended2 = country.states[randomIndex2]; 
           console.log(recommended2);
       create(recommended2);
           
       }
     
      }
      
     
    }

else {

  for (let i = 0; i < response.data.length; i++) {
    const country = response.data[i];
     const city = country.states.find(s => s.name.toLowerCase().trim() === input);
     let cityindex=  country.states.findIndex(s => s.name.toLowerCase().trim() === input);
     if(city){
    newdiv.innerHTML=`
<div class="card card3" style="width: 30rem;">
   <div >
    <img src="${country.states[cityindex].image}" class="pic" alt="">
               
    </div>
  <div class="card-body">
    <h5 class="card-title">${country.states[cityindex].name}</h5>
    <p class="card-text desc" >${country.states[cityindex].description}</p>
    <a href="#" class="btn btn-primary">Visit</a>
  </div>
</div>`;
count=3;
     }
parent.appendChild(newdiv);
     }

}
}})}
function cleardiv(){
  let parent=document.getElementById("parent");
  count=0;
  countbeache1=0;
  countbeach2=0;
  counttemple1=0;
  counttemple2=0;
  parent.innerHTML="";
}
function create(obj){
   if (!obj) return;
  let newelement = document.createElement("div");
  let parent=document.getElementById("parent");
  newelement.innerHTML=`
<div class="card card3" style="width: 30rem;">
   <div >
    <img src="${obj.image}" class="pic" alt="" >
               
    </div>
  <div class="card-body">
    <h5 class="card-title">${obj.name}</h5>
    <p class="card-text desc" >${obj.description}</p>
    <a href="#" class="btn btn-primary">Visit</a>
  </div>
</div>`;
parent.appendChild(newelement);

       
}