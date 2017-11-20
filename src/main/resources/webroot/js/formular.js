$(document).ready(function () {
    $("#eingabeKnopf").click(function () {
        $.ajax({url:"../anfrage", data:
                {
                    typ: "namenKnopf",
                    name: $("#eingabeName").val(),
                    password: $("#passwort").val()
                },
                success: function (data) {
                    $("body").append("<div>" + data.text+"<br>" + data.passwort + "<div>");
                }
            });
    });
});
