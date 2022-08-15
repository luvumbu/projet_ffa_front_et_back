 


<?php
 

 $link =  str_replace("/projet_ffa_front_et_back/back/".basename(__FILE__),"",$_SERVER['PHP_SELF']);
 
 //echo count($link ) ; 


 
$servername = "localhost";
$username = "u481158665_ffa";
$password = "v3p9r3e@59A";
$dbname = $username;
// Create connection

$breack1= false;
$breack2= false;
$breack3= false;

$breack4= false;
$breack5= false;
$breack6= false;

$breack7= false;
$breack8= false;
$breack9= false;


$val1 ="" ; 
$val2 ="" ; 
$val3 ="" ; 

$val4 ="" ; 
$val5 ="" ; 
$val6 ="" ; 

$val7 ="" ; 
$val8 ="" ; 
$val9 ="" ; 

 
 


$nombre = 0 ;  




for($i = 0; $i<strlen($link);$i++){
   // echo $link[$i]; 
    


if($link[$i]=="/"){
    $nombre ++ ; 
   
}

    switch ($nombre) {
       case "1":
        
          if($link[$i]!="/"){
            $val1 = $val1.$link[$i];
          
          }
          break;
 
       case "2":
                     if($link[$i]!="/"){
            $val2 = $val2.$link[$i];
          }
          break;
 
       case "3":
                         if($link[$i]!="/"){
            $val3 = $val3.$link[$i];
          }
          break;

       case "4":
                     if($link[$i]!="/"){
            $val4 = $val4.$link[$i];
          }
       break;

       case "5":
                 if($link[$i]!="/"){
            $val5 = $val5.$link[$i];
          }
       break; 

       case "6":
                 if($link[$i]!="/"){
            $val6 = $val6.$link[$i];
          }
       break;

       case "7":
                 if($link[$i]!="/"){
            $val7 = $val7.$link[$i];
          }
       break;

       case "8":
                if($link[$i]!="/"){
            $val8 = $val8.$link[$i];
          }
       break;

       case "9":
                 if($link[$i]!="/"){
            $val9 = $val9.$link[$i];
          }
        break;

 

       
   
      }
 
}










echo $val1 ;
echo "</br>" ; 

echo $val2 ;
echo "</br>" ; 

echo $val3 ;
echo "</br>" ; 

echo $val4 ;
echo "</br>" ; 

echo $val5 ;
echo "</br>" ; 

echo $val6 ;
echo "</br>" ; 

echo $val7 ;
echo "</br>" ; 

echo $val8 ;
echo "</br>" ; 
echo $val9;










/**
 * Selection bassique 
 * SELECT * FROM `info_all_array` WHERE 1
 * val1 valeur a donner apres select
 * val2 FROM 
 * val3 WHERE Nom de la table 
 * val4 LIMIT  
 */







$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}



$sql = 'SELECT '.$val1.' FROM '.$val2.' WHERE '.$val3.'  LIMIT '.$val4.' ';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo   $row["get_result_users_nom_4_array_2"] ."<br/>";
  }
}  
$conn->close();

?>