<template>

    <div data-aos="fade" data-aos-duration="800" id="prologe">
        <div v-parallax="0.2" id="background" class="inner-shadow">

        </div>
        <div data-aos="slide-up" data-aos-duration="800" class="item-one m-5 p-4">
            <p class="m-3">
                {{ decoder(item_one_p) }}
            </p>
            <footer class="blockquote-footer mt-3">{{ decoder(item_one_f) }}<cite title="Source Title" class="ml-3">{{ decoder(item_one_c) }}</cite></footer>
            <button type="button" class="btn btn-outline-success mt-3" v-on:click="onSubmit">Jelentkezem</button>
        </div>
        <div class="item-three">
            <div data-aos="slide-up" data-aos-duration="800" class="item-two">
                <p class="h1 mt-3">
                    {{decoder(item_two_title)}}
                </p>
                <p class="h5 ml-3 mr-3">
                    {{decoder(item_two_p)}}
                </p>
            </div>
            <div data-aos="fade" class="item-three-bg inner-shadow image-border">
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="800" class="item-three-b m-5">
                <p class="h5 m-5">
                    {{decoder(item_three_b_p1)}}
                </p>
                <p class="h5 m-auto">
                    {{decoder(item_three_b_p2)}}
                </p>
            </div>
        </div>
        <div v-parallax="0.3" class="sub-items-bg">

        </div>
        <div class="sub-items">
            <div data-aos="flip-left"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                 class="item-five-a inner-shadow rounded m-3 image-border">
            </div>
            <p data-aos="fade-down"
               data-aos-easing="ease-in-sine"
               data-aos-offset="300"
               class="item-five-b p-4 h3 my-auto mx-5">
                {{decoder(item_five_b_p)}}
            </p>

            <div data-aos="flip-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                 class="item-six-a inner-shadow rounded m-3 image-border">
            </div>
            <p data-aos="fade-down"
               data-aos-easing="ease-in-sine"
               data-aos-offset="300"
               class="item-six-b p-4 h3 my-auto mx-5">
                {{decoder(item_six_b_p)}}
            </p>

            <div data-aos="flip-left"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                 class="item-seven-a inner-shadow rounded m-3 image-border">
            </div>
            <p data-aos="fade-down"
               data-aos-easing="ease-in-sine"
               data-aos-offset="300"
               class="item-seven-b p-4 h3 my-auto mx-5">
                {{decoder(item_seven_b_p)}}
            </p>

            <div data-aos="flip-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                 class="item-eight-a inner-shadow rounded m-3 image-border">
            </div>
            <p data-aos="fade-down"
               data-aos-easing="ease-in-sine"
               data-aos-offset="300"
               class="item-eight-b p-4 h3 my-auto mx-5">
                {{decoder(item_eight_b_p)}}
            </p>
        </div>
        <div data-aos="fade" data-aos-duration="800" class="sign-up-button">
            <p class="h1 m-3">
                Jelentkezz most!
            </p>
            <button type="button" class="btn btn-outline-success m-auto">Jelentkezem</button>
            <hr class="w-75" />
        </div>
        <div data-aos="fade" data-aos-duration="800" class="item-nine-title">
            <p class="h1">
                {{decoder(item_nine_title_p)}}
            </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1200" data-aos-anchor-placement="top-center" class="item-nine m-5">
            <div class="item-nine-a">
                <p class="h2 item-nine-a-title mt-3">
                    {{decoder(item_nine_a_title)}}
                </p>
                <p class="h5 item-nine-a-p">
                    {{decoder(item_nine_a_p)}}
                </p>
                <div class="item-nine-a-image inner-shadow rounded image-border">
                </div>
                <button type="button" class="btn btn-outline-success mx-auto my-3">{{ decoder(i_want_this) }}</button>
            </div>
            <div class="item-nine-b">
                <p class="h2 item-nine-b-title mt-3">
                    {{decoder(item_nine_b_title)}}

                </p>
                <p class="h5 item-nine-b-p">
                    {{decoder(item_nine_b_p)}}
                </p>
                <div class="item-nine-b-image inner-shadow rounded image-border">
                </div>
                <button type="button" class="btn btn-outline-success mx-auto my-3">{{ decoder(i_want_this) }}</button>
            </div>
        </div>
        <div data-aos="fade"
             data-aos-anchor-placement="top-bottom"
             class="item-ten inner-shadow image-border">
            <div data-aos="slide-up" data-aos-duration="800" class="item-ten-p m-5 p-4">
                <p class="m-auto h5">
                    {{decoder(item_ten_p2)}}
                </p>
                <hr class="w-75" />
                <img src="../assets/images/workshop14.png" class="w-50 h-50 m-3" />
            </div>
            <div data-aos="slide-up" data-aos-duration="800" class="item-ten-p m-5 p-4 h-50">
                <p class="m-auto h5">
                    {{decoder(item_ten_p1)}}
                </p>
                <hr class="w-75" />
                <button type="button" class="btn btn-outline-success mt-3">Jelentkezem</button>
            </div>
            <div data-aos="slide-up" data-aos-duration="800" class="item-ten-p m-5 p-4">
                <p class="m-auto h5">
                    {{decoder(item_ten_p3)}}
                </p>
                <hr class="w-75" />
                <img src="../assets/images/workshop15.png" class="w-50 h-50 m-3" />
            </div>
        </div>
    </div>
