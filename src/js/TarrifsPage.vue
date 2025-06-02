<template>
    <div>   
        <Nav />
        <HeadTarrifs />
        <HowTo />
        <Info />
        <Tarrifs />
        <Footer />
    </div>
</template>

<script>
import Nav from './components/Nav.vue'
import HeadTarrifs from './components/HeadTarrifs.vue'
import HowTo from  './components/HowTo.vue'
import Info from './components/Info.vue'
import Tarrifs from './components/Tarrifs.vue'
import Footer from './components/Footer.vue'

export default {
    components: { Nav, HeadTarrifs, HowTo, Info, Tarrifs, Footer },
}
</script>

<style lang="scss">

</style>