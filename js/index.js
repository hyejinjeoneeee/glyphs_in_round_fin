$(document).ready(function () {

    console.log($(".st4"))
    var pathArray = $(".st4")

    $.each(pathArray, function (i, d) {

        $(d).css("stroke")
        var pathLength = d.getTotalLength()
        console.log(pathLength)
        $(d).css("stroke-dasharray", pathLength + " " + pathLength)
        $(d).css("stroke-dashoffset", pathLength)

    })

    console.log($(".st5"))
    var pathArray = $(".st5")

    $.each(pathArray, function (i, d) {

        $(d).css("stroke")
        var pathLength = d.getTotalLength()
        console.log(pathLength)
        $(d).css("stroke-dasharray", pathLength + " " + pathLength)
        $(d).css("stroke-dashoffset", pathLength)

    })

    console.log($(".st3"))
    var pathArray = $(".st3")

    $.each(pathArray, function (i, d) {

        $(d).css("stroke")
        var pathLength = d.getTotalLength()
        console.log(pathLength)
        $(d).css("stroke-dasharray", pathLength + " " + pathLength)
        $(d).css("stroke-dashoffset", pathLength)

    })

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)); //Distance.
    };

    //Function:
    function update(e) {
        //Window center (array):
        var winCenter = [$(window).width() / 2, $(window).height() / 2]; // => winCenter[width, height];
        //Cursor position (array):
        var cursorPos = [e.clientX, e.clientY]; //cursorPos[left, top];
        //Find SVG 'viewBox' shorter side (circle size fit the shorter size of the 'viewBox'):
        var viewBoxSize = Math.min(winCenter[0], winCenter[1]);
        //Distance between circle center and mouse position (px):
        var distancePx = getDistance(winCenter[0], winCenter[1], cursorPos[0], cursorPos[1]);
        //Distance between circle center and mouse position (%):
        //Multiply by 100 to get the diameter or multiply by 50 to get the radius.
        var distancePercent = parseInt((distancePx / viewBoxSize) * 50);
        //Circle radius attribute update:
        circle.setAttribute("r", distancePercent);
        //Debug:
        console.log(distancePercent);
    };

    //Event handler:
    $(window).mousemove(function (e) {
        update(e);

    })

})


    // console. log를 하면 console.log($(window).width()) 크롬에서 값 확인 가능 
    // var는 변수
    // if (조건문의 요소) {조건문의 요소가 충족되었을 때 실행이 되는 내용}

    // 화면기준으로 x좌표 위치가 50% 이하일 때, 흰색
    // 화면기준으로 x좌표 위치가 50% 이상일 때, 검정색
    // 위 두가지를 위해서는 브라우저의 크기와 mousex 좌표 값 필요