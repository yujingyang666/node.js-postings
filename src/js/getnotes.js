//var $ = require('jquery')



var Notes=(function(){
    function getnotes(msg) {
    $('#postings').html('')
    var HTML = ""
    $.each(msg, function (idx, msg) {

        HTML += '<div class="posting">'
             +'<div><p>'+ msg.id+'楼</p></div>'
             +'<div >' 
             +'<p><b>' + msg.name + '</b></p><hr/>' 
             +'<p>' + msg.text + '</p>' 
             +'<p>' + msg.time + '</p>' 
             +'</div></div>'
             
    })
    $('#postings').append($(HTML))
    
}
    return {render:getnotes}
})()

module.exports = Notes;