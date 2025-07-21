/*code to calculate profit values and mark highlight if <20
*/

function project(){
  var a=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var LR=a.getLastRow();
  var b=a.getRange("h1").setValue("profit");
  var c=a.getRange("f2:f"+LR);
  var d=a.getRange("G2:G"+LR);
  var g=a.getRange("H2:H"+LR);
  var e=c.getValues();
  var f=d.getValues();

  for(var i=0;i<LR-1;i++){
    g.getCell(i+1,1).setValue(e[i][0]-f[i][0]);

  if((e[i][0]-f[i][0])<20){
    var highlight=i+2;
    a.getRange(highlight,1,1,8).setBackground("red");
  }

  }
}





another form of above code
function project(){
  var a=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var LR=a.getLastRow();
  var b=a.getRange("h1").setValue("profit");
  var c=a.getRange("f2:f"+LR).getValues();
  var d=a.getRange("G2:G"+LR).getValues();
  var g=a.getRange("H2:H"+LR);
  

  for(var i=0;i<LR-1;i++){
     g.getCell(i+1,1).setValue(c[i][0]-d[i][0]);
    // g.setValue(c[i][0]-d[i][0]);
  if((c[i][0]-d[i][0])<20){
    var highlight=i+2;
    a.getRange(highlight,1,1,8).setBackground("red");
  }

  }
}
