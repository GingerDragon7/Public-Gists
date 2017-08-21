$(document).ready(function() {
    var k = 0;
    $("button").click(function() {
        var url = "https://api.github.com/gists/public?page=" + k + "&per_page=31";
        k++;
        $.getJSON(url, function(data) {
            $(".page").append("<button style='border:0px solid white; background-color:orange;color:white; padding:10px;padding-top:4px; padding-bottom:4px;'><a href='#page" + k + "' style='color:white;'>" + k + "</a></button>" + " ");
            var date = new Array();
            for (var i = 1; i <= 30; i++) {
                var dt = data[i]['updated_at'];
                var mm = dt[5] + dt[6];
                var yy = dt[0] + dt[1] + dt[2] + dt[3];
                var dd = dt[8] + dt[9];
                date[i] = dd + "/" + mm + "/" + yy;
                var str = "";
                var owner_login = "NA";
                var des = data[i]['description'];
                if (data[i].hasOwnProperty('owner')) {
                    owner_login = data[i]['owner']['login'];
                }
                if (des == null || des == "") {
                    des = "No Description";
                }
                if (i == 1) {
                    str = "<tr width='100%' class='Entries' id='page" + k + "'>";
                } else {
                    str = "<tr width='100%' class='Entries'>";
                }
                $("#found1").append(str + "<td width='25%'>" + i + ".  " + owner_login + "<\/td><td width='35%'>" + des + "<\/td><td width='20%'>" + date[i] + "<\/td><td width='20%'><a target='_blank' href='" + data[i]['url'] + "'>Link<\/a><\/td><\/tr>");
            }
        });
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
