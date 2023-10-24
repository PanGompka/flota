$('document').ready(function () {
    $('a').click(function(){
        var wybor = this.getAttribute("value");
        switch(wybor){
            case "mapa":
                document.location="index.html";
                break;
            case "samochody":
                $('#sidebar').load("samochody/sidebar.html");
                $('#map').load("samochody/main.html");
                break;
            case "kierowcy":
                
                break;
            case "harmonogram":

                break;
            case "wyloguj":

                break;
        }
    });
});


