export default{data(){return{gabaritoQuestoes:{q2:["a","c","d"]},formData:{q2:[]}}},methods:{verificaQuestao(a){var e=this.gabaritoQuestoes[a].length,e=this.formData[a].length===e&&this.formData[a].every(e=>this.gabaritoQuestoes[a].includes(e));console.log("acertou",e);document.querySelector("#"+a).querySelector(".feedback").innerHTML=e?`
        <div class="mb-40 question-result question-result__correto">
        <img src="src/img/correct.webp" alt="correto">
        <p class="body1 flex--align-center">
          <b>Sim, essas são as características associadas ao conto.
          </b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `:`
        <div class="mb-40 question-result question-result__incorreto">
        <img src="src/img/error.webp" alt="correto">
          <p class="body1 flex--align-center">
             
            <b>Algumas das opções selecionadas estão incorretas.</b>
            <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
          </p>
        </div>
      `}},template:`
<!-- Question 2 -->
<div class="question question--checkbox" id="q2">
<form action="get"  @submit.prevent="verificaQuestao('q2')">
  <p class="body1 mt-2">
    <b>
    Sobre as definições narrativas utilizadas em contos, podemos dizer que: </b
    >​
  </p>
  <p>
    <label>
      <input name="q2[]"  type="checkbox" value="a" v-model="formData.q2"  />
      <span>
        <b>a) </b>Enredo é o acontecimento narrado pela história</span
      >
    </label>
  </p>
  <p>
    <label>
      <input name="q2[]"  type="checkbox" value="b" v-model="formData.q2"  />
      <span>
        <b>b) </b>O conto só pode ser narrador pela 3ª pessoa</span
      >
    </label>
  </p>
  <p>
    <label>
      <input name="q2[]" type="checkbox" value="c" v-model="formData.q2"  />
      <span>
        <b>c) </b>Contos narrados na primeira pessoa envolvem um(a) narrador(a)-personagem</span
      >
    </label>
  </p>
  
  <p>
    <label>
      <input name="q2[]" type="checkbox" value="d" v-model="formData.q2"  />
      <span>
        <b>e) </b>O(a) narrador(a) escolhido(a) vai influenciar o estilo narrativo do conto e o clima dele</span
      >
    </label>
  </p>
  <div class="feedback"></div>
  <input class="mt-24 btn filled" type="submit" value="Responder 👀" />
</form>
</div>
`};