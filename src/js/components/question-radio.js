export default{data(){return{id:"q1"}},methods:{verificaQuestao(e,a){e=e.target.value;document.querySelector("#"+a).querySelector(".feedback").innerHTML=e==={q1:"a"}[a]?`
        <div class="question-result question-result__correto">
        <img src="src/img/gif-06.webp" alt="correto">
        <p class="body1 flex--align-center">
          <b>Acertou</b>
          <span class="material-symbols-rounded ml-16 mb-4">sentiment_very_satisfied</span>
        </p>
      </div>
      `:`
        <div class="question-result question-result__incorreto">
          <p class="body1 flex--align-center">
             <span class="material-symbols-rounded mx-16">sentiment_very_dissatisfied</span>
            <b>Ops! Tente novamente</b>
          </p>
        </div>
      `}},template:`
  <!-- Question 1 -->
  <div class="question question--radio" :id="[id]">
    <p class="body1 mt-2">
      <b>Para iniciar todo o processo, você colocar o alimento na:</b
      >​
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="a" />
        <span> <b>a) </b>Cabeça</span>
      </label>
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="b" />
        <span> <b>b) </b>Boca</span>
      </label>
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="c" />
        <span> <b>c) </b>Barriga</span>
      </label>
    </p>
    <p>
      <label @change="verificaQuestao($event, 'q1')">
        <input name="q1" type="radio" value="d" />
        <span> <b>d) </b>Geladeira</span>
      </label>
    </p>
    <div class="feedback"></div>
  </div>

  `};