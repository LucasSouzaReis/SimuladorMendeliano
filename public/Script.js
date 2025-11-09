var a = 1;
function redirecionarPagina(pagina){
    window.location.href = pagina;
}
function mudarImagem(Imagem, idImagem){
    document.getElementById('mainImage').src = Imagem;
    document.getElementById(idImagem).className = 'minhaImagem3';
    if (a == 1){
        document.getElementById('img1').className = 'minhaImagem2'; 
    }else if (a == 2){
        document.getElementById('img2').className = 'minhaImagem2';
    }else if (a == 3){
        document.getElementById('img3').className = 'minhaImagem2';
    }else if (a == 4){
        document.getElementById('img4').className = 'minhaImagem2';
    }
    /*-----*/
    if (idImagem == 'img1'){
        a = 1;
    }else if (idImagem == 'img2'){
        a = 2;
    }else if (idImagem == 'img3'){
        a = 3;
    }else if (idImagem == 'img4'){
        a = 4;
    }
}