<template>
  <div>
    <!-- LIGHTBOX -->
    <div class="ui small images">
      <h1>Futurama</h1>
      <a v-lightbox="'https://picsum.photos/800/600/?image=' + n" v-for="n in 9">
        <img :src="'https://picsum.photos/150/150/?image=' + n">
      </a>
    </div>
test
    <div class="ui segment buttons">
      <button class="ui button green" @click="title = 'normal'">Normal</button>
      <div class="or"></div>
      <button class="ui button yellow" @click="title = 'blur'">Flouter</button>
    </div>

    <div>
      <h1>Blur</h1>
      <div class="ui small images">
        <a v-lightbox.rio="'https://picsum.photos/800/600/?' + title +'&image=' + n" v-for="n in max">
          <img :src="'https://picsum.photos/150/150/?' + title +'&image=' + n">
        </a>
      </div>
      <div class="segment basic aligned center">
        <button class="ui button red" @click="max--">Supprimer une image</button>
      </div>
    </div>

    <lightbox></lightbox>

    <!-- CAROUSEL -->
    <carousel>
      <carousel-slide v-for="n in slides" :index="n - 1">
        <div style="position:absolute; left:0; right: 0; text-align:center; top: 50%; color: #FFF; font-size:16px;">Slide {{ n }}</div>
        <img :src="'https://picsum.photos/630/300/?image=' + n" width="100%">
      </carousel-slide>
    </carousel>
    <button @click="addSlide">Ajouter un slide</button>
    <button @click="removeSlide">Supprimer un slide</button>
    <!-- TODOS -->
    <todos v-model="todos"></todos>
  </div>
</template>

<script>
    import Todos from './components/Todos'
    import Carousel from './components/carousel/Carousel'
    import CarouselSlide from './components/carousel/CarouselSlide'
    import Lightbox from './components/lightbox/Lightbox.vue'

    export default {
        data () {
            return {
                // Carousel
                slides: 5,
                todos: [{
                    name: 'Demo',
                    completed: true
                }],
                // Lightbox
                title: 'futurama',
                max: 9
            }
        },
        methods: {
            addTodo () {
                this.todos.push({
                    name: 'Jean',
                    completed: false
                })
            },
            addSlide () {
                this.slides++
            },
            removeSlide () {
                this.slides--
            }
        },
        components: {
            Todos,
            Carousel,
            CarouselSlide,
            Lightbox
        }
    }
</script>

