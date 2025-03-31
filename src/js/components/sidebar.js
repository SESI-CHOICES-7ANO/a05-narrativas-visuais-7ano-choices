import{onMounted,nextTick}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";export default{setup(){return onMounted(()=>{function i(e){e.preventDefault();e=e.target.getAttribute("href"),e=document.querySelector(e).offsetTop;window.scroll({top:e-60,behavior:"smooth"})}document.querySelectorAll(".sidenav a[href^='#']").forEach(e=>{e.addEventListener("click",i)}),nextTick(()=>{var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e,{})})}),{}},template:`

  <ul id="slide-out" class="sidenav">
    <li>
      <div class="user-view">
        <img src="src/img/core/logo-choices.webp" alt="Logo Choices" />
        <p class="sidenav__general-title">Choices 6º ano | Quem é você</p>
        <h3 class="sidenav__specific-title">
        Aula 01 | Desvendando o mistério de si mesmo
        </h3>
        <div class="progress-box">
          <div class="progress">
            <div class="determinate"></div>
          </div>
          <p class="body1">
            <span class="progress-box__number">1%</span> concluído
          </p>
        </div>
      </div>
    </li>

    <li>
      <a href="#hero">01: 😊Início</a>
    </li>
    <li>
      <a href="#intro">02: 😀Introdução</a>
    </li>
    <li>
      <a href="#missao">03: 🚀Missão</a>
    </li>
    <li>
      <a href="#galileu">04: 🔭Galileu Galilei</a>
    </li>
    <li>
      <a href="#copernico">05: 🔭Nicolau Copérnico</a>
    </li>
    <li>
    <a href="#mapa">06: 🧠Mapa mental</a>
    </li>
    <li>
    <a href="#sistema">07: ☀️Sistema Solar</a>
    </li>
    <li>
    <a href="#planetas">08: 🪐Planetas</a>
    </li>
    <li>
    <a href="#resumo">09: 🤔Resumindo...</a>
    </li>
    <li>
      <a href="#relatorio">10: 📝Relatório de Missão</a>
    </li>
    <li>
      <a href="#concluir">11: 😀Conclusão</a>
    </li>
  </ul>
  `};