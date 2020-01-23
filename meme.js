    function desenhar(){
        var canvas = document.querySelector("#canvas");
        var contexto = canvas.getContext("2d");
        var titulo = document.getElementById("titulo");
        var rodape = document.getElementById("down");
        var image1 = document.getElementById("imagem");
        var positiontx=document.getElementById("positiontx");
        var positionty=document.getElementById("positionty");
        var positionrx=document.getElementById("positionrx");
        var positionry=document.getElementById("positionry");
        var fontt=document.getElementById("fontt");
        var fontr=document.getElementById("fontr");
        var image = new Image();
    

        image.onload = function(){

            canvas.width = image.width;
            canvas.height = image.height;
            //Titulo
                contexto.drawImage(image,0,0,canvas.width, canvas.height);
                contexto.strokeStyle = "black";
                contexto.font = fontt.value+"pt Impact";
                contexto.lineWidth = 6;
                contexto.strokeText(titulo.value, positiontx.value, positionty.value);
                contexto.fillStyle = "white";
                contexto.font = fontt.value+"pt Impact";
                contexto.lineWidth = 3;
                contexto.fillText(titulo.value, positiontx.value, positionty.value);
            //
            //Rodapé
                contexto.strokeStyle = "black";
                contexto.font = fontr.value+"pt Impact";
                contexto.lineWidth = 6;
                contexto.strokeText(rodape.value, positionrx.value, positionry.value);
                contexto.fillStyle = "white";
                contexto.font = fontr.value+"pt Impact";
                contexto.lineWidth = 3;
                contexto.fillText(rodape.value, positionrx.value, positionry.value);
            //
        }
        image.src = image1.value;
    }