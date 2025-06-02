<template>
    <div>
        <h2>Не знаєте, з чого почати ?</h2>
        <p>Програми пропонують щоденні рекомендації в інтерактивному календарі.</p>
        <div class="blocks" :style="'left: ' + left + 'px'">
            <div class="item">
                <h3>Відео тренування</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="item">
                <h3>Программа курсу</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="item">
                <h3>Таріфи</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div class="item">
                <h3>Блог</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
                        <div class="item">
                <h3>Контакти</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
                        <div class="item">
                <h3>Наші акції</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
                        <div class="item">
                <h3>Скарги та побажання</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div class="arrows">
            <img src="/img/btn.svg" v-if="this.left != 0" @click="moveBlock('prev')" alt="button">
            <img src="/img/btn.svg" v-if="this.left >= -1600" @click="moveBlock('next')" class="next" alt="button">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            left: 0
        }
    },
    methods: {
        moveBlock(value) {
            let add = 320;
            if(value == 'next' && this.left >= -1600)
                this.left -= add;
            else if(value == 'prev' && this.left != 0)
                this.left += add;
        }
    }
}

</script>

<style lang="scss">
h2 {
    margin-top: 80px;
    font-size: 2.4em;
}

p {
    color: #9B9A97;
    margin-top: 15px;
}

.blocks {
    display: flex;
    margin-top: 35px;
    margin-bottom: 50px;
    width: 2500px;
    position: relative;
    transition: left 500ms ease;

    .item {
        background: #323443;
        padding: 30px 25px;
        border-radius: 12px;
        width: 250px;

        &:not(:last-of-type) {
            margin-right: 20px;
        }

        p {
            color: #9B9A97;
        }

        i {
            float: right;
            font-feature-settings: 1.2em;
            position: relative;
            bottom: 25px;
        }
    }
}

.arrows {
    margin-bottom: 150px;
    img {
        cursor: pointer;
        transition: transform 500ms ease;
        margin-right: 30px;

        &:hover {
            transform: scale(1.1);
        }

        &.next {
            transform: rotate(180deg);

            &:hover {
                transform: scale(1.1) rotate(180deg);
            }
        }
    }
}
</style>