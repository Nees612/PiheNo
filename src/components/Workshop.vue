<template>

    <div data-aos="fade" data-aos-duration="800" id="prologe">
        <div v-parallax="0.2" id="background">

        </div>
        <div data-aos="slide-up" data-aos-duration="800" class="item-one m-5 p-4">
            <p class="mb-1 mt-5">
                Magabiztos NÕ kell minden családba.
                Egy család érzelmi alappillére egy kipihent NÕ.
                Egy olyan NÕ, aki minden konfliktust kezelni tud, aki meleg otthont tud varázsolni családjának.
                Aki házisárkány helyett egy megértõ, szeretõ feleség, anya.
                Ehhez az szükséges, hogy Te mint NÕ igenis törõdj magaddal, legyen feltöltõdés az életedben, legyen egy támogató közeg, ahol kibeszélheted problémádat, vagy éppen örömödet.
            </p>
            <footer class="blockquote-footer mt-3">Dávid Anna Mária <cite title="Source Title">Thétha Coach</cite></footer>
            <button type="button" class="btn btn-outline-success mt-5">Jelentkezem</button>
        </div>
        <div data-aos="slide-up" data-aos-duration="800" class="item-two">
            <p class="h1 mt-3">
                PiheNÕ Program
            </p>
            <p class="ml-3 mr-3">
                PiheNÕ Programunk pont errõl szól.
                Azért hoztuk létre Programunkat, mert úgy látjuk, hogy a NÕk mostanában, tisztelet a kivételnek, elfelejtenek NÕK lenni.
                Egy NÕ nemcsak anya és feleség.
                Merj kilépni ebbõl. Az anyaság és feleség szerepek mellett válj újra, vagy elõször olyan NÕvé, aki önbizalommal telve éli mindennapjait.
            </p>
        </div>
        <div class="item-three" data-aos="zoom-in">
            <div data-aos="zoom-in-right" data-aos-duration="800" class="item-three-a">
                <img class="m-4 w-100 rounded" src="../assets/images/workshop2.png" />
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="800" class="item-three-b m-4">
                <p class="m-5">
                    Érezted-e már valaha, hogy szeretnél NÕiesebb, légiesebb lenni, de nem tudod, hogyan érd el?
                    Talán irigykedsz is azokra, akik minden nap tökéletesen néznek ki, jó a sminkjük, jó a hajuk, jó a ruhájuk, egyszóval igazi NÕk.
                    Sok videot, blogot olvasol a NÕiességrõl, de mégis valahogy elmarad a várt áttörés az életedben.
                </p>
                <p class="m-2">
                    A NÕiesség kifejezése tanulható.
                    PiheNÕ Programunkon megtanítunk arra ...
                </p>
            </div>
        </div>
        <div class="sub-items m-5">
            <div data-aos="flip-right"
                 data-aos-duration="800" class="item-five-a inner-shadow rounded m-3">
            </div>
            <p v-parallax="0.1" data-aos="fade-up-left"
               data-aos-duration="800" class="item-five-b p-3 h4 m-auto">
                Hogyan és mely illóolajokat használd NÕiességed kifejezésére, felébresztésére és megélésére.
            </p>

            <div data-aos="flip-left"
                 data-aos-duration="800" class="item-six-a inner-shadow rounded m-3">
            </div>
            <p v-parallax="0.1" data-aos="fade-up-right"
               data-aos-duration="800" class="item-six-b p-3 h4 m-auto">
                Hogyan maradj minden körülmények között NÕ.
                Átbeszéljük, hogy milyen problémákkal küzdenek a NÕk manapság a mindennapokban, és azokra megoldásokat is kínálunk theta-coaching módszerünkkel.
            </p>

            <div data-aos="flip-right"
                 data-aos-duration="800" class="item-seven-a inner-shadow rounded m-3">
            </div>
            <p v-parallax="0.1" data-aos="fade-up-left"
               data-aos-duration="800" class="item-seven-b p-3 h4 m-auto">
                Hogyan maradj minden körülmények között NÕ.
                Hogyan sminkelj a mindennapokban, hogy ne legyen sok, de kevés sem a make-up-od.
                Kinek mi áll jól, mi az, amitõl magabiztosnak érzed magad, amikor nem kell pironkodnod, ha valaki rád szegezi
                tekintetét, hanem büszkén, emelt fõvel állod a pillantást, mert tisztában vagy azzal, hogy a NÕiességed rendben van.
            </p>

            <div data-aos="flip-right"
                 data-aos-duration="800" class="item-eight-a inner-shadow rounded m-3">
            </div>
            <p v-parallax="0.1" data-aos="fade-up-left"
               data-aos-duration="800" class="item-eight-b p-3 h4 m-auto">
                Színvarázslattal megállapítjuk, melyik szín áll jól.
                Mely színekben pompázol, melyek, amelyek elsápasztanak.
                Átbeszéljük és rámutatunk arra, hogy mely színekbõl álljon a ruhatárad, hogy minden nap önbizalommal telve lépj ki az utcára.
            </p>
        </div>
        <div data-aos="zoom-in" class="item-nine">
            <div class="item-nine-a">
                <p class="h2 item-nine-a-title">
                    PiheNÕ Program Plusz
                </p>
                <p>
                    És, ha az elõzõekben leírtak nem elegendõek, akkor mindezek mellé kapsz egy szeretetérintéses arcmasszázst.
                </p>
                <div class="item-nine-a-image inner-shadow ">
                </div>
            </div>
            <div class="item-nine-b">
                <p class="h2 item-nine-b-title">
                    PiheNÕ Program
                    Extra Plusz
                </p>
                <p>
                    Ráadásként kapsz egy arcjóga órát is, amit utána otthon is alkalmazhatsz magadon.
                </p>
                <div class="item-nine-b-image inner-shadow ">
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'Workshop',
        data() {
            return {
                title: 'PiheN&#337 Program',
                see: 'Megn&#233zem'
            }
        },
        components: {

        },
        methods: {
            decoder(str) {
                var textArea = document.createElement('textarea');
                textArea.innerHTML = str;
                return textArea.value;
            },
            getPic() {
                return require('../assets/images/' + this.image + '.png')
            }
        }
    }
