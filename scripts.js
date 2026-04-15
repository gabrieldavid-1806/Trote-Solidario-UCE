         function calcular(){
            //pontuação dos itens avulsos
          //recupera a quantidade de arroz
          let qtdearroz= Number(document.getElementById("qtdearroz").value)
          let qtdefeijao= Number(document.getElementById("qtdefeijao").value)
          let qtdeoleo= Number(document.getElementById("qtdeoleo").value)
          let qtdemacarrao= Number(document.getElementById("qtdemacarrao").value)
          let pontos = (qtdearroz * 10) + (qtdefeijao * 8) + (qtdeoleo * 2) + (qtdemacarrao * 4)
          //pontuação dos kits de alimentação
          //recupera a cor escolhida pelo usuario
          let cor = document.getElementById("cor").value
          let metaKit
          if (cor == "verde"){metaKit = 61}
          else if (cor == "laranja"){metaKit = 21}
          else if (cor == "amarelo"){metaKit = 54}
          else if (cor == "marrom"){metaKit = 88}
          else if (cor == "vermelho"){metaKit = 32}
          else if (cor == "rosa"){metaKit = 44}
          else if (cor == "roxo"){metaKit = 42}
          else if (cor == "preto"){metaKit = 60}
          else if (cor == "cinza"){metaKit = 51}
           let qtdekits =Number(document.getElementById("qtdekits").value) 
           if(qtdekits >= metaKit){pontos = pontos + 5000
            if (qtdekits > metaKit){pontos = pontos +(qtdekits - metaKit) * (5000/metaKit)}
           }
           else { pontos = pontos + (qtdekits)* (5000/metaKit)}
          document.getElementById("result").innerHTML= "Pontuação : " + pontos + " pontos<br>" + 
            "A meta de kits de alimentação para o seu curso é : " + metaKit + " Kits"
        }
      
   