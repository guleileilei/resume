/**
 * Created by 顾 磊 on 2017/4/4.
 */
window.onload = function () {
    var side_info = document.getElementById("side-info");
    var aDiv = side_info.getElementsByTagName("div");
    var main_info= document.getElementsByClassName("main-info")[0];
    var amg = main_info.getElementsByTagName("img");
    var aA = main_info.getElementsByTagName("a");
    var timer;
    var i = 0;
    onOff = true;


    function run() {

        if (onOff) {
            timer = setInterval(function () {
                aDiv[i].className = "show";
                if (i == aDiv.length - 1) {
                    clearInterval(timer);

                }
                i++;
            }, 100)
        } else {
            timer = setInterval(function () {
                i = aDiv.length - 1;
                if (i == 0) {
                    clearInterval(timer)
                }
                i--;
            }, 100)
        }
        onOff = !onOff;

    }

    run();


        for(var k=0; k<aA.length;k++){
            amg[k].index=k;
            amg[k].onmouseover = function () {

                    aA[this.index].style.color="red";



            };
            amg[k].onmouseout = function () {

                for(var j=0;j<aA.length;j++){
                    aA[j].style.color="";

                }

            }

        }


};