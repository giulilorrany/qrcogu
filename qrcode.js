

function leiamais(){
    var mais = document.getElementById('mais');
    var pontos = document.getElementById('pontos');
    var leiaMais = document.getElementById('btnleiamais');

    if(mais.style.display == "none"){
        mais.style.display = 'inline';
        pontos.style.display = 'none';
        leiaMais.innerHTML= 'ler menos';
    }else{
        mais.style.display = 'none';
        pontos.style.display = 'inline';
        leiaMais.innerHTML= 'leia mais';
    }
}

function mostrarefeito(){
    var text =  document.querySelector(".textefeito")
    var seta = document.querySelector('.setaefeito')

    if(text.style.display == "none"){
        text.style.display = "inline";
        seta.innerHTML = '^';
    }else{
        text.style.display = "none";
        seta.innerHTML = 'v';
    }
}


function mostrareco(){
    var text =  document.querySelector(".textreco")
    var seta = document.querySelector('.setareco')

    if(text.style.display == "none"){
        text.style.display = "inline";
        seta.innerHTML = '^';        
    }else{
        text.style.display = "none";
        seta.innerHTML = 'v';
    }
}


function mostrardesc(){
    var text =  document.querySelector(".textdesc")
    var seta = document.querySelector('.setadesc')

    if(text.style.display == "none"){
        text.style.display = "inline";
        seta.innerHTML = '^';        
    }else{
        text.style.display = "none";
    }
}


function mostrarexp(){
    var text = document.getElementById(textexp)
    
    if(text.style.display == 'none'){
        text.style.display == 'inline'
    }else{
        text.style.display == 'inline'
    }

}


function mostrarestri(){
var text = document.querySelector('#textrestri')

if(text.style.display == 'none'){
text.style.display = 'inline'
}else{
    text.style.display = 'none'
}
}

function mostrarfracao(){
    var table = document.querySelector('.tfracao')
    if(table.style.display == 'none'){
        table.style.display = 'inline'
    }else{
        table.style.display = 'none'
    }
}

function mostrartdose(){
    var table = document.querySelector('.tdose')

    if(table.style.display == 'none'){
        table.style.display = 'inline'
    }else{
        table.style.display = 'none'
    }

}


function mostrarindica(){
    var text = document.querySelector('#textindica')

    if(text.style.display == 'none'){
        text.style.display = 'inline'
    }else{
        text.style.display = 'none'
    }

}


function mostrarexp(){
var text = document.querySelector('#textexp')

if (text.style.display == 'none') {
    text.style.display = 'inline'
} else {
    text.style.display = 'none'
}
}


function mostrarlinks(){
    var links = document.querySelector('#link')

    if (links.style.display=='none'){
        links.style.display = 'inline'        
    } else {
        links.style.display = 'none'
    }
}























// function hover(){
//     var embala = document.querySelector('.embala') 
//     var label = document.querySelector('.label')

//     embala.style.cursor.innerTextHTML = 'entrega-se'
// }


// function hoverout(){
//     var embala = document.querySelector('.embala') 
//     var label = document.querySelector('.label')

//     embala.style.display = 'none';
// }


// function option(){
//     var preco = document.getElementById('precos')

//     if(select.value.option== 'bufallo'){
//         precos.innerHTML = '22';
//     }

// }


