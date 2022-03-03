function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Dados incompativeis.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero= ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
            if(fsex[0].checked){
                genero = 'masculino'
                if(idade>=0 && idade <3){
                    //bb
                    img.setAttribute('src','img/bebemenino.png')
                }
                else if(idade <=12){
                    //crianca
                    img.setAttribute('src','img/criancamenino.png')
                }
                else if(idade <18){
                    //jovem
                    img.setAttribute('src','img/jovemmenino.png')
                }
                else if(idade <60){   
                    //adulto
                    img.setAttribute('src','img/adultomenino.png')
                }
                else{
                    //idoso
                    img.setAttribute('src','img/idosomenino.png')
                }
            }else if(fsex[1].checked){
                genero='femenino'
                if(idade>=0 && idade <3){
                    //bb
                    img.setAttribute('src','img/bebemenina.png')
                }
                else if(idade <=12){
                    //crianca
                    img.setAttribute('src','img/criancamenina.png')
                }
                else if(idade <18){
                    //jovem
                    img.setAttribute('src','img/jovemmenina.png')
                }
                else if(idade <60){   
                    //adulto
                    img.setAttribute('src','img/adultomenina.png')
                }
                else{
                    //idoso
                    img.setAttribute('src','img/idosamenina.png')
                }
            }
        res.style.textAlign='center' //centralizando o res com js
        res.innerHTML=`Você é do gênero ${genero} com ${idade} anos.</br>`
        res.appendChild(img)
    }
}