function hide(){
  var a=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var LR=a.getLastRow();
  for( var i=2;i< LR-1;i++){
  var c=a.getRange(i,3).getValues();
  var d=a.getRange(i,6).getValues();
  
  if(!d || c<30){
    a.hideRows(i);
  }
}}

