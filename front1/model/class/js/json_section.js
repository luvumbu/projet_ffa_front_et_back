 




function body_link_fun(general_link,sourceX) { 

  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   
      text= this.responseText;   
    const myArr = JSON.parse(text);
//dit = myArr.section1.Name_element ;

switch(sourceX) {
case "section":
  section_objet = myArr; 
  // clonage de l'objet dans une variable exterieur
  break;
case "section":
  section_objet = myArr; 
  // clonage de l'objet dans une variable exterieur
  break;
  case "footer":
  footer_objet = myArr; 
  // clonage de l'objet dans une variable exterieur
  break;
default:
  // code block
}

  }
};
xhttp.open("GET", general_link, true); 
// xhttp.open("GET", "json/section.json", true);
xhttp.send();

}
  body_link_fun("json/section.json",section) ; 
  body_link_fun("json/section.json",section) ; 
  body_link_fun("json/footer.json",footer) ; 
  /*
  const myTimeout_2 = setTimeout(section_syn,4000);
  const myTimeout_3 = setTimeout(footer_syn,4000);
*/

 // Action a executer apres synchronisation des fichier




 


function syn_fun() { 

action_section_0("app_section_0",true,true) ; 
action_section_1("app_section_1",true,true) ; 
action_section_2("app_section_2",true,true) ; 
action_section_3("app_section_3",true,true) ; 
action_section_4("app_section_4",true,true) ; 

action_section_5("app_section_5",true,true) ; 
action_section_6("app_section_6",true,true) ; 
action_section_7("app_section_7",true,true) ; 
action_section_8("app_section_8",true,true) ; 
action_section_9("app_section_9",true,true) ; 

action_section_10("app_section_10",true,true) ; 
action_section_11("app_section_11",true,true) ; 
action_section_12("app_section_12",true,true) ; 
action_section_13("app_section_13",true,true) ; 
action_section_14("app_section_14",true,true) ; 

action_section_15("app_section_15",true,true) ; 
action_section_16("app_section_16",true,true) ; 
action_section_17("app_section_17",true,true) ; 
action_section_18("app_section_18",true,true) ; 
action_section_19("app_section_19",true,true) ; 

action_section_20("app_section_20",true,true) ; 
action_section_21("app_section_21",true,true) ; 
action_section_22("app_section_22",true,true) ; 
action_section_23("app_section_23",true,true) ; 
action_section_24("app_section_24",true,true) ; 

action_section_25("app_section_25",true,true) ;

// Parametre 1 source
// Parametre 2 Bool parent
// Parametre 1 Bool enfant

 // exemple 
 
}







/**
* 
bool_parent = lutilisateur donne une valeur vrai ou fausse le parametre doit avoir le meme bool que le fichier json pour
eytre visible 
si non il inverse sa logique

source_id_parent 
il s'agit de Id parent

valeur bool pour enfants 

*/

