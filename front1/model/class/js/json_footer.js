 




function body_link_fun(general_link,sourceX) { 

  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   
      text= this.responseText;   
    const myArr = JSON.parse(text);
//dit = myArr.header1.Name_element ;

switch(sourceX) {
case "header":
  header_objet = myArr; 
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
// xhttp.open("GET", "json/header.json", true);
xhttp.send();

}
  body_link_fun("json/header.json",header) ; 
  body_link_fun("json/section.json",section) ; 
  body_link_fun("json/footer.json",footer) ; 
  /*
  const myTimeout_2 = setTimeout(section_syn,4000);
  const myTimeout_3 = setTimeout(footer_syn,4000);
*/

 // Action a executer apres synchronisation des fichier




var source_id_parent = "app_footer_0" ; 


function syn_fun() { 

action_footer_0("app_footer_0",true,true) ; 
action_footer_1("app_footer_1",true,true) ; 
action_footer_2("app_footer_2",true,true) ; 
action_footer_3("app_footer_3",true,true) ; 
action_footer_4("app_footer_4",true,true) ; 

action_footer_5("app_footer_5",true,true) ; 
action_footer_6("app_footer_6",true,true) ; 
action_footer_7("app_footer_7",true,true) ; 
action_footer_8("app_footer_8",true,true) ; 
action_footer_9("app_footer_9",true,true) ; 

action_footer_10("app_footer_10",true,true) ; 
action_footer_11("app_footer_11",true,true) ; 
action_footer_12("app_footer_12",true,true) ; 
action_footer_13("app_footer_13",true,true) ; 
action_footer_14("app_footer_14",true,true) ; 

action_footer_15("app_footer_15",true,true) ; 
action_footer_16("app_footer_16",true,true) ; 
action_footer_17("app_footer_17",true,true) ; 
action_footer_18("app_footer_18",true,true) ; 
action_footer_19("app_footer_19",true,true) ; 

action_footer_20("app_footer_20",true,true) ; 
action_footer_21("app_footer_21",true,true) ; 
action_footer_22("app_footer_22",true,true) ; 
action_footer_23("app_footer_23",true,true) ; 
action_footer_24("app_footer_24",true,true) ; 

action_footer_25("app_footer_25",true,true) ;

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

function action_footer_0(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer0.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer0.text ; 
       console.log(footer_objet.footer0.text) ; // information dans la premier table
       console.log(footer_objet.footer0.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer0.className) ;
       // identique footer_objet.footer0.title
       console.log(footer_objet.footer0.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer0.title) ;
       //footer_objet.footer0.id
       console.log(footer_objet.footer0.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer0.text) ; 
       //footer_objet.footer0.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer0.elementchildNodes.length ; 
let quantite2= footer_objet.footer0.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer0.elementchildNodes[i][y]) ; 
  if(footer_objet.footer0.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer0.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer0.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer0.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer0.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer0.elementchildNodes[i][3]);// class
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

function action_footer_1(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer1.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer1.text ; 
       console.log(footer_objet.footer1.text) ; // information dans la premier table
       console.log(footer_objet.footer1.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer1.className) ;
       // identique footer_objet.footer1.title
       console.log(footer_objet.footer1.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer1.title) ;
       //footer_objet.footer1.id
       console.log(footer_objet.footer1.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer1.text) ; 
       //footer_objet.footer0.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer1.elementchildNodes.length ; 
let quantite2= footer_objet.footer1.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer1.elementchildNodes[i][y]) ; 
  if(footer_objet.footer1.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer1.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer1.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer1.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer1.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer1.elementchildNodes[i][3]);// class
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

function action_footer_2(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer2.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer2.text ; 
       console.log(footer_objet.footer2.text) ; // information dans la premier table
       console.log(footer_objet.footer2.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer2.className) ;
       // identique footer_objet.footer2.title
       console.log(footer_objet.footer2.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer2.title) ;
       //footer_objet.footer2.id
       console.log(footer_objet.footer2.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer2.text) ; 
       //footer_objet.footer2.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer2.elementchildNodes.length ; 
let quantite2= footer_objet.footer2.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer2.elementchildNodes[i][y]) ; 
  if(footer_objet.footer2.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer2.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer2.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer2.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer2.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer2.elementchildNodes[i][3]);// class
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

function action_footer_3(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer3.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer3.text ; 
       console.log(footer_objet.footer3.text) ; // information dans la premier table
       console.log(footer_objet.footer3.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer3.className) ;
       // identique footer_objet.footer3.title
       console.log(footer_objet.footer3.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer3.title) ;
       //footer_objet.footer3.id
       console.log(footer_objet.footer3.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer3.text) ; 
       //footer_objet.footer3.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer3.elementchildNodes.length ; 
let quantite2= footer_objet.footer3.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer3.elementchildNodes[i][y]) ; 
  if(footer_objet.footer3.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer3.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer3.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer3.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer3.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer3.elementchildNodes[i][3]);// class
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

function action_footer_4(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer4.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer4.text ; 
       console.log(footer_objet.footer4.text) ; // information dans la premier table
       console.log(footer_objet.footer4.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer4.className) ;
       // identique footer_objet.footer4.title
       console.log(footer_objet.footer4.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer4.title) ;
       //footer_objet.footer4.id
       console.log(footer_objet.footer4.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer4.text) ; 
       //footer_objet.footer4.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer4.elementchildNodes.length ; 
let quantite2= footer_objet.footer4.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer4.elementchildNodes[i][y]) ; 
  if(footer_objet.footer4.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer4.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer4.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer4.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer4.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer4.elementchildNodes[i][3]);// class
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

function action_footer_5(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer5.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer5.text ; 
       console.log(footer_objet.footer5.text) ; // information dans la premier table
       console.log(footer_objet.footer5.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer5.className) ;
       // identique footer_objet.footer5.title
       console.log(footer_objet.footer5.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer5.title) ;
       //footer_objet.footer5.id
       console.log(footer_objet.footer5.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer5.text) ; 
       //footer_objet.footer5.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer5.elementchildNodes.length ; 
let quantite2= footer_objet.footer5.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer5.elementchildNodes[i][y]) ; 
  if(footer_objet.footer5.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer5.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer5.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer5.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer5.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer5.elementchildNodes[i][3]);// class
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

function action_footer_6(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer6.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer6.text ; 
       console.log(footer_objet.footer6.text) ; // information dans la premier table
       console.log(footer_objet.footer6.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer6.className) ;
       // identique footer_objet.footer6.title
       console.log(footer_objet.footer6.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer6.title) ;
       //footer_objet.footer6.id
       console.log(footer_objet.footer6.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer6.text) ; 
       //footer_objet.footer6.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer6.elementchildNodes.length ; 
let quantite2= footer_objet.footer6.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer6.elementchildNodes[i][y]) ; 
  if(footer_objet.footer6.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer6.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer6.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer6.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer6.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer6.elementchildNodes[i][3]);// class
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

function action_footer_7(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer7.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer7.text ; 
       console.log(footer_objet.footer7.text) ; // information dans la premier table
       console.log(footer_objet.footer7.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer7.className) ;
       // identique footer_objet.footer7.title
       console.log(footer_objet.footer7.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer7.title) ;
       //footer_objet.footer7.id
       console.log(footer_objet.footer7.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer7.text) ; 
       //footer_objet.footer7.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer7.elementchildNodes.length ; 
let quantite2= footer_objet.footer7.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer7.elementchildNodes[i][y]) ; 
  if(footer_objet.footer7.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer7.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer7.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer7.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer7.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer7.elementchildNodes[i][3]);// class
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

function action_footer_8(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer8.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer8.text ; 
       console.log(footer_objet.footer8.text) ; // information dans la premier table
       console.log(footer_objet.footer8.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer8.className) ;
       // identique footer_objet.footer8.title
       console.log(footer_objet.footer8.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer8.title) ;
       //footer_objet.footer8.id
       console.log(footer_objet.footer8.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer8.text) ; 
       //footer_objet.footer0.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer8.elementchildNodes.length ; 
let quantite2= footer_objet.footer8.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer8.elementchildNodes[i][y]) ; 
  if(footer_objet.footer8.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer8.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer8.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer8.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer8.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer8.elementchildNodes[i][3]);// class
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

function action_footer_9(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer9.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer9.text ; 
       console.log(footer_objet.footer9.text) ; // information dans la premier table
       console.log(footer_objet.footer9.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer9.className) ;
       // identique footer_objet.footer9.title
       console.log(footer_objet.footer9.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer9.title) ;
       //footer_objet.footer9.id
       console.log(footer_objet.footer9.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer9.text) ; 
       //footer_objet.footer9.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer9.elementchildNodes.length ; 
let quantite2= footer_objet.footer9.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer9.elementchildNodes[i][y]) ; 
  if(footer_objet.footer9.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer9.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer9.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer9.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer9.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer9.elementchildNodes[i][3]);// class
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

function action_footer_10(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer10.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer10.text ; 
       console.log(footer_objet.footer10.text) ; // information dans la premier table
       console.log(footer_objet.footer10.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer10.className) ;
       // identique footer_objet.footer10.title
       console.log(footer_objet.footer10.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer10.title) ;
       //footer_objet.footer10.id
       console.log(footer_objet.footer10.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer10.text) ; 
       //footer_objet.footer10.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer10.elementchildNodes.length ; 
let quantite2= footer_objet.footer10.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer10.elementchildNodes[i][y]) ; 
  if(footer_objet.footer10.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer10.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer10.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer10.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer10.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer10.elementchildNodes[i][3]);// class
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

function action_footer_11(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer11.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer11.text ; 
       console.log(footer_objet.footer11.text) ; // information dans la premier table
       console.log(footer_objet.footer11.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer11.className) ;
       // identique footer_objet.footer11.title
       console.log(footer_objet.footer11.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer11.title) ;
       //footer_objet.footer11.id
       console.log(footer_objet.footer11.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer11.text) ; 
       //footer_objet.footer11.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer11.elementchildNodes.length ; 
let quantite2= footer_objet.footer11.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer11.elementchildNodes[i][y]) ; 
  if(footer_objet.footer11.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer11.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer11.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer11.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer11.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer11.elementchildNodes[i][3]);// class
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

function action_footer_12(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer12.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer12.text ; 
       console.log(footer_objet.footer12.text) ; // information dans la premier table
       console.log(footer_objet.footer12.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer12.className) ;
       // identique footer_objet.footer12.title
       console.log(footer_objet.footer12.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer12.title) ;
       //footer_objet.footer12.id
       console.log(footer_objet.footer12.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer12.text) ; 
       //footer_objet.footer12.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer12.elementchildNodes.length ; 
let quantite2= footer_objet.footer12.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer12.elementchildNodes[i][y]) ; 
  if(footer_objet.footer12.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer12.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer12.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer12.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer12.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer12.elementchildNodes[i][3]);// class
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

function action_footer_13(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer14.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer14.text ; 
       console.log(footer_objet.footer14.text) ; // information dans la premier table
       console.log(footer_objet.footer14.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer14.className) ;
       // identique footer_objet.footer14.title
       console.log(footer_objet.footer14.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer14.title) ;
       //footer_objet.footer14.id
       console.log(footer_objet.footer14.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer14.text) ; 
       //footer_objet.footer14.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer14.elementchildNodes.length ; 
let quantite2= footer_objet.footer14.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer14.elementchildNodes[i][y]) ; 
  if(footer_objet.footer14.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer14.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer14.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer14.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer14.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer14.elementchildNodes[i][3]);// class
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

function action_footer_14(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer14.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer14.text ; 
       console.log(footer_objet.footer14.text) ; // information dans la premier table
       console.log(footer_objet.footer14.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer14.className) ;
       // identique footer_objet.footer14.title
       console.log(footer_objet.footer14.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer14.title) ;
       //footer_objet.footer14.id
       console.log(footer_objet.footer14.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer14.text) ; 
       //footer_objet.footer14.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer14.elementchildNodes.length ; 
let quantite2= footer_objet.footer14.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer14.elementchildNodes[i][y]) ; 
  if(footer_objet.footer14.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer14.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer14.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer14.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer14.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer14.elementchildNodes[i][3]);// class
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

function action_footer_15(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer15.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer15.text ; 
       console.log(footer_objet.footer15.text) ; // information dans la premier table
       console.log(footer_objet.footer15.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer15.className) ;
       // identique footer_objet.footer15.title
       console.log(footer_objet.footer15.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer15.title) ;
       //footer_objet.footer15.id
       console.log(footer_objet.footer15.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer15.text) ; 
       //footer_objet.footer15.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer15.elementchildNodes.length ; 
let quantite2= footer_objet.footer15.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer15.elementchildNodes[i][y]) ; 
  if(footer_objet.footer15.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer15.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer15.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer15.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer15.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer15.elementchildNodes[i][3]);// class
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

function action_footer_16(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer16.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer16.text ; 
       console.log(footer_objet.footer16.text) ; // information dans la premier table
       console.log(footer_objet.footer16.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer16.className) ;
       // identique footer_objet.footer16.title
       console.log(footer_objet.footer16.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer16.title) ;
       //footer_objet.footer16.id
       console.log(footer_objet.footer16.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer16.text) ; 
       //footer_objet.footer16.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer16.elementchildNodes.length ; 
let quantite2= footer_objet.footer16.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer16.elementchildNodes[i][y]) ; 
  if(footer_objet.footer16.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer16.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer16.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer16.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer16.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer16.elementchildNodes[i][3]);// class
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

function action_footer_17(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer17.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer17.text ; 
       console.log(footer_objet.footer17.text) ; // information dans la premier table
       console.log(footer_objet.footer17.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer17.className) ;
       // identique footer_objet.footer17.title
       console.log(footer_objet.footer17.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer17.title) ;
       //footer_objet.footer17.id
       console.log(footer_objet.footer17.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer17.text) ; 
       //footer_objet.footer17.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer17.elementchildNodes.length ; 
let quantite2= footer_objet.footer17.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer17.elementchildNodes[i][y]) ; 
  if(footer_objet.footer17.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer17.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer17.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer17.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer17.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer17.elementchildNodes[i][3]);// class
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

function action_footer_18(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer18.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer18.text ; 
       console.log(footer_objet.footer18.text) ; // information dans la premier table
       console.log(footer_objet.footer18.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer18.className) ;
       // identique footer_objet.footer18.title
       console.log(footer_objet.footer18.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer18.title) ;
       //footer_objet.footer18.id
       console.log(footer_objet.footer18.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer18.text) ; 
       //footer_objet.footer18.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer18.elementchildNodes.length ; 
let quantite2= footer_objet.footer18.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer18.elementchildNodes[i][y]) ; 
  if(footer_objet.footer18.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer18.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer18.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer18.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer18.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer18.elementchildNodes[i][3]);// class
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

function action_footer_19(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer19.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer19.text ; 
       console.log(footer_objet.footer19.text) ; // information dans la premier table
       console.log(footer_objet.footer19.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer19.className) ;
       // identique footer_objet.footer19.title
       console.log(footer_objet.footer19.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer19.title) ;
       //footer_objet.footer19.id
       console.log(footer_objet.footer19.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer19.text) ; 
       //footer_objet.footer19.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer19.elementchildNodes.length ; 
let quantite2= footer_objet.footer19.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer19.elementchildNodes[i][y]) ; 
  if(footer_objet.footer19.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer19.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer19.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer19.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer19.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer19.elementchildNodes[i][3]);// class
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

function action_footer_20(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer20.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer20.text ; 
       console.log(footer_objet.footer20.text) ; // information dans la premier table
       console.log(footer_objet.footer20.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer20.className) ;
       // identique footer_objet.footer20.title
       console.log(footer_objet.footer20.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer20.title) ;
       //footer_objet.footer20.id
       console.log(footer_objet.footer20.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer20.text) ; 
       //footer_objet.footer20.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer20.elementchildNodes.length ; 
let quantite2= footer_objet.footer20.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer20.elementchildNodes[i][y]) ; 
  if(footer_objet.footer20.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer20.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer20.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer20.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer20.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer20.elementchildNodes[i][3]);// class
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

function action_footer_21(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer21.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer21.text ; 
       console.log(footer_objet.footer21.text) ; // information dans la premier table
       console.log(footer_objet.footer21.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer21.className) ;
       // identique footer_objet.footer21.title
       console.log(footer_objet.footer21.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer21.title) ;
       //footer_objet.footer21.id
       console.log(footer_objet.footer21.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer21.text) ; 
       //footer_objet.footer21.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer21.elementchildNodes.length ; 
let quantite2= footer_objet.footer21.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer21.elementchildNodes[i][y]) ; 
  if(footer_objet.footer21.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer21.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer21.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer21.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer21.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer21.elementchildNodes[i][3]);// class
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

function action_footer_22(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer23.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer23.text ; 
       console.log(footer_objet.footer23.text) ; // information dans la premier table
       console.log(footer_objet.footer23.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer23.className) ;
       // identique footer_objet.footer23.title
       console.log(footer_objet.footer23.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer23.title) ;
       //footer_objet.footer23.id
       console.log(footer_objet.footer23.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer23.text) ; 
       //footer_objet.footer23.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer23.elementchildNodes.length ; 
let quantite2= footer_objet.footer23.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer23.elementchildNodes[i][y]) ; 
  if(footer_objet.footer23.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer23.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer23.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer23.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer23.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer23.elementchildNodes[i][3]);// class
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

function action_footer_23(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer23.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer23.text ; 
       console.log(footer_objet.footer23.text) ; // information dans la premier table
       console.log(footer_objet.footer23.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer23.className) ;
       // identique footer_objet.footer23.title
       console.log(footer_objet.footer23.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer23.title) ;
       //footer_objet.footer23.id
       console.log(footer_objet.footer23.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer23.text) ; 
       //footer_objet.footer23.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer23.elementchildNodes.length ; 
let quantite2= footer_objet.footer23.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer23.elementchildNodes[i][y]) ; 
  if(footer_objet.footer23.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer23.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer23.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer23.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer23.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer23.elementchildNodes[i][3]);// class
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

function action_footer_24(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer24.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer24.text ; 
       console.log(footer_objet.footer24.text) ; // information dans la premier table
       console.log(footer_objet.footer24.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer24.className) ;
       // identique footer_objet.footer24.title
       console.log(footer_objet.footer24.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer24.title) ;
       //footer_objet.footer24.id
       console.log(footer_objet.footer24.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer24.text) ; 
       //footer_objet.footer24.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer24.elementchildNodes.length ; 
let quantite2= footer_objet.footer24.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer24.elementchildNodes[i][y]) ; 
  if(footer_objet.footer24.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer24.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer24.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer24.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer24.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer24.elementchildNodes[i][3]);// class
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

function action_footer_25(source_id_parent,bool_parent,bool_child){
var bool_parent_result ; 
// condition de fonctionnement si la variable est vrai 
if(footer_objet.footer25.value==bool_parent){
  document.getElementById(source_id_parent).innerHTML=footer_objet.footer25.text ; 
       console.log(footer_objet.footer25.text) ; // information dans la premier table
       console.log(footer_objet.footer25.elementchildNodes[0][0]) ;
       document.getElementById(source_id_parent).setAttribute("class",footer_objet.footer25.className) ;
       // identique footer_objet.footer25.title
       console.log(footer_objet.footer25.elementchildNodes[0][1]) ;
       document.getElementById(source_id_parent).setAttribute("title",footer_objet.footer25.title) ;
       //footer_objet.footer25.id
       console.log(footer_objet.footer25.elementchildNodes[0][2]) ;
       document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
       //document.getElementById("demo").innerHTML = "I have changed!";         
       console.log(footer_objet.footer25.text) ; 
       //footer_objet.footer25.className 
       bool_parent_result = true ; 
}




let quantite1= footer_objet.footer25.elementchildNodes.length ; 
let quantite2= footer_objet.footer25.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){

if(y==0){
  console.log(footer_objet.footer25.elementchildNodes[i][y]) ; 
  if(footer_objet.footer25.elementchildNodes[i][y]==bool_child){


       // Create an "li" node:


       if(bool_parent_result==true){
                    const node = document.createElement(footer_objet.footer25.elementchildNodes[i][4]); // atribute
                    const textnode = document.createTextNode(footer_objet.footer25.elementchildNodes[i][5]); //text
                    node.setAttribute("id", footer_objet.footer25.elementchildNodes[i][2]); // id
                    node.setAttribute("title", footer_objet.footer25.elementchildNodes[i][1]);// title                  
                    node.setAttribute("class", footer_objet.footer25.elementchildNodes[i][3]);// class
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
const footer_activation_total = setTimeout(syn_fun,250);


