
var i = 1;
function entryfield() {

   var objTo = document.getElementById('entryfield');
   var data = {
    item: objto.item,
    count: objTo.quantity
   };
   var fs = require('fs');
   fs.writeFile('gathering.json', data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


    i++;
    var objTo = document.getElementById('entryfield');
    var div = document.createElement("div");
	div.setAttribute("class", "form-group removeitem"+i);
	var rdiv = 'removeitem'+i;
    div.innerHTML = '<div class="col-sm-3 nopadding"><div class="form-group"> <input type="text" class="form-control" id="item" name="item[]" value="" placeholder="Item name"></div></div><div class="col-sm-3 nopadding"><div class="form-group"> <input type="text" class="form-control" id="quantitiy" name="quantitiy[]" value="" placeholder="Anzahl/ quantitiy"></div></div><div class="col-sm-3 nopadding"><div class="form-group"><div class="input-group"> <div class="input-group-btn"> <button class="btn btn-danger" type="button" onclick="remove_entryfield('+ i +');"> <span class="glyphicon glyphicon-minus" aria-hidden="true"></span> </button></div></div></div></div><div class="clear"></div><div class="col-sm-6 nopadding"><div class="form-group"></div></div>';

    objTo.appendChild(div)
}
   function remove_entryfield(rid) {
	   $('.removeitem'+rid).remove();
   }