</template>

<script>
    import { workshoppers } from '../firebaseInit'

    export default {
        name: 'Workshop',
        data() {
            return {
                title: 'PiheN&#336 Program',
                see: 'Megn&#233zem',
                i_want_this: 'Ezt K&#233rem !',
                item_one_p: " Magabiztos N&#336 kell minden csal&#225dba." +
                    " Egy csal&#225d &#233rzelmi alappill&#233re egy kipihent N&#336." +
                    " Egy olyan N&#336, aki minden konfliktust kezelni tud, aki meleg otthont tud var&#225zsolni csal&#225dj&#225nak." +
                    " Aki h&#225zis&#225rk&#225ny helyett egy meg&#233rt&#337, szeret&#337 feles&#233g, anya." +
                    " Ehhez az sz&#252ks&#233ges, hogy Te mint N&#336 igenis t&#246r&#337dj magaddal," +
                    "legyen felt&#246lt&#337d&#233s az &#233letedben, legyen egy t&#225mogat&#243 k&#246zeg, ahol kibesz&#233lheted probl&#233m&#225dat, vagy &#233ppen &#246r&#246m&#246det.",
                item_one_f: 'D&#225vid Anna M&#225ria',
                item_one_c: 'Th&#233tha Coach',
                item_two_title: 'PiheN&#336 Program',
                item_two_p: 'PiheN&#336 Programunk pont err&#337l sz&#243l.' +
                    'Az&#233rt hoztuk l&#233tre Programunkat, mert &#250gy l&#225tjuk,' +
                    'hogy a N&#336k mostan&#225ban, tisztelet a kiv&#233telnek, elfelejtenek N&#336K lenni.' +
                    'Egy N&#336 nemcsak anya &#233s feles&#233g.' +
                    'Merj kil&#233pni ebb&#337l.Az anyas&#225g &#233s feles&#233g szerepek mellett' +
                    'v&#225lj &#250jra, vagy el&#337sz&#246r olyan N&#336v&#233, aki &#246nbizalommal telve &#233li mindennapjait.',
                item_three_b_p1: '&#201rezted-e m&#225r valaha, hogy szeretn&#233l N&#336iesebb, l&#233giesebb lenni, de nem tudod, hogyan &#233rd el?' +
                    'Tal&#225n irigykedsz is azokra, akik minden nap t&#246k&#233letesen n&#233znek ki, j&#243 a sminkj&#252k, j&#243 a hajuk, j&#243 a ruh&#225juk, egysz&#243val igazi N&#336k.' +
                    'Sok videot, blogot olvasol a N&#336iess&#233gr&#337l, de m&#233gis valahogy elmarad a v&#225rt &#225tt&#246r&#233s az &#233letedben.',
                item_three_b_p2: ' A N&#336iess&#233g kifejez&#233se tanulhat&#243 !' +
                    ' PiheN&#336 Programunkon megtan&#237tunk arra ...',
                item_five_b_p: 'Hogyan &#233s mely ill&#243olajokat haszn&#225ld N&#336iess&#233ged kifejez&#233s&#233re, fel&#233breszt&#233s&#233re &#233s meg&#233l&#233s&#233re.',
                item_six_b_p: 'Hogyan maradj minden k&#246r&#252lm&#233nyek k&#246z&#246tt N&#336. &#225tbesz&#233lj&#252k, hogy' +
                    ' milyen probl&#233m&#225kkal k&#252zdenek a N&#336k manaps&#225g a mindennapokban, &#233s azokra megold&#225sokat is k&#237n&#225lunk theta- coaching m&#243dszer&#252nkkel.',
                item_seven_b_p: 'Hogyan sminkelj a mindennapokban, hogy ne legyen sok, de kev&#233s sem a make-up-od.' +
                    'Kinek mi &#225ll j&#243l, mi az, amit&#337l magabiztosnak &#233rzed magad, amikor nem kell pironkodnod, ha valaki r&#225d szegezi' +
                    'tekintet&#233t, hanem b&#252szk&#233n, emelt f&#337vel &#225llod a pillant&#225st, mert tiszt&#225ban vagy azzal, hogy a N&#336iess&#233ged rendben van.',
                item_eight_b_p: 'Sz&#237nvar&#225zslattal meg&#225llap&#237tjuk, melyik sz&#237n &#225ll j&#243l.' +
                    'Mely sz&#237nekben pomp&#225zol, melyek, amelyek els&#225pasztanak.' +
                    '&#225tbesz&#233lj&#252k &#233s r&#225mutatunk arra, hogy mely sz&#237nekb&#337l &#225lljon a ruhat&#225rad, hogy minden nap &#246nbizalommal telve l&#233pj ki az utc&#225ra.',
                item_nine_title_p: 'De ha az el&#337z&#337ekben le&#237rtak nem elegend&#337ek ...',
                item_nine_a_title: 'PiheN&#336 Program Plusz',
                item_nine_a_p: 'R&#225ad&#225sk&#233nt kapsz egy szeretet&#233rint&#233ses arcmassz&#225zst.',
                item_nine_b_title: 'PiheN&#336 Program Extra Plusz',
                item_nine_b_p: 'R&#225ad&#225sk&#233nt kapsz egy arcj&#243ga &#243r&#225t is.',
                item_ten_p1: 'Gyere el a k&#233rd&#233seiddel &#233s &#250gy t&#233rj haza, mint akit kicser&#233ltek, tele v&#225laszokkal. ' +
                    'Mert, magabiztos N&#336, anya, feles&#233g kell minden csal&#225dba.T&#337led fog m&#369k&#246dni minden rendben otthon.T&#246lt&#337dj fel n&#225lunk!',
                item_ten_p2: 'K&#246vetkez&#337 Programunk id&#337pontja:' +
                    '2020. J&#250lius 11. szombat. 10-16 &#243r&#225ig' +
                    'Helysz&#237n: AnaGa Sz&#237n &#233s L&#233lek St&#250di&#243 Veresegyh&#225z, H&#233tvez&#233r u. 2/b.' +
                    '&#225r: 15.000 Ft/ f&#337. Hozz magaddal m&#233g egy N&#336T &#233s kedvezm&#233nyt kaptok mind a ketten.',
                item_ten_p3: 'Garanci&#225t v&#225llalunk az &#225ltalunk adott programra. Amennyiben a nap v&#233g&#233re ' +
                    '&#250gy &#233rzed, hogy nem kapt&#225l elegend&#337 v&#225laszt, elegend&#337 felt&#246lt&#337d&#233st r&#233sz&#252nkr&#337l &#233s ezt,' +
                    'mint &#233p&#237t&#337 kritik&#225t elmondod nek&#252nk, meghallgatunk, megfogadjuk a tapasztal&#225said &#233s visszafizetj&#252k ennek a programnak az &#225r&#225t. '
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
            },
            onSubmit: function () {
                workshoppers.push({ Email: "vekker15@gmail.com", Paid: false });
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

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
    }

    .sign-up-button {
        z-index: 55;
        border-radius: 5px 5px;
        padding: 10px 10px;
        background-color: rgba(255,255,255,0.7);
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 6;
    }

    #prologe {
        z-index: 1;
        display: grid;
        width: 100%;
        height: 100%;
        grid-template-columns: 5fr 8fr;
        grid-template-rows: 2fr 1fr 1fr 2fr 3fr 1fr 1fr 3fr 2fr 2fr 2fr 2fr;
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
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 5;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-column-gap: 10px;
    }

    .sub-items-bg {
        z-index: 0;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 5;
        grid-row-end: 9;
        background-size: cover;
        background-image: url("../assets/images/workshop18.jpg");
    }

    .item-one {
        border-radius: 5px 5px;
        background-color: rgba(255,255,255,0.6);
        grid-column: 1;
        grid-row: 1;
        z-index: 55;
    }

    .item-two {
        z-index: 56;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 1;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        padding: 10px 10px;
        background-color: rgba(255,255,255,0.7);
    }

    .item-three {
        z-index: 55;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 3fr;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-column-gap: 15px;
        grid-row: 4;
        background-color: white;
    }

    .item-three-bg {
        z-index: 55;
        background-size: cover;
        background-image: url("../assets/images/workshop17.jpg");
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .item-three-a {
        z-index: 55;
        grid-column: 1;
        grid-row: 1;
    }

    .item-three-b {
        z-index: 55;
        border-radius: 5px 5px;
        padding: 10px 10px;
        background-color: rgba(255,255,255,0.7);
        grid-column: 2;
        grid-row-start: 2;
        grid-row-end: 3;
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

    .image-border {
        border: 5px solid rgba(255,255,255,1);
    }

    .item-five-b {
        grid-column: 2;
        grid-row: 1;
        border-radius: 5px 5px;
        background-color: rgba(255,255,255,0.7);
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
        border-radius: 5px 5px;
        background-color: rgba(255,255,255,0.7);
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
        border-radius: 5px 5px;
        background-color: rgba(255,255,255,0.7);
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
        border-radius: 5px 5px;
        background-color: rgba(255,255,255,0.7);
    }

    .item-nine-title {
        z-index: 55;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 7;
        border-radius: 5px 5px;
        padding: 10px 10px;
        background-color: rgba(255,255,255,0.7);
    }

    .item-nine {
        z-index: 55;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 8;
        grid-gap: 10px;
    }

    .item-nine-bg {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row: 8;
        background-size: cover;
        background-image: url("../assets/images/workshop19.jpg");
    }

    .item-nine-a {
        z-index: 55;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 6fr 1fr;
        grid-column: 1;
        grid-row: 1;
        border-radius: 5px 5px;
        background-color: rgba(255,255,255,0.7);
    }

    .item-nine-b {
        z-index: 55;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 6fr 1fr;
        grid-column: 2;
        grid-row: 1;
        border-radius: 5px 5px;
        background-color: rgba(255,255,255,0.7);
    }

    .item-nine-a-title {
        z-index: 55;
        grid-row: 1;
        grid-column: 1;
    }

    .item-nine-b-title {
        z-index: 55;
        grid-column: 1;
        grid-row: 1;
    }

    .item-nine-a-p {
        grid-column: 1;
        grid-row: 2;
    }

    .item-nine-b-p {
        grid-column: 1;
        grid-row: 2;
    }

    .item-nine-a-image {
        background-size: cover;
        background-image: url("../assets/images/workshop9.jpeg");
        grid-column: 1;
        grid-row: 3;
        z-index: 55;
    }

    .item-nine-b-image {
        background-size: cover;
        background-image: url("../assets/images/workshop10.jpeg");
        grid-column: 1;
        grid-row: 3;
        z-index: 55;
    }

    .item-ten {
        z-index: 0;
        height: fit-content;
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 9;
        grid-row-end: 13;
        background-size: cover;
        background-image: url("../assets/images/workshop13.jpg");
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }

    .item-ten-p {
        border-radius: 5px 5px;
        background-color: rgba(255,255,255,0.7);
        grid-row: 2;
    }

    .inner-shadow {
        box-shadow: 0px 0px 25px 20px rgba(0,0,0,0.7) inset;
    }

    .black-shadow {
        box-shadow: 0px 0px 25px 30px rgba(0,0,0,0.9);
    }

    #background {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
        z-index: 1;
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