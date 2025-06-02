<template>
    <div class="head">
        <div class="lead">
            <div>
                <h1>Cardio<br>Exercise</h1>
                <p>Великий вибір матеріалів про здоров’я та фітнес, корисні рецепти й історії перетворення, які допоможуть вам привести себе у форму та залишатися у формі!</p>
                <div class="lead__buttons">
                    <button>Приєднуйтесь</button>
                    <img src="img/Section_2.png" alt="Workout">
                </div>
            </div>
            <div>
                <img src="img/lead-photo-2.png" alt="Workout">
                <div class="lead__info">
                    <div class="lead__info__km">
                        <i class="fa-solid fa-person-running"></i>
                        <span>5.05</span>km
                    </div>    
                    <div class="lead__info__training">
                        <i class="fa-solid fa-circle-play"></i>
                        <span>350+</span>
                        Тренуваннь
                    </div>
                    <div class="lead__info__videos">
                        <span>500+</span>
                    Безкоштовних відео
                    </div>    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.head {
    margin-top: 70px;

    @media(min-width: 1024px) {
    overflow: hidden;
    height: 800px;
    }

}

.lead {
    margin-top: 20px;
    display: flex;
    position: relative;

    h1 {
        word-spacing: -2px;

        @media(min-width: 1500px) {
            font-size: 12em;
            line-height: 170px;
        }
        @media(max-width: 1500px) and (min-width: 1300px) {
            font-size: 11em;
            line-height: 160px;
        }
        @media(max-width: 1300px) and (min-width: 650px) {
            font-size: 8.5em;
            line-height: 150px;
        }
        @media(max-width: 650px) and (min-width: 450px) {
            font-size: 5.5em;
            line-height: 110px;
        }
        @media(max-width: 450px) {
            font-size: 4em;
            line-height: 90px;
        }
    }

    p {
        color: #868686;
        margin: 20px 0;

        @media(min-width: 650px) {
            width: 600px;
        }
    }

    button {
        background: #E6533C;
        padding: 20px;
        font-weight: 600;
        font-size: 1.02em;
        color: #FFFFFF;
        border: 0;
        cursor: pointer;
        border-radius: 10px;
        margin-top: 30px;
        transition: transform 0.5s ease;

        &:hover {transform: translateY(-7px);}
    }

    > div:first-of-type img {
        display: block;
        max-width: 100%;
        margin-top: 70px;
    }

    > div:last-of-type {
        @media(max-width: 1024px) {
            display: none;
        }

        img {
            position: relative;

            @media(min-width: 1500px) {
                bottom: -80px;
                right: 80px;
            }

            @media(max-width: 1500px) and (min-width: 1300px) {
                transform: scale(0.8);
                bottom: -40px;
                right: 120px;
            }

            @media(max-width: 1300px) and (max-width: 1300px) {
                transform: scale(0.7);
                bottom: 20px;
                right: 135px;
            }
        }

        .lead__info {
            position: absolute;
            top: 0;
            right: 0;

            @mixin info-block {
                border-radius: 20px;
                padding: 20px 30px;
                width: 110px;
                font-size: 0.7em;
                margin-bottom: 25px;
                position: relative;

                span {
                    font-weight: 600;
                    color: #FFFFFF
                }

                i {
                    padding: 10px;
                    border-radius: 50%;
                    color: #FFFFFF;
                    font-size: 1.3em;
                    text-align: center;
                    width: 14px;
                    height: 14px;
                    line-height: 14px
                }
            }

            .lead__info__km {
                @include info-block;
                    background: #EF8964;
                    color: #EFCABA;
                    right: 80px;
                    top: 40px;

                    @media(max-width: 1100px) {
                        right: 10px;
                    }

                span {
                    font-size: 2.7em;
                    margin-right: 4px;
                }

                i {
                    display: block;
                    background: #EFA082;
                }
            }
            .lead__info__training {
                @include info-block;
                    background: #303030;
                    color: #ACABAB;
                    top: 300px;

                @media(min-width: 1450px) {
                    right: 480px;
                }

                @media(max-width: 1450px) and (min-width: 1100px) {
                    right: 350px;
                }

                @media(max-width: 1100px) {
                    right: 250px;
                }

                span {
                    font-size: 1.7em;
                }

                i {
                    background: #EF8963;
                    float: left;
                    position: relative;
                    top: 8px;
                    margin-right: 7px;
                }
            }
            .lead__info__videos {
                @include info-block;
                    background: #7A29DC;
                    color: #C6A8E4;
                    right: 70px;
                    top: 300px;

                span {
                    font-size: 2.5em;
                }

            }
        }
    }
}

</style>