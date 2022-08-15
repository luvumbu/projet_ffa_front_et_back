 <?php
 header("Access-Control-Allow-Origin: *");
  $link =  str_replace("/projet_ffa_front_et_back/back/".basename(__FILE__),"",$_SERVER['PHP_SELF']);
  //echo count($link ) ;  
$servername = "localhost";
$username = "u481158665_ffa";
$password = "v3p9r3e@59A";
$dbname = $username;
// Create connection
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
 
/**
 * Selection bassique 
 * SELECT * FROM `info_all_array` WHERE 1
 * val1 valeur a donner apres select
 * val2 FROM 
 * val3 WHERE Nom de la table 
 * val4 LIMIT  
 */


 echo "[" ; 

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

/// exemple 
//https://bokonzi.com/projet_ffa_front_et_back/back/index.php/*/info_all_array/get_result_users_nom_1_array_2=%22DOVY%22/LIMIT%202
//https://bokonzi.com/projet_ffa_front_et_back/back/index.php/*/info_all_array/get_result_users_nom_1_array_2="DOVY"/LIMIT%202
//https://bokonzi.com/projet_ffa_front_et_back/back/index.php/DISTINCT%20%60get_epreuve_nom_complet%60/info_all_array/1/LIMIT%202
//https://bokonzi.com/projet_ffa_front_et_back/back/index.php/DISTINCT%20%60get_epreuve_nom_complet%60/info_all_array/1/ORDER%20BY%20get_epreuve_nom_complet



 
$sql = 'SELECT '.$val1.' FROM '.$val2.' WHERE '.$val3.'   '.$val4.' ';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "{";
    echo '"id_info_all_array":"'.$row["id_info_all_array"].'"' ;
    echo ",";
    echo '"get_code_result":"'.$row["get_code_result"].'"' ;
    echo ",";
    echo '"get_rp_array_2":"'.$row["get_rp_array_2"].'"' ;
    echo ",";
    echo '"get_vent_array_2":"'.$row["get_vent_array_2"].'"' ;
    echo ",";

    echo '"get_result_users_perf_array_2":"'.$row["get_result_users_perf_array_2"].'"' ;
    echo ",";
    echo '"get_result_users_nom_1_array_2":"'.$row["get_result_users_nom_1_array_2"].'"' ;
    echo ",";
    echo '"get_result_users_nom_2_array_2":"'.$row["get_result_users_nom_2_array_2"].'"' ;
    echo ",";
    echo '"get_result_users_nom_3_array_2":"'.$row["get_result_users_nom_3_array_2"].'"' ;
    echo ",";

    echo '"get_result_users_nom_4_array_2":"'.$row["get_result_users_nom_4_array_2"].'"' ;
    echo ",";
    echo '"get_users_nationality_array_2":"'.$row["get_users_nationality_array_2"].'"' ;
    echo ",";
    echo '"get_club_nom_complet_array_2":"'.$row["get_club_nom_complet_array_2"].'"' ;
    echo ",";
    echo '"get_club_departement_array_2":"'.$row["get_club_departement_array_2"].'"' ;
    echo ",";

    echo '"get_club_region_array_2":"'.$row["get_club_region_array_2"].'"' ;
    echo ",";
    echo '"get_cat_array_2":"'.$row["get_cat_array_2"].'"' ;
    echo ",";
    echo '"get_users_naissance_array_2":"'.$row["get_users_naissance_array_2"].'"' ;
    echo ",";
    echo '"get_result_date_perf_array_2":"'.$row["get_result_date_perf_array_2"].'"' ;
    echo ",";

    echo '"get_result_villes_nom_array_2":"'.$row["get_result_villes_nom_array_2"].'"' ;
    echo ",";
    echo '"epreuve_sex_array_2":"'.$row["epreuve_sex_array_2"].'"' ;
    echo ",";
    echo '"get_users_nom_complet_array":"'.$row["get_users_nom_complet_array"].'"' ;
    echo ",";
    echo '"info_all_array_click":"'.$row["info_all_array_click"].'"' ;
    echo ",";

    echo '"info_all_array_ip":"'.$row["info_all_array_ip"].'"' ;
    echo ",";
    echo '"info_all_array_src_name":"'.$row["info_all_array_src_name"].'"' ;
    echo ",";
    echo '"window_location_href":"'.$row["window_location_href"].'"' ;
    echo ",";
    echo '"get_epreuve_nom_complet":"'.$row["get_epreuve_nom_complet"].'"' ;
    echo ",";

    echo '"reg_date":"'.$row["reg_date"].'"' ;
   
 
 
    echo "}";
    echo ","; 
  }
}  
$conn->close();
echo '{}';


echo "]" ; 
?>



 
    
 