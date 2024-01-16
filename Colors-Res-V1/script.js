var index=0;
function Changecolor(){
    var color=["red","green","yellow","blue"];
    document.getElementsByTagName("body")[0].style.background=color[index++];
    if(index>color.length-1){
        index=0;
    }
}