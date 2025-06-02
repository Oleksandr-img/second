<template>
<div>
    <Nav />
    <Head />
    <Courses :data="courses" />
    <Features />
    <Videos />
    <Footer />
</div>
</template>

<script>
import Nav from './components/Nav.vue'
import Head from './components/Head.vue'
import Courses from './components/Courses.vue'
import Features from './components/Features.vue'
import Videos from './components/Videos.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Nav, Head, Courses, Features, Videos, Footer },
    data() {
        return {
            courses: [
                {'title': 'Кардіо', 'cl': '400 калорій', 'time': '45хв', 'img': 'cardio.png'},
                {'title': 'Кроссфіт', 'cl': '450 калорій', 'time': '30хв', 'img': 'crossfit.png'},
                {'title': 'Групова аеробіка', 'cl': '350 калорій', 'time': '50хв', 'img': 'group-aerobics.png'},
                {'title': 'Йога', 'cl': '200 калорій', 'time': '60хв', 'img': 'joga.png'},
                {'title': 'На свіжому повітрі', 'cl': '300 калорій', 'time': '60хв', 'img': 'outside-workout.png'},
                {'title': 'Велотренування', 'cl': '400 калорій', 'time': '45хв', 'img': 'cycling.png'}
            ]
        }
    }

}
</script>

<style lang="scss">

</style>