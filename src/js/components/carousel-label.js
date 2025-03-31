export default{name:"CarouselLabel",data(){return{carousel:{class:"carousel-label",key:0,elemento:null,qtdSlides:0,ordem:1,ordemAnterior:99},instances:null,items:[{id:1,img:"./src/img/carousel-01.webp",alt:"Dicção",html:`
              <p>
              DICÇÃO
              </p>
              `},{id:2,img:"./src/img/carousel-02.webp",alt:"Expressão Corporal",html:`
              <p>
              EXPRESSÃO CORPORAL
              </p>
              `},{id:3,img:"./src/img/carousel-03.webp",alt:"Capacidade de Improviso",html:`
              <p>
              CAPACIDADE DE IMPROVISO
  
              </p>
              `},{id:4,img:"./src/img/carousel-04.webp",alt:"Entender o público que está ouvindo a história",html:`
              <p>
              ENTENDER O PÚBLICO QUE ESTÁ OUVINDO A HISTÓRIA
  
              </p>
              `}]}},methods:{next(){this.carousel.elemento.querySelector(".previous").style.display="flex",this.instances[this.carousel.key].next()},previous(){this.instances[this.carousel.key].prev()}},mounted(){this.carousel.elemento=document.querySelector("."+this.carousel.class);var e=document.querySelectorAll(".carousel."+this.carousel.class);this.instances=M.Carousel.init(e,{fullWidth:!0,indicators:!0,shift:20,numVisible:1,onCycleTo:e=>{this.carousel.qtdSlides=e.parentNode.querySelectorAll(".carousel-item").length;e=[...e.parentNode.children].indexOf(e);this.carousel.ordem=e,this.carousel.ordemAnterior=this.ordem-1,1==this.carousel.ordem?(this.carousel.elemento.querySelector(".previous").style.display="none",this.carousel.elemento.querySelector(".next").style.display="flex"):this.carousel.qtdSlides==this.carousel.ordem?(this.carousel.elemento.querySelector(".previous").style.display="flex",this.carousel.elemento.querySelector(".next").style.display="none"):(this.carousel.elemento.querySelector(".previous").style.display="flex",this.carousel.elemento.querySelector(".next").style.display="flex")}}),this.carousel.elemento.querySelector(".previous").style.display="none"},template:`
      <!-- Carousel -->
      <div class="carousel carousel-slider center" :class="[carousel.class]">
      <!-- Arrows -->
        <div class="carousel-fixed-item center">
          <a @click="previous" class="previous flex--align-center card to-left">
            <span class="material-symbols-rounded">
              chevron_left
            </span>
          </a>
          <a @click="next" class="next flex--align-center card to-right">
            <span class="material-symbols-rounded">
              chevron_right
            </span>
          </a>
        </div>
  
        <!-- slides -->
        <!-- item -->
        <div v-for="item in items" :key="item.id" class="carousel-item center-align">
          <img :src="item.img" :alt="item.alt" loading="lazy">
          <div class="gradient"></div>
          <div class="box-attention text center-align" v-html="item.html"></div>
        </div>
        <!-- item -->
        
      </div>
      <!-- Fim Carousel -->
    `};