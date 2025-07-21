function grades(){
  var a=SpreadsheetApp;
  var active=a.getActiveSpreadsheet().getActiveSheet();
  var LR= active.getLastRow();

  for(var i=1;i<=LR ;i++){
    var gr=active.getRange(i,1).getValue();
    if(gr<33){
      active.getRange(i,2).setValue("E2")
    }else if(gr>=33 && gr<=40){
      active.getRange(i,2).setValue("E1")
    }else if(gr>=41 && gr<=50){
      active.getRange(i,2).setValue("C2")
    }else if(gr>=51 && gr<=60){
      active.getRange(i,2).setValue("C1")
    }else if(gr>=61 && gr<=70){
      active.getRange(i,2).setValue("B2")
    }else if(gr>=71 && gr<=80){
      active.getRange(i,2).setValue("B1")
    }else if(gr>=81 && gr<=90){
      active.getRange(i,2).setValue("A2")
    }else {
      active.getRange(i,2).setValue("A1")
    }
  }
}
