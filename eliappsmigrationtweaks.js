//netids=[
//"agf2",
//"am2233",
//"bl37"
//]

//for (var i = 0; i < netids.length; i++) {

//if (window.find(netids[i])){
//alert(netids[i])
//}

//}
function injectit (){
  //$(document).ready(function(){
  window.setTimeout(function() {

    oTable = jQuery("#userTable").dataTable({
      "bProcessing": false,
      "bDeferRender": true,
      "bDestroy": true,
      "bPaginate": false,
      "sAjaxSource": "users",
      "aaSorting": [
        [4, 'desc']
      ],
      "aoColumns": [{
        "mDataProp": "netid"
      }, {
        "mDataProp": "pantheonServer"
      }, {
        "mDataProp": "dsp"
      }, {
        "mDataProp": "currentAction"
      }, {
        "mDataProp": "started"
      }, {
        "mDataProp": "status"
      }, {
        "mDataProp": "msgs",
        "sType": "formatted-number"
      }, {
        "mDataProp": "bytes",
        "sType": "byte-sort"
      }, {
        "mDataProp": "aliasMoved",
        "sType": "boolean"
      }, {
        "mDataProp": "minReSyncStartTime"
      }]
    });

    $('#netid').focus()

  }, 00);//I was gonna write a timeout but just waiting for window ready seems to fix it?

}
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ injectit +')();'));
(document.body || document.head || document.documentElement).appendChild(script);
