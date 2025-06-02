<template>
    <div>
        <h3>Таріфи</h3>
        <div class="tarrifs">
            <div>
                <h4>Безкоштовно</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Quis nostrud exercitation ullamco</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Excepteur sint occaecat excepteur sint occaecat</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                </ul>
                <span><a href="">Більше</a> <i class="fa-solid fa-arrow-right"></i></span>                
            </div>
            <div>
                <h4>Платно</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Quis nostrud exercitation ullamco</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Excepteur sint occaecat excepteur sint occaecat</li>
                    <li>Sed ut perspiciatis unde omnis</li>
                </ul>
                <button>Приєднатися</button>                
            </div>
        </div>
    </div>
</template>

<script>
export default {}

</script>

<style lang="scss">

h3 {
    margin: 70px 0;
    font-size: 3em;
    font-weight: 400;
}

.tarrifs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 150px;

    > div {

        background: #232532;
        color: #A8A7A8;
        padding: 50px 5%;

        @media(min-width: 1100px) {width: 30%;}
        @media(max-width: 1100px) and (min-width: 750px) {width: 39%;}
        @media(max-width: 750px) {margin-bottom: 50px;}

        &:last-of-type {
            background: #323443;
            color: #ADACAE;
        }

        h4 {
            color: #FFFFFF;
            text-align: center;
            font-size: 2em;
            margin-bottom: 30px;
        }

        ul {
            margin: 20px 30px;
        }

        span {
            a {
                color: #0070C9;
            }

            i {
                margin-left: 7px;
                font-size: 1.2em;
            }
        }

        button {
            background: #0070C9;
            border: 0;
            border-radius: 10px;
            color: #FFFFFF;
            cursor: pointer;
            padding: 5px 7px;

            &:hover {
                background: #004883;
            }
        }
    }
}
</style>