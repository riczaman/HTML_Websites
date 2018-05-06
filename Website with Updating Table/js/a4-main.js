var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

function loadTableWithFilters(){
    var mainTable = document.getElementById("main-table-body");
    mainTable.innerHTML="";

    for(var i=0; i<petData.length; i++){
        if((filterType==="cat" || filterType==="")&& petData[i].type==="cat" && petData[i].age>=filterAgeMin 
           && petData[i].age<=filterAgeMax){
     
            var row = document.createElement("tr"); //create the rows of the table
            var td  = document.createElement("td"); //used to create <td> for the rows 
            var pic= document.createElement("img"); //need to make an image tag
           
            pic.src=petData[i].image.src;
            pic.alt=petData[i].image.alt;
            pic.height=petData[i].image.height;
            pic.width=petData[i].image.width; 
            td.appendChild(pic); 

            var td2= document.createElement("td"); 
            var header= document.createElement("h4"); 
            var text= document.createTextNode(petData[i].name); 
            header.appendChild(text); 
            
            var para = document.createElement("p"); 
            para.innerHTML=petData[i].description; //ok to use inner.html for text blocks 
            var span = document.createElement("span");
            var agep1 = document.createTextNode("Age: ")
            var agep2 = document.createTextNode(petData[i].age);
            var agep3 = document.createTextNode(" years old.")
           
            span.appendChild(agep1);
            span.appendChild(agep2);          
            span.appendChild(agep3);
            td2.appendChild(header); 
            td2.appendChild(para); 
            td2.appendChild(span); 
            row.appendChild(td);
            row.appendChild(td2); 
            mainTable.appendChild(row);
        }
        if((filterType==="dog" || filterType==="")&& petData[i].type==="dog" && petData[i].age>=filterAgeMin 
           && petData[i].age<=filterAgeMax){
     
            var row = document.createElement("tr"); 
            var td  = document.createElement("td"); 
            var pic= document.createElement("img"); 
           
            pic.src=petData[i].image.src;
            pic.alt=petData[i].image.alt;
            pic.height=petData[i].image.height;
            pic.width=petData[i].image.width; 
            td.appendChild(pic); 

            var td2= document.createElement("td"); 
            var header= document.createElement("h4"); 
            var text= document.createTextNode(petData[i].name); 
            header.appendChild(text); 
            
            var para = document.createElement("p"); 
            para.innerHTML=petData[i].description; 
            var span = document.createElement("span");
            var agep1 = document.createTextNode("Age: ")
            var agep2 = document.createTextNode(petData[i].age);
            var agep3 = document.createTextNode(" years old.")

            span.appendChild(agep1);
            span.appendChild(agep2);
            span.appendChild(agep3);
            td2.appendChild(header); 
            td2.appendChild(para); 
            td2.appendChild(span); 
            row.appendChild(td);
            row.appendChild(td2); 
            mainTable.appendChild(row);
        }
        if((filterType==="bird" || filterType==="")&& petData[i].type==="bird" && petData[i].age>=filterAgeMin 
           && petData[i].age<=filterAgeMax){
     
            var row = document.createElement("tr"); 
            var td  = document.createElement("td"); 
            var pic= document.createElement("img"); 
           
            pic.src=petData[i].image.src;
            pic.alt=petData[i].image.alt;
            pic.height=petData[i].image.height;
            pic.width=petData[i].image.width; 
            td.appendChild(pic); 

            var td2= document.createElement("td"); 
            var header= document.createElement("h4"); 
            var text= document.createTextNode(petData[i].name); 
            header.appendChild(text); 
     
            var para = document.createElement("p"); 
            para.innerHTML=petData[i].description; 
            var span = document.createElement("span");
            var agep1 = document.createTextNode("Age: ")
            var agep2 = document.createTextNode(petData[i].age);
            var agep3 = document.createTextNode(" years old.")

            span.appendChild(agep1);
            span.appendChild(agep2);
            span.appendChild(agep3);
            td2.appendChild(header); 
            td2.appendChild(para); 
            td2.appendChild(span); 
            row.appendChild(td);
            row.appendChild(td2); 
            mainTable.appendChild(row);
        }

    }
}

window.onload=function(){
    loadTableWithFilters();
}

function filterDog(){
    filterType="dog"; 
    loadTableWithFilters(); 
}

function filterCat(){
    filterType="cat";
    loadTableWithFilters(); 
}

function filterBird(){
    filterType="bird";
    loadTableWithFilters(); 
}

function filter_zero_1(){
    filterAgeMin=0;
    filterAgeMax=1; 
    loadTableWithFilters();
}

function filter_1_3(){
    filterAgeMin=1;
    filterAgeMax=3; 
    loadTableWithFilters();
}

function filter_4_plus(){
    filterAgeMin=4;
    filterAgeMax=Number.MAX_VALUE
    loadTableWithFilters();
}

function filterAllPets(){
    filterType="";
    filterAgeMin=0; 
    filterAgeMax=Number.MAX_VALUE; 
    loadTableWithFilters(); 
}

