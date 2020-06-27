<template>

    <div id="prologe">
        <div id="background">

        </div>
        <div class="item-one mr-3 mb-1">
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
        <div class="item-two">
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
        <div class="item-three">
            <img class="float-left" src="../assets/images/workshop2.png" height="100%" width="90%" />
        </div>
        <div class="item-four mr-3 mt-3 mb-3">
            <p class="mt-20 mr-3">
                Érezted-e már valaha, hogy szeretnél NÕiesebb, légiesebb lenni, de nem tudod, hogyan érd el?
                Talán irigykedsz is azokra, akik minden nap tökéletesen néznek ki, jó a sminkjük, jó a hajuk, jó a ruhájuk, egyszóval igazi NÕk.
                Sok videot, blogot olvasol a NÕiességrõl, de mégis valahogy elmarad a várt áttörés az életedben.
            </p>
            <p class="mr-3">
                A NÕiesség kifejezése tanulható.
                PiheNÕ Programunkon megtanítunk arra ...
            </p>
        </div>
        <div class="item-five inner-shadow">
            <p class="h3 text-white black-shadow mt-20 mb-20">
                Hogyan és mely illóolajokat használd NÕiességed kifejezésére, felébresztésére és megélésére.
            </p>
        </div>
        <div class="item-six inner-shadow">
            <p class="h3 text-white black-shadow mt-20 mb-20">
                Hogyan maradj minden körülmények között NÕ.
                Átbeszéljük, hogy milyen problémákkal küzdenek a NÕk manapság a mindennapokban, és azokra megoldásokat is kínálunk theta-coaching módszerünkkel.
            </p>
        </div>
        <div class="item-seven inner-shadow">
            <p class="h3 text-white black-shadow mt-20 mb-20">
                Hogyan sminkelj a mindennapokban, hogy ne legyen sok, de kevés sem a make-up-od.
                Kinek mi áll jól, mi az, amitõl magabiztosnak érzed magad, amikor nem kell pironkodnod, ha valaki rád szegezi
                tekintetét, hanem büszkén, emelt fõvel állod a pillantást, mert tisztában vagy azzal, hogy a NÕiességed rendben van.
            </p>
        </div>
        <div class="item-eight inner-shadow">
            <p class="h3 text-white black-shadow mt-20 mb-20">
                Színvarázslattal megállapítjuk, melyik szín áll jól.
                Mely színekben pompázol, melyek, amelyek elsápasztanak.
                Átbeszéljük és rámutatunk arra, hogy mely színekbõl álljon a ruhatárad, hogy minden nap önbizalommal telve lépj ki az utcára.
            </p>
        </div>
        <div class="item-nine">
            <div class="item-nine-a">
                <p class="h2 mt-3 item-nine-a-title">
                    PiheNÕ Program Plusz
                </p>
                <p>
                    És, ha az elõzõekben leírtak nem elegendõek, akkor mindezek mellé kapsz egy szeretetérintéses arcmasszázst.
                </p>
                <div class="item-nine-a-image inner-shadow ">
                </div>
            </div>
            <div class="item-nine-b">
                <p class="h2 mt-3 item-nine-b-title">
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
        grid-auto-columns: 8fr 5fr;
        grid-auto-rows: 2fr 1fr 1fr 2fr 3fr 3fr 3fr 3fr 3fr;
    }

    .item-one {
        margin-top: 15%;
        border-radius: 5px 5px;
        padding: 10px 10px;
        background-color: rgba(255,255,255,0.6);
        grid-column: 2;
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
        grid-column: 1;
        grid-row: 4;
    }

    .item-four {
        border-radius: 5px 5px;
        padding: 10px 10px;
        background-color: rgba(255,255,255,0.6);
        grid-column: 2;
        grid-row: 4;
    }

    .item-five {
        background-size: cover;
        background-image: url("../assets/images/workshop3.png");
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 5;
    }

    .item-six {
        background-size: cover;
        background-image: url("../assets/images/workshop4.png");
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 6;
    }

    .item-seven {
        background-size: cover;
        background-image: url("../assets/images/workshop6.png");
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 7;
    }

    .item-eight {
        background-size: cover;
        background-image: url("../assets/images/workshop7.jpeg");
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 8;
    }

    .item-nine {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 9;
        grid-gap: 10px;
        width: 100%;
        background-color: white;
    }

    .item-nine-a {
        width: 100%;
        height: 100%;
        grid-template-rows: 1fr;
        grid-column: 1;
        grid-row: 1;
    }

    .item-nine-b {
        grid-template-rows: 1fr;
        grid-column: 2;
        grid-row: 1;
        width: 100%;
        height: 100%;
    }

    .item-nine-a-title {
        grid-row: 1;
    }

    .item-nine-b-title {
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
        box-shadow: 0px 0px 25px 30px rgba(0,0,0,0.7) inset;
    }

    .black-shadow {
        background-color: rgba(0,0,0,0.7);
        box-shadow: 0px 0px 25px 30px rgba(0,0,0,0.7);
    }

    #background {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        z-index: 0;
        background-size: cover;
        background-image: url("../assets/images/workshop1.png");
    }

    .mt-20 {
        margin-top: 20%;
    }

    .mb-20 {
        margin-bottom: 20%;
    }
</style>