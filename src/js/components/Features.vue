<template>
    <div>
        <div class="features">
            <div class="features__heading">
                <img src="/img/yellow-line.svg" alt="workout">
                <h3>Тренування Спеціально Для тебе</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>
            <button>Почати</button>
        </div>
        <div class="pictures">
            <div>
                <img src="/img/trainer-1.png" alt="trainer-1">
                <h4>Еліза Грін</h4>
                <p>Фітнес - тренер</p>
            </div>
            <div class="middle">
                <img src="/img/trainer-2.png" alt="trainer-2">
                <h4>Майкл Паркер</h4>
                <p>Силовий тренер</p>
            </div>
            <div class="big">
                <img src="/img/trainer-3.png" alt="trainer-3">
                <h4>Саманта Реймонд</h4>
                <p>Тренер з йоги</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};

</script>

<style lang="scss" scoped>

.features {
    width: 1500px;
    background: #191919;
    position: relative;


    @media(min-width: 1380px) {
        margin-left: 391px;
    }

    @media(max-width: 1380px) and (min-width: 1100px) {
        margin-left: 191px;
    }

    @media(min-width: 1100px) {
        padding: 120px 5% 270px 15%;
    }

    @media(max-width:1100px) {
        padding: 50px;
    }

    p {
        color: #ABABAB;
        line-height: 170%;

        @media(min-width: 1100px) {
        margin-left: 200px;
        }

        @media(min-width: 560px) {
            font-size: 1.3em;
            width: 500px;
        }

        @media(max-width: 560px) {
            font-size: 1.05em;
            width: 250px;
        }
    }

    button {

        background: #25AB75;
        padding: 20px;
        width: 160px;
        font-weight: 600;
        font-size: 1.02em;
        color: #FFFFFF;
        border: 0;
        cursor: pointer;
        border-radius: 10px;
        margin-top: 30px;
        transition: transform 0.5s ease;

        &:hover {transform: translateY(-7px);}

        @media(min-width: 1100px) {
            margin-left: 200px;
        };

    }


    .features__heading {

        @media(min-width: 1100px) {
        position: absolute;
        top: 0;
        left: -230px;
        }

        h3 {

            @media(min-width: 1100px) {
                position: relative;
                top: -100px;
            }

            @media(min-width: 560px) {
                font-size: 4.5em;
                width: 500px;
            }

            @media(max-width: 560px) {
                font-size: 2.3em;
                width: 280px;
            }
        }

        img {

            @media(min-width: 1100px) {            
                position: relative;
                top: 330px;
            }
        }
    }
}

.pictures {
    margin-bottom: 100px;
    display: flex;

    @media(min-width: 1380px) {
        padding-left: 70px;
    }

    @media(max-width: 1380px) and (min-width: 1100px) {
        position: relative;
        left: -127px;
    }

    @media(max-width: 1100px) {
        flex-wrap: wrap;
        justify-content: space-between;
    }

    > div {

        @media(min-width: 1100px) {
            position: relative;
        }

        @media(max-width: 1100px) {
            margin-top: 100px;
        }

        &.middle {
            top: 321px;
        }

        &.big {
            top: -193px;

            h4, p {

            @media(min-width: 500px) {
                margin-left: 20px;
            }

            @media(max-width: 500px) {
                width: 300px;
                margin-left: 0;
            }

            }
        }

        h4 {
            font-weight: 400;
            margin-top: 5px;
        }

        p {
            color: #ABABAB;
            font-size: 0.9em;
        }
        img {

            @media(max-width: 500px) {
                width: 300px;
            }
        }
        
    }
}
</style>