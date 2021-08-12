function hamburger() {

    if ($(".hamburger-mode").css("display") == "none"){
        $(".hamburger-mode").css("display", "inline-block");
    } else {
        $(".hamburger-mode").css("display", "none");
    }
    
}

if ($(".hamburger").css("display") == "none"){
    $(".hamburger-mode").css("display", "inline-block");
}