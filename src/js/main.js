var Notes = require('./getnotes')
var FormatDateTime = require('./gettime')
var toast = require('./toast')
require('less/main.less')
$.get('/postings/notes').done(function (ret) {
    $('#user').val(localStorage.nodejspostingsuser)

    Notes.render(ret)

})

$('#sub').on('click', function () {
    var user = $('#user').val()
    localStorage.nodejspostingsuser = user
    var content = $('#content').val().replace(/\n/g,"<br />")
    console.log(content)
    var time = FormatDateTime.get()
    var data = {
        name: user,
        text: content,
        time: time
    }
    if (user.length != 0 && content.length !=0) {
        $.post('/postings/add', data).done(function (ret) {
            Notes.render(ret)
            $('#content').val('')
            toast('发送成功')

        })
    } else {
        toast('用户名和内容不能为空')
    }

})

// $(document).keydown(function (event) {
//     if (event.keyCode == 13) {
//         $('#sub').trigger("click")
//     }
// })