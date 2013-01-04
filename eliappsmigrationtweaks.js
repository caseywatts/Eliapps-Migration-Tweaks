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

//hide completed rows


function injectit (){
  //$(document).ready(function(){

  function hidecompletedrows(){
    $('table tr').filter(function(){  
      return (  $(this).html().indexOf('DeletePantheonAccountInAcsAction') !== -1
              && $(this).html().indexOf('completed') !== -1
              && $(this).html().indexOf('true') !== -1
             )
    }).hide()
  }

  function hideselfmigratedrows(){
    $('table tr').filter(function(){  
      return (  $(this).html().indexOf('ReSyncMailSyncAction') !== -1
              && $(this).html().indexOf('completed') !== -1
              && $(this).html().indexOf('true') !== -1
             )
    }).hide()
  }

  function hidecertainnetids(){
    $('table tr').filter(function(){  
      return (  $(this).html().indexOf('nk285') !== -1
             )
    }).hide()
  }



  window.setTimeout(function() {



    oTable = jQuery("#userTable").dataTable({
      "bProcessing": false,
      "bDeferRender": true,
      "bDestroy": true,
      "bPaginate": false,
      "sAjaxSource": "users",
      //"fnInitComplete": function(){hidecompletedrows()},
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

    setTimeout(function(){//this has to happen after everything else lol this is hacky
      hidecompletedrows();
      hideselfmigratedrows();
      hidecertainnetids();
    }, 3000)

  }, 500);


}
var script = document.createElement('script');
script.appendChild(document.createTextNode('('+ injectit +')();'));
(document.body || document.head || document.documentElement).appendChild(script);
