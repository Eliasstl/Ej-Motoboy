import React from 'react';
import './Header1.css';



function Header1(){

    return(
        <div class="header1">
            <ul>
            <h1 class="titu1">DÚVIDAS SOBRE SERVIÇO DE ENTREGA</h1>

               <li>
                  
                   <h2 class="titu">Os profissionais de entrega os Motoboys são habilitados ?</h2>
                   <p class="txt">
                       Sim – Todos os nossos entregadores são habilitados precisam comprovam
                       que estão em dia com sua CNH (Carteira Nacional de Habilitação) além 
                       de e possuírem experiência no ramo de entrega e transporte, exigimos
                       ainda conhecimento amplo para poder atuar na cidade de São Paulo tudo 
                       pensando na melhor rota de entrega.
                   </p>
                </li> 
                <li>
                   <h2 class="titu">Nas entregas as motos pode ser qualquer uma ou existem exigências ?</h2>
                   <p class="txt">
                       As exigências são determinadas pelo CONTRAN – Conselho Nacional de trânsito, e são:
                       a) Motos com 120 cilindradas;
                       c) Registro na categoria de veículos de aluguel;
                       b) Menos de 8 anos de uso;
                       d) Equipamentos de segurança determinados na Lei.
                   </p>
                </li> 
                <li>
                   <h2 class="titu">O que pode ser transportado por um motofretista ?</h2>
                   <p class="txt">
                       Não existe muitas restrições, pois basicamente o que couber no baú da moto que
                       suporta uma caixa de aproximadamente 30x30cm, e pesando até 13 kg.
                       Caso o objeto for frágil a embalagem precisa ser reforçada. Sendo assim pode
                       transportar documentos, malotes, pequenos presentes, comida etc .
                       Esses são alguns exemplos do que pode ser transportado no baú de uma moto,
                       lembrando no caso de objeto e pacotes todos tem que ser legalizado pela lei vigente
                       no país no caso Brasil.
                   </p>
                </li>
                <li>
                   <h2 class="titu">O que Não pode ser transportado ?</h2>
                   <p class="txt">
                       O motofretista não pode transportar entorpecentes (drogas ilícitas) aquelas
                       drogas que não são legalizadas no Brasil
                       Nem dar “carona” ou seja não pode solicitar um motoboy e pedir para que ele
                       leve você a algum destino.
                       Pela lei é proibido transportar animais em motocicletas, mas pode ser feito
                       em alguns casos desde que estejam devidamente protegidos e seguros ao condutor
                       e aos demais à sua volta – Por isso é bom consultar antes
                   </p>
                </li> 
            </ul>
        </div>
    );
}

export default Header1;