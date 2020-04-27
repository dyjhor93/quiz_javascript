var contestadas = 0;
var correctas = 0;
var respondio = [null,0,0,0,0,0,0,0,0,0];
var actual = 1;
var p1 = ["En JavaScript, ¿cómo se muestra una ventana con el mensaje ''Hola mundo!''?", "alert(''Hola mundo!'');", "alertBox = Hola mundo!;"," alertBox(Hola mundo!);","msgBox(Hola mundo!);","","1"];
var p2 = ["¿cuál es la forma correcta de añadir 1 a la variable contador?", "contador++;", "contador =+1;","+contador;","Todas las anteriores","","1"];
var p3 = ["¿Qué propiedad de CSS se emplea para cambiar el tipo de letra de un elemento?", "font-family", "text-family","font-type","text-type","","1"];
var p4 = ["En JavaScript, ¿cómo se calcula el máximo de los números 2 y 4?", " ceil(2, 4)", "top(2, 4)","Math.ceil(2, 4)","Math.max(2, 4)","","4"];
var p5 = ["En JavaScript, ¿qué función se emplea para convertir una cadena a minúsculas?", " lower()", "lowerCase()","toLower()"," toLowerCase()","","4"];
var p6 = ["En JavaScript, ¿cómo se inserta un comentario que ocupa una línea?", "&#60;!-- Comentario -->", " // Comentario"," ' Comentario","Ninguna de las anteriores","","2"];
var p7 = ["En HTML, el atributo title se emplea para?", "Definir el título de la página", "Definir el nombre de un elemento","Proporcionar información adicional sobre un elemento","Ninguna de las anteriores","","1"];
var p8 = ["¿Cómo se hace en CSS para que el texto aparezca en negrita?", "font:b", "font-style: bold;","text:bold","ninguna de las anteriores","","2"];
var p9 = ["¿Qué significa CSS?", "Colorful Style Sheets", "Cascading Style Sheets","Creative Style Sheets","Computer Style Sheets","","2"];
var questions = [null,p1,p2,p3,p4,p5,p6,p7,p8,p9];

function login(){
    document.getElementById("login").style.display="none";
    document.getElementById("test").style.display="flex";
    document.getElementById("quiz").style.display="flex";
    document.getElementById("name_").innerHTML = document.getElementById("name").value;
    actualize();
}

function cambiar_contestadas(){
    document.getElementById("contestadas").innerHTML = "Preguntas contestadas: "+contestadas;
}

function actualize(){    
    $('#panel, #cajon').hide();
    $('#panel, #cajon').fadeIn(400);
    document.getElementById("act").innerHTML = "La pregunta es: " + actual;
    
    selected();
    cargarpregunta();
    cambiar_contestadas();
    document.getElementById("progreso").value = contestadas;
    if(contestadas==9){
        document.getElementById("quiz").style.display="none";
        document.getElementById("panel").style.display="none";
        document.getElementById("resultado").style.display="block";
        document.getElementById("navegacion").style.display="none";
        document.getElementById("rname").innerHTML = document.getElementById("name").value;
        document.getElementById("rresult").innerHTML = parseFloat((5/9)*correctas).toFixed(2);
    }
}
function siguiente(){
    if(actual==9){
        actual=1;
    }else{
        actual++;
    }
    actualize();
}
function anterior(){
    if(actual==1){
        actual=9;
    }else{
        actual--;
    }
    actualize();
}

function contestar(){
    if($('#s-1').prop('checked')||$('#s-2').prop('checked')||$('#s-3').prop('checked')||$('#s-4').prop('checked')){
        var se = $("input[name='res']:checked").val();
        questions[actual][5]=se;
        //alert(actual+" respondio "+questions[actual][5]+" correcta "+questions[actual][6]);
        contestadas++;
        respondio[actual]=1;
        actualize();
    }else{
        alert("Seleccione una respuesta!");
    }
    
}
function selected(){
    correctas=0;
    for (var i = 1; i <= 9; i++) {
        if(i==actual&&contestadas!=9){
            document.getElementById("c-"+actual).style.backgroundColor = "#0000ff";
        }else{
            if(respondio[i]!=0){
                
                if(questions[i][5].toString()==questions[i][6].toString()){
                    document.getElementById("c-"+i).style.backgroundColor = "#55ff55";
                    correctas++;
                }else{
                    document.getElementById("c-"+i).style.backgroundColor = "#ff5555";
                }
            }else{
                document.getElementById("c-"+i).style.backgroundColor = "#00ffee";
            }
            
        }
    }
    if(respondio[actual]!=0){
        $('#contestar').hide();
        $('input:radio[name="res"]').prop('disabled',true);
    }else{
        $('input:radio[name="res"]').prop('disabled',false);
        $('#contestar').show();
    }
    $('input:radio[name="res"]').prop('checked',false);
    
}
function cargarpregunta(){
    document.getElementById("preguntactual").innerHTML = questions[actual][0];
    document.getElementById("r-1").innerHTML = questions[actual][1];
    document.getElementById("r-2").innerHTML = questions[actual][2];
    document.getElementById("r-3").innerHTML = questions[actual][3];
    document.getElementById("r-4").innerHTML = questions[actual][4];
}
$(document).ready(function(){
    for (var c = 1; c <= 9; c++) {
        $("#c-"+c).click(function(){
            var n = $(this).attr("id").split("c-")[1];
            actual=n;
            actualize();
        });
        $('#c-'+c).hover(function(){
            //$(this).hide();
            $(this).css('cursor','pointer');
        });
    }
    
});