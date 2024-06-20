$(document).ready(function () {
    let vh = window.innerHeight;
    let topDivHeight = parseFloat($("#topDiv").css("height"));
    $("#rightDiv").css("height", vh-topDivHeight);
    if ($("#leftDiv").css("height") < vh-topDivHeight) {
        $("#leftDiv").css("height", vh-topDivHeight);
    }
    
    
    // Adjust page (see above) on resize
    $(window).resize(function () {
        let vh = window.innerHeight;
        let topDivHeight = parseFloat($("#topDiv").css("height"));
        $("#rightDiv").css("height", vh-topDivHeight);
        if ($("#leftDiv").css("height") < vh-topDivHeight) {
            $("#leftDiv").css("height", vh-topDivHeight);
        }
    });
    

    // Scroll the words after Level Up
    let levelUpIndex = 0;
    let levelUpWordList = ['Creation', 'Business', 'Organization', 'Impression', 'Idea']
    setInterval(function () {
        $("#levelUpInner").fadeOut("slow");
        setTimeout(function () {
            $("#levelUpInner").text(levelUpWordList[levelUpIndex]).fadeIn("slow");
            levelUpIndex++;
        }, 500);
        if (levelUpIndex == levelUpWordList.length) {
            levelUpIndex = 0;
        }
    }, 5000);
});

