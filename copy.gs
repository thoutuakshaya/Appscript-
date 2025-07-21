// #copy contents from one sheet to other
function sheet(){
  var a=SpreadsheetApp;
  var b=a.getActiveSpreadsheet().getSheetByName("Sheet1");
  var c=a.getActiveSpreadsheet().getSheetByName("Sheet2");

  var d=b.getRange("a1:z100").getValues();
  c.getRange("A1:z100").setValues(d);
}