function action_section_0(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section0.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section0.text ; 
       console.log(section_objet.section0.text) ; // information dans la premier table
       console.log(section_objet.section0.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section0.className) ;
       // identique section_objet.section0.title
       console.log(section_objet.section0.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section0.title) ;
       //section_objet.section0.id
       console.log(section_objet.section0.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section0.text) ; 
       //section_objet.section0.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section0.elementchildNodes.length ; 
let quantite2= section_objet.section0.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section0.elementchildNodes[i][y]) ; 
  if(section_objet.section0.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section0.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section0.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section0.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section0.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section0.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_1(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section1.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section1.text ; 
       console.log(section_objet.section1.text) ; // information dans la premier table
       console.log(section_objet.section1.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section1.className) ;
       // identique section_objet.section1.title
       console.log(section_objet.section1.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section1.title) ;
       //section_objet.section1.id
       console.log(section_objet.section1.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section1.text) ; 
       //section_objet.section0.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section1.elementchildNodes.length ; 
let quantite2= section_objet.section1.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section1.elementchildNodes[i][y]) ; 
  if(section_objet.section1.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section1.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section1.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section1.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section1.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section1.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_2(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section2.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section2.text ; 
       console.log(section_objet.section2.text) ; // information dans la premier table
       console.log(section_objet.section2.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section2.className) ;
       // identique section_objet.section2.title
       console.log(section_objet.section2.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section2.title) ;
       //section_objet.section2.id
       console.log(section_objet.section2.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section2.text) ; 
       //section_objet.section2.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section2.elementchildNodes.length ; 
let quantite2= section_objet.section2.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section2.elementchildNodes[i][y]) ; 
  if(section_objet.section2.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section2.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section2.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section2.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section2.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section2.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_3(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section3.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section3.text ; 
       console.log(section_objet.section3.text) ; // information dans la premier table
       console.log(section_objet.section3.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section3.className) ;
       // identique section_objet.section3.title
       console.log(section_objet.section3.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section3.title) ;
       //section_objet.section3.id
       console.log(section_objet.section3.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section3.text) ; 
       //section_objet.section3.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section3.elementchildNodes.length ; 
let quantite2= section_objet.section3.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section3.elementchildNodes[i][y]) ; 
  if(section_objet.section3.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section3.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section3.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section3.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section3.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section3.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_4(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section4.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section4.text ; 
       console.log(section_objet.section4.text) ; // information dans la premier table
       console.log(section_objet.section4.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section4.className) ;
       // identique section_objet.section4.title
       console.log(section_objet.section4.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section4.title) ;
       //section_objet.section4.id
       console.log(section_objet.section4.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section4.text) ; 
       //section_objet.section4.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section4.elementchildNodes.length ; 
let quantite2= section_objet.section4.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section4.elementchildNodes[i][y]) ; 
  if(section_objet.section4.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section4.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section4.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section4.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section4.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section4.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_5(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section5.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section5.text ; 
       console.log(section_objet.section5.text) ; // information dans la premier table
       console.log(section_objet.section5.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section5.className) ;
       // identique section_objet.section5.title
       console.log(section_objet.section5.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section5.title) ;
       //section_objet.section5.id
       console.log(section_objet.section5.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section5.text) ; 
       //section_objet.section5.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section5.elementchildNodes.length ; 
let quantite2= section_objet.section5.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section5.elementchildNodes[i][y]) ; 
  if(section_objet.section5.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section5.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section5.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section5.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section5.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section5.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_6(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section6.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section6.text ; 
       console.log(section_objet.section6.text) ; // information dans la premier table
       console.log(section_objet.section6.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section6.className) ;
       // identique section_objet.section6.title
       console.log(section_objet.section6.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section6.title) ;
       //section_objet.section6.id
       console.log(section_objet.section6.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section6.text) ; 
       //section_objet.section6.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section6.elementchildNodes.length ; 
let quantite2= section_objet.section6.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section6.elementchildNodes[i][y]) ; 
  if(section_objet.section6.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section6.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section6.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section6.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section6.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section6.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_7(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section7.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section7.text ; 
       console.log(section_objet.section7.text) ; // information dans la premier table
       console.log(section_objet.section7.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section7.className) ;
       // identique section_objet.section7.title
       console.log(section_objet.section7.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section7.title) ;
       //section_objet.section7.id
       console.log(section_objet.section7.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section7.text) ; 
       //section_objet.section7.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section7.elementchildNodes.length ; 
let quantite2= section_objet.section7.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section7.elementchildNodes[i][y]) ; 
  if(section_objet.section7.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section7.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section7.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section7.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section7.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section7.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_8(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section8.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section8.text ; 
       console.log(section_objet.section8.text) ; // information dans la premier table
       console.log(section_objet.section8.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section8.className) ;
       // identique section_objet.section8.title
       console.log(section_objet.section8.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section8.title) ;
       //section_objet.section8.id
       console.log(section_objet.section8.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section8.text) ; 
       //section_objet.section0.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section8.elementchildNodes.length ; 
let quantite2= section_objet.section8.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section8.elementchildNodes[i][y]) ; 
  if(section_objet.section8.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section8.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section8.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section8.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section8.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section8.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_9(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section9.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section9.text ; 
       console.log(section_objet.section9.text) ; // information dans la premier table
       console.log(section_objet.section9.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section9.className) ;
       // identique section_objet.section9.title
       console.log(section_objet.section9.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section9.title) ;
       //section_objet.section9.id
       console.log(section_objet.section9.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section9.text) ; 
       //section_objet.section9.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section9.elementchildNodes.length ; 
let quantite2= section_objet.section9.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section9.elementchildNodes[i][y]) ; 
  if(section_objet.section9.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section9.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section9.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section9.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section9.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section9.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_10(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section10.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section10.text ; 
       console.log(section_objet.section10.text) ; // information dans la premier table
       console.log(section_objet.section10.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section10.className) ;
       // identique section_objet.section10.title
       console.log(section_objet.section10.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section10.title) ;
       //section_objet.section10.id
       console.log(section_objet.section10.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section10.text) ; 
       //section_objet.section10.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section10.elementchildNodes.length ; 
let quantite2= section_objet.section10.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section10.elementchildNodes[i][y]) ; 
  if(section_objet.section10.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section10.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section10.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section10.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section10.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section10.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_11(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section11.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section11.text ; 
       console.log(section_objet.section11.text) ; // information dans la premier table
       console.log(section_objet.section11.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section11.className) ;
       // identique section_objet.section11.title
       console.log(section_objet.section11.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section11.title) ;
       //section_objet.section11.id
       console.log(section_objet.section11.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section11.text) ; 
       //section_objet.section11.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section11.elementchildNodes.length ; 
let quantite2= section_objet.section11.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section11.elementchildNodes[i][y]) ; 
  if(section_objet.section11.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section11.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section11.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section11.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section11.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section11.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_12(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section12.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section12.text ; 
       console.log(section_objet.section12.text) ; // information dans la premier table
       console.log(section_objet.section12.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section12.className) ;
       // identique section_objet.section12.title
       console.log(section_objet.section12.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section12.title) ;
       //section_objet.section12.id
       console.log(section_objet.section12.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section12.text) ; 
       //section_objet.section12.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section12.elementchildNodes.length ; 
let quantite2= section_objet.section12.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section12.elementchildNodes[i][y]) ; 
  if(section_objet.section12.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section12.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section12.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section12.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section12.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section12.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_13(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section14.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section14.text ; 
       console.log(section_objet.section14.text) ; // information dans la premier table
       console.log(section_objet.section14.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section14.className) ;
       // identique section_objet.section14.title
       console.log(section_objet.section14.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section14.title) ;
       //section_objet.section14.id
       console.log(section_objet.section14.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section14.text) ; 
       //section_objet.section14.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section14.elementchildNodes.length ; 
let quantite2= section_objet.section14.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section14.elementchildNodes[i][y]) ; 
  if(section_objet.section14.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section14.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section14.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section14.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section14.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section14.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_14(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section14.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section14.text ; 
       console.log(section_objet.section14.text) ; // information dans la premier table
       console.log(section_objet.section14.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section14.className) ;
       // identique section_objet.section14.title
       console.log(section_objet.section14.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section14.title) ;
       //section_objet.section14.id
       console.log(section_objet.section14.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section14.text) ; 
       //section_objet.section14.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section14.elementchildNodes.length ; 
let quantite2= section_objet.section14.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section14.elementchildNodes[i][y]) ; 
  if(section_objet.section14.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section14.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section14.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section14.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section14.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section14.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_15(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section15.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section15.text ; 
       console.log(section_objet.section15.text) ; // information dans la premier table
       console.log(section_objet.section15.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section15.className) ;
       // identique section_objet.section15.title
       console.log(section_objet.section15.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section15.title) ;
       //section_objet.section15.id
       console.log(section_objet.section15.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section15.text) ; 
       //section_objet.section15.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section15.elementchildNodes.length ; 
let quantite2= section_objet.section15.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section15.elementchildNodes[i][y]) ; 
  if(section_objet.section15.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section15.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section15.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section15.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section15.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section15.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_16(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section16.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section16.text ; 
       console.log(section_objet.section16.text) ; // information dans la premier table
       console.log(section_objet.section16.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section16.className) ;
       // identique section_objet.section16.title
       console.log(section_objet.section16.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section16.title) ;
       //section_objet.section16.id
       console.log(section_objet.section16.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section16.text) ; 
       //section_objet.section16.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section16.elementchildNodes.length ; 
let quantite2= section_objet.section16.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section16.elementchildNodes[i][y]) ; 
  if(section_objet.section16.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section16.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section16.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section16.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section16.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section16.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_17(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section17.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section17.text ; 
       console.log(section_objet.section17.text) ; // information dans la premier table
       console.log(section_objet.section17.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section17.className) ;
       // identique section_objet.section17.title
       console.log(section_objet.section17.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section17.title) ;
       //section_objet.section17.id
       console.log(section_objet.section17.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section17.text) ; 
       //section_objet.section17.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section17.elementchildNodes.length ; 
let quantite2= section_objet.section17.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section17.elementchildNodes[i][y]) ; 
  if(section_objet.section17.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section17.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section17.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section17.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section17.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section17.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_18(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section18.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section18.text ; 
       console.log(section_objet.section18.text) ; // information dans la premier table
       console.log(section_objet.section18.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section18.className) ;
       // identique section_objet.section18.title
       console.log(section_objet.section18.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section18.title) ;
       //section_objet.section18.id
       console.log(section_objet.section18.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section18.text) ; 
       //section_objet.section18.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section18.elementchildNodes.length ; 
let quantite2= section_objet.section18.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section18.elementchildNodes[i][y]) ; 
  if(section_objet.section18.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section18.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section18.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section18.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section18.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section18.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_19(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section19.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section19.text ; 
       console.log(section_objet.section19.text) ; // information dans la premier table
       console.log(section_objet.section19.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section19.className) ;
       // identique section_objet.section19.title
       console.log(section_objet.section19.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section19.title) ;
       //section_objet.section19.id
       console.log(section_objet.section19.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section19.text) ; 
       //section_objet.section19.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section19.elementchildNodes.length ; 
let quantite2= section_objet.section19.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section19.elementchildNodes[i][y]) ; 
  if(section_objet.section19.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section19.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section19.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section19.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section19.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section19.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_20(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section20.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section20.text ; 
       console.log(section_objet.section20.text) ; // information dans la premier table
       console.log(section_objet.section20.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section20.className) ;
       // identique section_objet.section20.title
       console.log(section_objet.section20.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section20.title) ;
       //section_objet.section20.id
       console.log(section_objet.section20.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section20.text) ; 
       //section_objet.section20.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section20.elementchildNodes.length ; 
let quantite2= section_objet.section20.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section20.elementchildNodes[i][y]) ; 
  if(section_objet.section20.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section20.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section20.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section20.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section20.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section20.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_21(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section21.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section21.text ; 
       console.log(section_objet.section21.text) ; // information dans la premier table
       console.log(section_objet.section21.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section21.className) ;
       // identique section_objet.section21.title
       console.log(section_objet.section21.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section21.title) ;
       //section_objet.section21.id
       console.log(section_objet.section21.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section21.text) ; 
       //section_objet.section21.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section21.elementchildNodes.length ; 
let quantite2= section_objet.section21.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section21.elementchildNodes[i][y]) ; 
  if(section_objet.section21.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section21.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section21.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section21.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section21.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section21.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_22(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section23.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section23.text ; 
       console.log(section_objet.section23.text) ; // information dans la premier table
       console.log(section_objet.section23.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section23.className) ;
       // identique section_objet.section23.title
       console.log(section_objet.section23.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section23.title) ;
       //section_objet.section23.id
       console.log(section_objet.section23.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section23.text) ; 
       //section_objet.section23.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section23.elementchildNodes.length ; 
let quantite2= section_objet.section23.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section23.elementchildNodes[i][y]) ; 
  if(section_objet.section23.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section23.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section23.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section23.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section23.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section23.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_23(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section23.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section23.text ; 
       console.log(section_objet.section23.text) ; // information dans la premier table
       console.log(section_objet.section23.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section23.className) ;
       // identique section_objet.section23.title
       console.log(section_objet.section23.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section23.title) ;
       //section_objet.section23.id
       console.log(section_objet.section23.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section23.text) ; 
       //section_objet.section23.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section23.elementchildNodes.length ; 
let quantite2= section_objet.section23.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section23.elementchildNodes[i][y]) ; 
  if(section_objet.section23.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section23.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section23.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section23.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section23.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section23.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_24(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section24.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section24.text ; 
       console.log(section_objet.section24.text) ; // information dans la premier table
       console.log(section_objet.section24.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section24.className) ;
       // identique section_objet.section24.title
       console.log(section_objet.section24.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section24.title) ;
       //section_objet.section24.id
       console.log(section_objet.section24.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section24.text) ; 
       //section_objet.section24.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section24.elementchildNodes.length ; 
let quantite2= section_objet.section24.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section24.elementchildNodes[i][y]) ; 
  if(section_objet.section24.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section24.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section24.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section24.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section24.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section24.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}

function action_section_25(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(section_objet.section25.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=section_objet.section25.text ; 
       console.log(section_objet.section25.text) ; // information dans la premier table
       console.log(section_objet.section25.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",section_objet.section25.className) ;
       // identique section_objet.section25.title
       console.log(section_objet.section25.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",section_objet.section25.title) ;
       //section_objet.section25.id
       console.log(section_objet.section25.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(section_objet.section25.text) ; 
       //section_objet.section25.className 
       bool_parent_result = true ; 
}




let quantite1= section_objet.section25.elementchildNodes.length ; 
let quantite2= section_objet.section25.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(section_objet.section25.elementchildNodes[i][y]) ; 
  if(section_objet.section25.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(section_objet.section25.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(section_objet.section25.elementchildNodes[i][5]); //text
                    node.setAttribute("id", section_objet.section25.elementchildNodes[i][2]); // id
                    node.setAttribute("title", section_objet.section25.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", section_objet.section25.elementchildNodes[i][3]);// class
                    // donne un atribut
                    // Create a text node:                  
                    // Append the text node to the "li" node:
                    node.appendChild(textnode);                 
                    // Append the "li" node to the list:
                    document.getElementById(source_id_parent).appendChild(node);
       }

      }
}
} 
}


}






const section_activation_total = setTimeout(syn_fun,250);


