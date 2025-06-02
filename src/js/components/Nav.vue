<template>
<nav class="nav">
    <span class="nav__logo"><router-link to="/">WORKOUT</router-link></span>
    <ul class="nav__links" v-if="screenWidth > 1024">
        <li><a href="">ВПРАВИ</a></li>
        <li><a href="">ТРЕНУВАННЯ</a></li>
        <li><router-link to="/tarrifs">ЦІНИ</router-link></li>
        <li><a href="">ПРО НАС</a></li>
    </ul>
    <i v-else :class="menuIcon" @click="showMenu"></i>

    <ul class="nav__links__mobile" v-if="screenWidth <= 1024 && mobileMenu">
        <li><a href="">ВПРАВИ</a></li>
        <li><a href="">ТРЕНУВАННЯ</a></li>
        <li><router-link to="/tarrifs">ЦІНИ</router-link></li>
        <li><a href="">ПРО НАС</a></li>
    </ul>
</nav>
</template>

<script>
export default {
    data() {
        return {
            screenWidth: screen.width,
            mobileMenu: false,
            menuIcon: "fa-solid fa-bars-staggered"
        }
    },
    mounted() {
        this.onScreenResize();
    },
    methods: {
        onScreenResize() {
            window.addEventListener("resize", () => {
                this.screenWidth = screen.width;
            })
        },
        showMenu() {
            this.mobileMenu = !this.mobileMenu;
            this.menuIcon = this.menuIcon.includes("bars") ? "fa-regular fa-circle-xmark" : "fa-solid fa-bars-staggered"
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    flex-wrap: wrap;

    .nav__logo {
        font-size: 1.8em;
        text-transform: uppercase;
    }

    .nav__links {
        list-style: none;
        text-transform: uppercase;

        > li {
            display: inline-block;
            
            &:not(:last-of-type) {margin-right: 27px;}
        }
    }
}

.nav__links__mobile {
    list-style: none;
    text-align: center;
    width: 100%;

    li {
        margin-top: 20px;
    }
}
</style>