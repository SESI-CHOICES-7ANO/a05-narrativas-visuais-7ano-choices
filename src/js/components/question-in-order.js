export default{data(){return{opcoes:["Boca","Esôfago","Estômago","Faringe","Intestino delgado","Intestino grosso"],respostaCorreta:["Boca","Faringe","Esôfago","Estômago","Intestino delgado","Intestino grosso"],revelado:!1}},methods:{revelarResposta(){this.revelado=!this.revelado}},template:`
   <div class="question-in-order">
   <div class="row">
      <div class="col m12 s12">
       <p class="body1">
         <b>Numere os órgãos de acordo com o caminho feito pelo alimento em nosso corpo:</b>
       </p>
      </div>
   </div>
   <div class="row">
     <div class="col m6 s12">
       <ul>
         <li v-for="(orgao, index) in opcoes" :key="index">
           <input type="number" min="1" max="6" /> {{ orgao }}
         </li>
       </ul>
       <a href="#/" class="purple-text btn btn-large filled waves-effect waves-light bubbly-button" @click="revelarResposta">
         Revelar <span class="ml-4" style="font-size: 24px;">
         👀
       </span>
       </a>
     </div>
     <div class="col m6 s12">
       <div
         v-if="revelado"
         class="card card--purple-shadow resposta-correta"
       >
         <div class="card-content">
           <p class="purple-text"><b>Resposta correta:</b></p>
           <ul >
             <li
               class="mb-12 purple-text"
               v-for="(correta, index) in respostaCorreta"
               :key="index"
             >
               ({{ index + 1 }}) {{ correta }}
             </li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 </div>

  `};