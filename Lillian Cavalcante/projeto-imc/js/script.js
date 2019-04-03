let dados = [];

function calcular (){

    let nome = document.getElementById("nome").value;
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if(nome != "" && altura > 0 && peso > 0 ){

        let IMC = calcularIMC(altura, peso);
        let situacao = geraSituacao (IMC);

        let pessoa = {};
        pessoa.nome         = nome;
        pessoa.altura       = altura;
        pessoa.peso         = peso;
        pessoa.imc          = IMC.toFixed(2 );
        pessoa.situacao     = situacao;

        dados.push(pessoa);
        montaTela();

        document.getElementById("nome").value='';
        document.getElementById("altura").value='';
        document.getElementById("peso").value='';

     } else {
         alert("Preencha os campos corretamente");
     }
}

function calcularIMC( a, p ){

    return p / (a * a); 
}

    function geraSituacao(imc){

    if( imc < 18.5 ){
    return "Abaixo do peso";

    } else if( imc >= 18.5 && imc <= 24.9 ){
        return "Peso ideal (Parabéns)";

    }  else if( imc >= 25 && imc <= 29.9 ){
        return "Levemente acima do peso";

    }  else if( imc >= 30 && imc <= 34.9 ){
        return "Obesidade grau 1";

    }  else if( imc >= 35 && imc <= 39.9 ){
        return "Obesidade grau 2 (Severa)";
     
    } else {// a partir de 40
    return "Obesidade 3 (Mórbida)";
    }

}

    function montaTela(){
        // rodas um for para montar todas as linhas de tabela e depois inserir no html 


        let template = "";
        for(let i = 0 ; i < dados.length; i++){
            console.log(dados[i].nome);
                template += `   
            <tr>
                <td>${dados[i].nome}</td>
                <td>${dados[i].altura}</td>
                <td>${dados[i].peso}</td>
                <td>${dados[i].imc}</td>
                <td>${dados[i].situacao}</td>
            </tr>
            `;
        }

        document.getElementById("cadastro").innerHTML = template;

    }
