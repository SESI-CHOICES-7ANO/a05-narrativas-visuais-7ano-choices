export default{data(){return{gabaritoQuestoes:{qck1:["a","c"]},formData:{qck1:[]}}},methods:{verificaQuestao(a){var e=this.gabaritoQuestoes[a].length,e=this.formData[a].length===e&&this.formData[a].every(e=>this.gabaritoQuestoes[a].includes(e));console.log("acertou",e);document.querySelector("#"+a).querySelector(".feedback").innerHTML=e?`
        <div class="mb-40 question-result question-result__correto">
       
        <p class="body1 flex--align-center">
          <b>Isso aí! Esses são alguns aspectos que podemos afirmar sobre transmídia.
          </b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `:`
        <div class="mb-40 question-result question-result__incorreto">
        
          <p class="body1 flex--align-center">
             
            <b>Algumas das opções selecionadas estão incorretas.</b>
            <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
          </p>
        </div>
      `}},template:`
<!-- Question 1 -->
<div class="question question--checkbox question--dark" id="qck1">
<form action="get"  @submit.prevent="verificaQuestao('qck1')">
  <p class="body1 mt-2">
    <b>
      👉 Sobre a transmídia, é possível dizer que: </b
    >​
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="a" v-model="formData.qck1"  />
      <span>
      Conta uma história através de muitas mídias diferentes.
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]"  type="checkbox" value="b" v-model="formData.qck1"  />
      <span>
      ​

      É a adaptação de um livro para um filme ou vice-versa.
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="c" v-model="formData.qck1"  />
      <span>
      ​

      Se apresenta de modo que a pessoa que acompanha descobre coisas novas a cada pedaço de mídia novo que acompanha.
      </span>
    </label>
  </p>
  <p>
    <label>
      <input name="qck1[]" type="checkbox" value="d" v-model="formData.qck1"  />
      <span>
      Não funciona muito bem no formato da internet porque é grande demais.      </span>
    </label>
  </p>
  
  <div class="feedback"></div>
  <input class="mt-24 purple-text btn-large filled waves-effect waves-light bubbly-button" type="submit" value="Responder 👀" />
</form>
</div>
`};