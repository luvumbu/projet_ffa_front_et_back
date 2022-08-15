 




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
 



 var source_id_parent = "app_header_0" ; 
 

 function syn_fun() { 
 
  action_header_0("app_header_0",true,true) ; 
  action_header_1("app_header_1",true,true) ; 
  action_header_2("app_header_2",true,true) ; 
  action_header_3("app_header_3",true,true) ; 
  action_header_4("app_header_4",true,true) ; 

  action_header_5("app_header_5",true,true) ; 
  action_header_6("app_header_6",true,true) ; 
  action_header_7("app_header_7",true,true) ; 
  action_header_8("app_header_8",true,true) ; 
  action_header_9("app_header_9",true,true) ; 

  action_header_10("app_header_10",true,true) ; 
  action_header_11("app_header_11",true,true) ; 
  action_header_12("app_header_12",true,true) ; 
  action_header_13("app_header_13",true,true) ; 
  action_header_14("app_header_14",true,true) ; 

  action_header_15("app_header_15",true,true) ; 
  action_header_16("app_header_16",true,true) ; 
  action_header_17("app_header_17",true,true) ; 
  action_header_18("app_header_18",true,true) ; 
  action_header_19("app_header_19",true,true) ; 

  action_header_20("app_header_20",true,true) ; 
  action_header_21("app_header_21",true,true) ; 
  action_header_22("app_header_22",true,true) ; 
  action_header_23("app_header_23",true,true) ; 
  action_header_24("app_header_24",true,true) ; 

  action_header_25("app_header_25",true,true) ;

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

 function action_header_0(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header0.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header0.text ; 
         console.log(header_objet.header0.text) ; // information dans la premier table
         console.log(header_objet.header0.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header0.className) ;
         // identique header_objet.header0.title
         console.log(header_objet.header0.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header0.title) ;
         //header_objet.header0.id
         console.log(header_objet.header0.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header0.text) ; 
         //header_objet.header0.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header0.elementchildNodes.length ; 
let quantite2= header_objet.header0.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header0.elementchildNodes[i][y]) ; 
    if(header_objet.header0.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header0.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header0.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header0.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header0.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header0.elementchildNodes[i][3]);// class
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

 function action_header_1(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header1.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header1.text ; 
         console.log(header_objet.header1.text) ; // information dans la premier table
         console.log(header_objet.header1.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header1.className) ;
         // identique header_objet.header1.title
         console.log(header_objet.header1.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header1.title) ;
         //header_objet.header1.id
         console.log(header_objet.header1.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header1.text) ; 
         //header_objet.header0.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header1.elementchildNodes.length ; 
let quantite2= header_objet.header1.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header1.elementchildNodes[i][y]) ; 
    if(header_objet.header1.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header1.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header1.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header1.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header1.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header1.elementchildNodes[i][3]);// class
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

 function action_header_2(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header2.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header2.text ; 
         console.log(header_objet.header2.text) ; // information dans la premier table
         console.log(header_objet.header2.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header2.className) ;
         // identique header_objet.header2.title
         console.log(header_objet.header2.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header2.title) ;
         //header_objet.header2.id
         console.log(header_objet.header2.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header2.text) ; 
         //header_objet.header2.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header2.elementchildNodes.length ; 
let quantite2= header_objet.header2.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header2.elementchildNodes[i][y]) ; 
    if(header_objet.header2.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header2.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header2.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header2.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header2.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header2.elementchildNodes[i][3]);// class
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

 function action_header_3(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header3.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header3.text ; 
         console.log(header_objet.header3.text) ; // information dans la premier table
         console.log(header_objet.header3.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header3.className) ;
         // identique header_objet.header3.title
         console.log(header_objet.header3.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header3.title) ;
         //header_objet.header3.id
         console.log(header_objet.header3.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header3.text) ; 
         //header_objet.header3.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header3.elementchildNodes.length ; 
let quantite2= header_objet.header3.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header3.elementchildNodes[i][y]) ; 
    if(header_objet.header3.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header3.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header3.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header3.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header3.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header3.elementchildNodes[i][3]);// class
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

 function action_header_4(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header4.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header4.text ; 
         console.log(header_objet.header4.text) ; // information dans la premier table
         console.log(header_objet.header4.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header4.className) ;
         // identique header_objet.header4.title
         console.log(header_objet.header4.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header4.title) ;
         //header_objet.header4.id
         console.log(header_objet.header4.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header4.text) ; 
         //header_objet.header4.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header4.elementchildNodes.length ; 
let quantite2= header_objet.header4.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header4.elementchildNodes[i][y]) ; 
    if(header_objet.header4.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header4.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header4.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header4.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header4.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header4.elementchildNodes[i][3]);// class
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

 function action_header_5(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header5.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header5.text ; 
         console.log(header_objet.header5.text) ; // information dans la premier table
         console.log(header_objet.header5.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header5.className) ;
         // identique header_objet.header5.title
         console.log(header_objet.header5.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header5.title) ;
         //header_objet.header5.id
         console.log(header_objet.header5.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header5.text) ; 
         //header_objet.header5.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header5.elementchildNodes.length ; 
let quantite2= header_objet.header5.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header5.elementchildNodes[i][y]) ; 
    if(header_objet.header5.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header5.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header5.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header5.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header5.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header5.elementchildNodes[i][3]);// class
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

 function action_header_6(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header6.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header6.text ; 
         console.log(header_objet.header6.text) ; // information dans la premier table
         console.log(header_objet.header6.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header6.className) ;
         // identique header_objet.header6.title
         console.log(header_objet.header6.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header6.title) ;
         //header_objet.header6.id
         console.log(header_objet.header6.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header6.text) ; 
         //header_objet.header6.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header6.elementchildNodes.length ; 
let quantite2= header_objet.header6.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header6.elementchildNodes[i][y]) ; 
    if(header_objet.header6.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header6.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header6.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header6.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header6.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header6.elementchildNodes[i][3]);// class
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

 function action_header_7(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header7.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header7.text ; 
         console.log(header_objet.header7.text) ; // information dans la premier table
         console.log(header_objet.header7.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header7.className) ;
         // identique header_objet.header7.title
         console.log(header_objet.header7.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header7.title) ;
         //header_objet.header7.id
         console.log(header_objet.header7.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header7.text) ; 
         //header_objet.header7.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header7.elementchildNodes.length ; 
let quantite2= header_objet.header7.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header7.elementchildNodes[i][y]) ; 
    if(header_objet.header7.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header7.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header7.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header7.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header7.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header7.elementchildNodes[i][3]);// class
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

 function action_header_8(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header8.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header8.text ; 
         console.log(header_objet.header8.text) ; // information dans la premier table
         console.log(header_objet.header8.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header8.className) ;
         // identique header_objet.header8.title
         console.log(header_objet.header8.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header8.title) ;
         //header_objet.header8.id
         console.log(header_objet.header8.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header8.text) ; 
         //header_objet.header0.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header8.elementchildNodes.length ; 
let quantite2= header_objet.header8.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header8.elementchildNodes[i][y]) ; 
    if(header_objet.header8.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header8.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header8.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header8.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header8.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header8.elementchildNodes[i][3]);// class
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

 function action_header_9(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header9.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header9.text ; 
         console.log(header_objet.header9.text) ; // information dans la premier table
         console.log(header_objet.header9.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header9.className) ;
         // identique header_objet.header9.title
         console.log(header_objet.header9.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header9.title) ;
         //header_objet.header9.id
         console.log(header_objet.header9.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header9.text) ; 
         //header_objet.header9.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header9.elementchildNodes.length ; 
let quantite2= header_objet.header9.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header9.elementchildNodes[i][y]) ; 
    if(header_objet.header9.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header9.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header9.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header9.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header9.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header9.elementchildNodes[i][3]);// class
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

 function action_header_10(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header10.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header10.text ; 
         console.log(header_objet.header10.text) ; // information dans la premier table
         console.log(header_objet.header10.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header10.className) ;
         // identique header_objet.header10.title
         console.log(header_objet.header10.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header10.title) ;
         //header_objet.header10.id
         console.log(header_objet.header10.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header10.text) ; 
         //header_objet.header10.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header10.elementchildNodes.length ; 
let quantite2= header_objet.header10.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header10.elementchildNodes[i][y]) ; 
    if(header_objet.header10.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header10.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header10.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header10.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header10.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header10.elementchildNodes[i][3]);// class
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

 function action_header_11(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header11.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header11.text ; 
         console.log(header_objet.header11.text) ; // information dans la premier table
         console.log(header_objet.header11.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header11.className) ;
         // identique header_objet.header11.title
         console.log(header_objet.header11.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header11.title) ;
         //header_objet.header11.id
         console.log(header_objet.header11.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header11.text) ; 
         //header_objet.header11.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header11.elementchildNodes.length ; 
let quantite2= header_objet.header11.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header11.elementchildNodes[i][y]) ; 
    if(header_objet.header11.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header11.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header11.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header11.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header11.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header11.elementchildNodes[i][3]);// class
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

 function action_header_12(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header12.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header12.text ; 
         console.log(header_objet.header12.text) ; // information dans la premier table
         console.log(header_objet.header12.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header12.className) ;
         // identique header_objet.header12.title
         console.log(header_objet.header12.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header12.title) ;
         //header_objet.header12.id
         console.log(header_objet.header12.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header12.text) ; 
         //header_objet.header12.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header12.elementchildNodes.length ; 
let quantite2= header_objet.header12.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header12.elementchildNodes[i][y]) ; 
    if(header_objet.header12.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header12.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header12.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header12.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header12.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header12.elementchildNodes[i][3]);// class
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

 function action_header_13(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header14.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header14.text ; 
         console.log(header_objet.header14.text) ; // information dans la premier table
         console.log(header_objet.header14.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header14.className) ;
         // identique header_objet.header14.title
         console.log(header_objet.header14.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header14.title) ;
         //header_objet.header14.id
         console.log(header_objet.header14.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header14.text) ; 
         //header_objet.header14.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header14.elementchildNodes.length ; 
let quantite2= header_objet.header14.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header14.elementchildNodes[i][y]) ; 
    if(header_objet.header14.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header14.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header14.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header14.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header14.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header14.elementchildNodes[i][3]);// class
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

 function action_header_14(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header14.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header14.text ; 
         console.log(header_objet.header14.text) ; // information dans la premier table
         console.log(header_objet.header14.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header14.className) ;
         // identique header_objet.header14.title
         console.log(header_objet.header14.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header14.title) ;
         //header_objet.header14.id
         console.log(header_objet.header14.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header14.text) ; 
         //header_objet.header14.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header14.elementchildNodes.length ; 
let quantite2= header_objet.header14.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header14.elementchildNodes[i][y]) ; 
    if(header_objet.header14.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header14.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header14.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header14.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header14.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header14.elementchildNodes[i][3]);// class
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

 function action_header_15(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header15.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header15.text ; 
         console.log(header_objet.header15.text) ; // information dans la premier table
         console.log(header_objet.header15.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header15.className) ;
         // identique header_objet.header15.title
         console.log(header_objet.header15.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header15.title) ;
         //header_objet.header15.id
         console.log(header_objet.header15.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header15.text) ; 
         //header_objet.header15.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header15.elementchildNodes.length ; 
let quantite2= header_objet.header15.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header15.elementchildNodes[i][y]) ; 
    if(header_objet.header15.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header15.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header15.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header15.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header15.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header15.elementchildNodes[i][3]);// class
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

 function action_header_16(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header16.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header16.text ; 
         console.log(header_objet.header16.text) ; // information dans la premier table
         console.log(header_objet.header16.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header16.className) ;
         // identique header_objet.header16.title
         console.log(header_objet.header16.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header16.title) ;
         //header_objet.header16.id
         console.log(header_objet.header16.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header16.text) ; 
         //header_objet.header16.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header16.elementchildNodes.length ; 
let quantite2= header_objet.header16.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header16.elementchildNodes[i][y]) ; 
    if(header_objet.header16.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header16.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header16.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header16.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header16.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header16.elementchildNodes[i][3]);// class
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

 function action_header_17(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header17.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header17.text ; 
         console.log(header_objet.header17.text) ; // information dans la premier table
         console.log(header_objet.header17.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header17.className) ;
         // identique header_objet.header17.title
         console.log(header_objet.header17.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header17.title) ;
         //header_objet.header17.id
         console.log(header_objet.header17.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header17.text) ; 
         //header_objet.header17.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header17.elementchildNodes.length ; 
let quantite2= header_objet.header17.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header17.elementchildNodes[i][y]) ; 
    if(header_objet.header17.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header17.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header17.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header17.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header17.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header17.elementchildNodes[i][3]);// class
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

 function action_header_18(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header18.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header18.text ; 
         console.log(header_objet.header18.text) ; // information dans la premier table
         console.log(header_objet.header18.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header18.className) ;
         // identique header_objet.header18.title
         console.log(header_objet.header18.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header18.title) ;
         //header_objet.header18.id
         console.log(header_objet.header18.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header18.text) ; 
         //header_objet.header18.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header18.elementchildNodes.length ; 
let quantite2= header_objet.header18.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header18.elementchildNodes[i][y]) ; 
    if(header_objet.header18.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header18.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header18.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header18.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header18.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header18.elementchildNodes[i][3]);// class
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

 function action_header_19(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header19.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header19.text ; 
         console.log(header_objet.header19.text) ; // information dans la premier table
         console.log(header_objet.header19.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header19.className) ;
         // identique header_objet.header19.title
         console.log(header_objet.header19.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header19.title) ;
         //header_objet.header19.id
         console.log(header_objet.header19.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header19.text) ; 
         //header_objet.header19.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header19.elementchildNodes.length ; 
let quantite2= header_objet.header19.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header19.elementchildNodes[i][y]) ; 
    if(header_objet.header19.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header19.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header19.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header19.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header19.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header19.elementchildNodes[i][3]);// class
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

 function action_header_20(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header20.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header20.text ; 
         console.log(header_objet.header20.text) ; // information dans la premier table
         console.log(header_objet.header20.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header20.className) ;
         // identique header_objet.header20.title
         console.log(header_objet.header20.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header20.title) ;
         //header_objet.header20.id
         console.log(header_objet.header20.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header20.text) ; 
         //header_objet.header20.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header20.elementchildNodes.length ; 
let quantite2= header_objet.header20.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header20.elementchildNodes[i][y]) ; 
    if(header_objet.header20.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header20.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header20.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header20.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header20.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header20.elementchildNodes[i][3]);// class
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

 function action_header_21(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header21.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header21.text ; 
         console.log(header_objet.header21.text) ; // information dans la premier table
         console.log(header_objet.header21.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header21.className) ;
         // identique header_objet.header21.title
         console.log(header_objet.header21.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header21.title) ;
         //header_objet.header21.id
         console.log(header_objet.header21.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header21.text) ; 
         //header_objet.header21.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header21.elementchildNodes.length ; 
let quantite2= header_objet.header21.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header21.elementchildNodes[i][y]) ; 
    if(header_objet.header21.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header21.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header21.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header21.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header21.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header21.elementchildNodes[i][3]);// class
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

 function action_header_22(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header23.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header23.text ; 
         console.log(header_objet.header23.text) ; // information dans la premier table
         console.log(header_objet.header23.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header23.className) ;
         // identique header_objet.header23.title
         console.log(header_objet.header23.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header23.title) ;
         //header_objet.header23.id
         console.log(header_objet.header23.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header23.text) ; 
         //header_objet.header23.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header23.elementchildNodes.length ; 
let quantite2= header_objet.header23.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header23.elementchildNodes[i][y]) ; 
    if(header_objet.header23.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header23.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header23.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header23.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header23.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header23.elementchildNodes[i][3]);// class
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

 function action_header_23(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header23.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header23.text ; 
         console.log(header_objet.header23.text) ; // information dans la premier table
         console.log(header_objet.header23.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header23.className) ;
         // identique header_objet.header23.title
         console.log(header_objet.header23.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header23.title) ;
         //header_objet.header23.id
         console.log(header_objet.header23.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header23.text) ; 
         //header_objet.header23.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header23.elementchildNodes.length ; 
let quantite2= header_objet.header23.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header23.elementchildNodes[i][y]) ; 
    if(header_objet.header23.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header23.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header23.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header23.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header23.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header23.elementchildNodes[i][3]);// class
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

 function action_header_24(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header24.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header24.text ; 
         console.log(header_objet.header24.text) ; // information dans la premier table
         console.log(header_objet.header24.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header24.className) ;
         // identique header_objet.header24.title
         console.log(header_objet.header24.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header24.title) ;
         //header_objet.header24.id
         console.log(header_objet.header24.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header24.text) ; 
         //header_objet.header24.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header24.elementchildNodes.length ; 
let quantite2= header_objet.header24.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header24.elementchildNodes[i][y]) ; 
    if(header_objet.header24.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header24.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header24.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header24.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header24.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header24.elementchildNodes[i][3]);// class
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

 function action_header_25(source_id_parent,bool_parent,bool_child){
  var bool_parent_result ; 
  // condition de fonctionnement si la variable est vrai 
  if(header_objet.header25.value==bool_parent){
    document.getElementById(source_id_parent).innerHTML=header_objet.header25.text ; 
         console.log(header_objet.header25.text) ; // information dans la premier table
         console.log(header_objet.header25.elementchildNodes[0][0]) ;
         document.getElementById(source_id_parent).setAttribute("class",header_objet.header25.className) ;
         // identique header_objet.header25.title
         console.log(header_objet.header25.elementchildNodes[0][1]) ;
         document.getElementById(source_id_parent).setAttribute("title",header_objet.header25.title) ;
         //header_objet.header25.id
         console.log(header_objet.header25.elementchildNodes[0][2]) ;
         document.getElementById(source_id_parent).setAttribute("id",source_id_parent) ;         
         //document.getElementById("demo").innerHTML = "I have changed!";         
         console.log(header_objet.header25.text) ; 
         //header_objet.header25.className 
         bool_parent_result = true ; 
  }
 
 

 
let quantite1= header_objet.header25.elementchildNodes.length ; 
let quantite2= header_objet.header25.elementchildNodes[0].length ;  
console.log(quantite1+" ; "+quantite2) ; 
for(var i = 0 ;i<quantite1; i++ ){
for(y =0 ; y<quantite2;y++){
  
  if(y==0){
    console.log(header_objet.header25.elementchildNodes[i][y]) ; 
    if(header_objet.header25.elementchildNodes[i][y]==bool_child){


         // Create an "li" node:


         if(bool_parent_result==true){
                      const node = document.createElement(header_objet.header25.elementchildNodes[i][4]); // atribute
                      const textnode = document.createTextNode(header_objet.header25.elementchildNodes[i][5]); //text
                      node.setAttribute("id", header_objet.header25.elementchildNodes[i][2]); // id
                      node.setAttribute("title", header_objet.header25.elementchildNodes[i][1]);// title                  
                      node.setAttribute("class", header_objet.header25.elementchildNodes[i][3]);// class
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




 

 const header_activation_total = setTimeout(syn_fun,250);
 
 
  