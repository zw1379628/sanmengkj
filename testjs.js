window.onload=function() {
    var top_a = document.getElementsByName("top_a");
    var top_a_p1 = document.getElementsByName("p1");
    var bot = document.getElementsByClassName("down_div_down_div_1");
    var mengban = document.getElementsByClassName("mengban");
    var beibai = document.getElementsByClassName("beibai");
    var mengban_topp = document.getElementsByName("p2");
    var gb = document.getElementsByName("gb");
    var b = document.getElementsByName("b");
    var arr = [];
    gb[0].onmouseup = function (){
        mengban[0].style.height = "0"
        beibai[0].style.height = "0";
        mengban_topp[0].innerHTML = content1(null);
        mengban_topp[1].innerHTML = content2(null);
    }
    for (var i = 0; i < 10; i++) {
        arr[i] = bot[i].children[0];
        arr[i].parentNode.i = i;
        arr[i].parentNode.onmouseup = function (){
            mengban[0].style.height = "100vh"
            beibai[0].style.height = "17rem";
            mengban_topp[0].innerHTML = content1(this.i);
            mengban_topp[1].innerHTML = content2(this.i);
        }
        if(i!=0&&i!=2&&i!=7&&i!=3&&i!=9){
            arr[i].parentNode.style.pointerEvents = "none";
        }else {arr[i].style.color = "#FB9488"};
    };
    top_a[0].onmouseup = function () {
        b[0].innerHTML = "高级版";
        top_style(2, 3, 0, 1);
        top_a[0].className = "top_div_ch top_div_ch_color2";
        top_a[1].className = "top_div_ch top_div_ch_color1";
        for (var i = 0; i < 10; i++) {
            if(i!=0&&i!=2&&i!=7&&i!=3&&i!=9){arr[i].style.color = "#FBD7D3"; arr[i].parentNode.style.pointerEvents = "none";
            }else{arr[i].style.color = "#FB9488";arr[i].parentNode.style.pointerEvents = "auto"};
        }
    };
    top_a[1].onmouseup = function () {
        b[0].innerHTML = "定制版";
        top_style(0, 1, 2, 3);
        top_a[1].className = "top_div_ch top_div_ch_color2";
        top_a[0].className = "top_div_ch top_div_ch_color1";
        for (var i = 0; i < 10; i++) {
            arr[i].parentNode.style.pointerEvents = "auto";
            arr[i].style.color = "#FB9488";
        };
    };
        function top_style(q, w, e, r) {                                   //top样式互动
            top_a_p1[e].style.color = "#FD515A";
            top_a_p1[r].style.color = "#FFBABB";
            top_a_p1[q].style.color = "#3B3B3B";
            top_a_p1[w].style.color = "#BABABA";
        };

        function content1(i) {
            i++;
            var str;
            if(top_a[0].className == "top_div_ch top_div_ch_color2"){
                str = "高级版—标题"+i;
            }else {str = "定制版—标题"+i;};
            return str;
        };
        function content2(i) {
            var str;
            if(top_a[0].className == "top_div_ch top_div_ch_color2"){
                switch(i) {
                    case 0:str = "闪萌科技壹高级版‘闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹";break;
                    case 2:str = "闪萌科技贰高级版‘闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰";break;
                    case 3:str = "闪萌科技叁高级版‘闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁";break;
                    case 7:str = "闪萌科技肆高级版‘闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆";break;
                    case 9:str = "闪萌科技伍高级版‘闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍";break;
                    default:break;
                }
            }else { switch(i) {
                case 0:str = "闪萌科技壹定制版‘闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹闪萌科技壹";break;
                case 1:str = "闪萌科技贰定制版‘闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰闪萌科技贰";break;
                case 2:str = "闪萌科技叁定制版‘闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁闪萌科技叁";break;
                case 3:str = "闪萌科技肆定制版‘闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆闪萌科技肆";break;
                case 4:str = "闪萌科技伍定制版‘闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍";break;
                case 5:str = "闪萌科技陆定制版‘闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍";break;
                case 6:str = "闪萌科技柒定制版‘闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍";break;
                case 7:str = "闪萌科技捌定制版‘闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍";break;
                case 8:str = "闪萌科技玖定制版‘闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍";break;
                case 9:str = "闪萌科技拾定制版‘闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍闪萌科技伍";break;
                default:break;
            }};
            return str;
        };
};
