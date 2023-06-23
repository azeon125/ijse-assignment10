var number = [];
var char = [];

$(".number").click(function () {
    if(number.length<=0){
        clearNumbers();
        if(!(value==undefined)){
            $("#txtInput").val("");
        }
    }
    let text = $(this).children().eq(0).text();
    let val = $("#txtInput").val();
    if(Number(val)|| val==""){
        $("#txtInput").val(val+text);
    }else{
        $("#txtValues").val( $("#txtValues").val()+val);
        char.push(val);
        $("#txtInput").val(text);

    }

});

$(".char").click(function () {
    let val = $("#txtInput").val();
    if(!(value==undefined)){
      clearNumbers();
    }
    let text = $(this).children().eq(0).text();
    if (Number(val)) {
    $("#txtValues").val($("#txtValues").val()+val);
        $("#txtInput").val( text);
        number.push(Number(val));
    } else {
        $("#txtInput").val( text);
    }
});
var value=undefined;
$("#btnEqual").click(function () {
    let val = $("#txtInput").val();
    number.push(Number(val));
    $("#txtValues").val($("#txtValues").val()+val);
     value = 0.0;
    for (let i = 0; i < number.length-1; i++) {
            switch (char[i]) {
                case "%":
                value=number[i] %number[i+1];
                    break;
                case "/":
                value=number[i] /number[i+1];
                    break;
                case "x":
                value=number[i] *number[i+1];

                    break;
                case "-":
                value=number[i] -number[i+1];
                    break;
                case "+":
                value=number[i] +number[i+1];
                    break;
        }
    number[i+1]=value;
    }
    $("#txtInput").val(value);
    number=[];
    char=[];
});

$("#btnClear").click(function (){
   clearNumbers();
    $("#txtInput").val("");
});

$(".btnBackSpace").click(function (){
    let val1 = $("#txtInput").val();
    $("#txtInput").val(val1.substring(0,val1.length-1));
});
function clearNumbers() {
    $("#txtValues").val("");
    value=undefined;
}
