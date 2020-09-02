(function () {
var table = document.createElement('table');
table.setAttribute('border','1');
table.setAttribute('width','100%')
var row = table.insertRow(0);
for(j=1; j<=10; j++){
    var text = document.createTextNode(String.fromCharCode(j+64));
    var cell = row.insertCell(j-1);
    cell.setAttribute('align','center')
    cell.appendChild(text);
}
document.getElementById("outputDiv").appendChild(table);

})();