</script>

<style scoped>
    .see-button {
        padding: 25px 25px;
        background-color: transparent;
        border: 1px solid green;
    }

    #prologe {
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 5fr 7fr;
        grid-template-rows: 2fr 1fr 1fr 2fr 2fr 4fr 3fr;
    }

    #second-background {
        z-index: 1;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 1;
        width: 100%;
        background-size: cover;
        background-image: url("../assets/images/workshop12.jpg");
    }

    .sub-items {
        z-index: 55;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 5;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }

    .item-one {
        border-radius: 5px 5px;
        background-color: rgba(255,255,255,0.6);
        grid-column: 1;
        grid-row: 1;
        z-index: 1;
    }

    .item-two {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 3;
        width: 100%;
        background-color: white;
    }

    .item-three {
        z-index: 55;
        background-size: auto;
        background-image: url("../assets/images/background.png");
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-gap: 15px;
        grid-row: 4;
    }

    .item-three-a {
        grid-column: 1;
        grid-row: 1;
    }

    .item-three-b {
        border-radius: 5px 5px;
        padding: 10px 10px;
        background-color: rgba(255,255,255,0.6);
        grid-column: 2;
        grid-row: 1;
    }

    .item-four {
        border-radius: 5px 5px;
        padding: 10px 10px;
        background-color: rgba(255,255,255,0.6);
        grid-column: 2;
        grid-row: 4;
    }

    .item-five-a {
        grid-column: 1;
        grid-row: 1;
        background-size: cover;
        background-image: url("../assets/images/workshop3.png")
    }

    .item-five-b {
        grid-column: 2;
        grid-row: 1;
    }

    .item-six-a {
        grid-column: 2;
        grid-row: 2;
        background-size: cover;
        background-image: url("../assets/images/workshop4.png")
    }

    .item-six-b {
        grid-column: 1;
        grid-row: 2;
    }

    .item-seven-a {
        grid-column: 1;
        grid-row: 3;
        background-size: cover;
        background-image: url("../assets/images/workshop6.png")
    }

    .item-seven-b {
        grid-column: 2;
        grid-row: 3;
    }

    .item-eight-a {
        grid-column: 2;
        grid-row: 4;
        background-size: cover;
        background-image: url("../assets/images/workshop7.jpeg")
    }

    .item-eight-b {
        grid-column: 1;
        grid-row: 4;
    }

    .item-nine {
        z-index: 55;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 6;
        grid-gap: 10px;
        width: 100%;
    }

    .item-nine-a {
        z-index: 55;
        grid-template-rows: 1fr;
        grid-column: 1;
        grid-row: 1;
        background-color: white;
    }

    .item-nine-b {
        z-index: 55;
        grid-template-rows: 1fr;
        grid-column: 2;
        grid-row: 1;
        background-color: white;
    }

    .item-nine-a-title {
        z-index: 55;
        grid-row: 1;
        background-color: white;
    }

    .item-nine-b-title {
        background-color: white;
        z-index: 55;
        grid-row: 1;
    }

    .item-nine-a-image {
        background-size: cover;
        background-image: url("../assets/images/workshop9.jpeg");
        grid-row: 2;
        height: 100%;
    }

    .item-nine-b-image {
        background-size: cover;
        background-image: url("../assets/images/workshop10.jpeg");
        grid-row: 2;
        height: 100%;
    }

    .inner-shadow {
        box-shadow: 0px 0px 25px 20px rgba(0,0,0,0.7) inset;
    }

    .black-shadow {
        background-color: rgba(0,0,0,0.9);
        box-shadow: 0px 0px 25px 30px rgba(0,0,0,0.9);
    }

    #background {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        z-index: 0;
        width: auto;
        height: 100%;
        background-size: cover;
        background-image: url("../assets/images/workshop1.jpg");
    }

    .mt-20 {
        margin-top: 20%;
    }

    .mb-20 {
        margin-bottom: 20%;
    }

    .w-95 {
        width: 95%;
    }

    .image-title {
        text-align: center;
        vertical-align: middle;
        display: table-cell;
    }
</style>