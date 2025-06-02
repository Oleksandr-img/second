<template>
    <div>   
        <div class="Blocks">
            <div>
                <h2>Тренуйтеся вдома</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                <span><a href="">Більше</a> <i class="fa-solid fa-arrow-right"></i></span>
            </div>
            <div>
                <img src="/img/pic2.png" alt="joga">
            </div>
        </div>
        <div class="Blocks">
            <div>
                <img src="/img/pic1.png" alt="rope">
            </div>
            <div>
                <h2>Получите еще<br>больше полезного<br>контента</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                <span><a href="">Більше</a> <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {}

</script>

<style lang="scss">

.Blocks {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 80px;

    @media(max-width: 1100px) {
        flex-direction: column;
    }

    > div {
        @media(min-width: 900px) {
            width: 50%;
        }

        h2 {
            margin-bottom: 30px;
            font-size: 2.2em;
        }

        p {
            color: #9B9A97;
            margin-bottom: 20px;

            @media(min-width: 500px) {
                width: 450px;
            }
        }

        span {
            a {
                color: #0070C9;
            }

            i {
                margin-left: 15px;
                font-size: 1.2em;
            }
        }

        img {
            max-width: 90%;

            @media(max-width: 1100px) {
                &:first-of-type {
                    margin-top: 30px;
                }
            }
        }
    }
}
</style>