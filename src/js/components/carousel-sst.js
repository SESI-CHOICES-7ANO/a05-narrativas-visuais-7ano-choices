export default{name:"CarouselSst",data(){return{carousel:{class:"carousel-sst",key:0,elemento:null,qtdSlides:0,ordem:1,ordemAnterior:99},instances:null,items:[{id:1,img:"src/img/aula/epa-01.webp",alt:"EPA",html:`
            <p>
            Os Equipamentos de Proteção Auditiva (EPAs) são dispositivos projetados para proteger os ouvidos contra os efeitos prejudiciais do ruído excessivo. Eles são usados para reduzir a exposição ao som, minimizando a quantidade de som que entra no ouvido.
            </p>
            `},{id:2,img:"src/img/aula/epa-02.webp",alt:"EPA",html:`
            <p>
            Eles protegem os ouvidos dos ruídos das máquinas, da variação de som e, dependendo do formato, impedem que objetos ou materiais possam agredi-los. O som de uma TV ligada, de uma música no rádio ou de pessoas conversando é agradável aos ouvidos, no entanto, conforme sua intensidade e frequência aumentam, como no caso de máquinas na linha de produção, pode ser perigoso aos ouvidos, causando surdez em alguns casos.

            </p>
            `},{id:3,img:"src/img/aula/epa-03.webp",alt:"EPA",html:`
            <p>
            Os protetores são escolhidos conforme a empresa e ramo de atividade. Existem vários tipos de protetores auditivos disponíveis, cada um projetado para atender a diferentes necessidades e preferências.

            </p>
            <p>
            Há também protetores auditivos específicos para diferentes ambientes, como protetores para uso industrial, protetores para música ao vivo, protetores para natação, entre outros.

            </p>
            `},{id:4,img:"src/img/aula/epa-04.webp",alt:"EPA",html:`
            <p>
            O uso adequado do protetor auditivo é essencial para proteger a audição contra danos causados pelo ruído excessivo, para prevenir a Perda Auditiva Induzida por Ruído (PAIR) e para promover a saúde auditiva em geral.

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
      <div v-for="item in items" :key="item.id" class="carousel-item  white-text center-align">
        <img :src="item.img" :alt="item.alt" loading="lazy">
        <div class="gradient"></div>
        <div class="text white-text center-align" v-html="item.html"></div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `};