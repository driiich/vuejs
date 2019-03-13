<template>
  <div>
    <carousel>
      <carousel-slide v-for="n in slides" :index="n - 1">
        <div style="position:absolute; left:0; right: 0; text-align:center; top: 50%; color: #FFF; font-size:16px;">Slide {{ n }}</div>
        <img :src="'https://picsum.photos/630/300/?image=' + n" width="100%">
      </carousel-slide>
    </carousel>
    <button @click="addSlide">Ajouter un slide</button>
    <button @click="removeSlide">Supprimer un slide</button>
    <todos v-model="todos"></todos>
  </div>
</template>

<script>
    import Todos from './components/Todos'
    import Carousel from './components/carousel/Carousel'
    import CarouselSlide from './components/carousel/CarouselSlide'

    export default {
        data () {
            return {
                slides: 5,
                todos: [{
                    name: 'Demo',
                    completed: true
                }]
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
            CarouselSlide
        }
    }
</script>

