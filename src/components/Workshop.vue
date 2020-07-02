<template>
  <div data-aos="fade" data-aos-duration="800" id="prologe">
    <div v-if="showSignUpModal" class="my-modal">
      <div class="card w-50 my-5 mx-auto sign-up-form">
        <form>
          <div class="form-group">
            <div class="w-100 d-inline-block">
              <span v-on:click="closeSignUp" class="float-right mr-3 mt-3 x-button">&#10005;</span>
            </div>
            <p class="card-title h3 mx-auto my-3 d-inline-block">Kérlek írd be az e-mail címed !</p>
            <input
              type="email"
              class="form-control w-75 mx-auto text-center"
              aria-describedby="emailHelp"
              v-model="newEmail"
              placeholder="E-mail"
            />
            <small
              id="emailHelp"
              v-if="!validEmailFormat"
              class="form-text text-danger"
            >A megadott e-mail cím nem valós !</small>
            <small
              id="emailHelp"
              v-if="!validEmail"
              class="form-text text-danger"
            >Ez az e-mail cím már szerepel a jelentkezők között !</small>
            <small
              id="emailHelp"
              class="form-text text-muted"
            >Az adatait bizalmasan kezeljük, e-mail címét nem adjuk ki senkinek !</small>
          </div>
          <button type="submit" class="btn btn-primary mx-auto mb-3" v-on:click="onSubmit">Elküldés</button>
        </form>
      </div>
    </div>
    <div v-parallax="0.2" id="background" class="inner-shadow"></div>
    <div data-aos="slide-up" data-aos-duration="800" class="item-one m-5 p-4">
      <p class="m-3 text-justify">
        Magabiztos NŐ kell minden családba.
        Egy család érzelmi alappillére egy kipihent NŐ.
        Egy olyan NŐ, aki minden konfliktust kezelni tud, aki meleg otthont tud varázsolni családjának.
        Aki házisárkány helyett egy megértő, szerető feleség, anya.
        Ehhez az szükséges, hogy Te mint NŐ igenis törődj magaddal, legyen feltöltődés az életedben, legyen egy támogató közeg, ahol kibeszélheted problémádat, vagy éppen örömödet.
      </p>
      <footer class="blockquote-footer mt-3">
        Dávid Anna Mária
        <cite title="Source Title" class="ml-3">Thétha Coach</cite>
      </footer>
      <button type="button" class="btn btn-outline-success mt-3" v-on:click="openSignUp">Jelentkezem</button>
    </div>
    <div class="item-three">
      <div data-aos="slide-up" data-aos-duration="800" class="item-two">
        <h1 class="mt-3">PiheNő Program</h1>
        <p class="h5 ml-3 mr-3 text-justify">
          PiheNŐ Programunk pont erről szól.
          Azért hoztuk létre Programunkat, mert úgy látjuk, hogy a NŐk mostanában, tisztelet a kivételnek, elfelejtenek NŐK lenni.
          Egy NŐ nemcsak anya és feleség.
          Merj kilépni ebből. Az anyaság és feleség szerepek mellett válj újra, vagy először olyan NŐvé, aki önbizalommal telve éli mindennapjait.
        </p>
      </div>
      <div data-aos="fade" class="item-three-bg inner-shadow image-border"></div>
      <div data-aos="zoom-in-left" data-aos-duration="800" class="item-three-b m-5">
        <p class="m-5 text-justify">
          Érezted-e már valaha, hogy szeretnél NŐiesebb, légiesebb lenni, de nem tudod, hogyan érd el?
          Talán irigykedsz is azokra, akik minden nap tökéletesen néznek ki, jó a sminkjük, jó a hajuk, jó a ruhájuk, egyszóval igazi NŐk.
          Sok videot, blogot olvasol a NŐiességről, de mégis valahogy elmarad a várt áttörés az életedben.
        </p>
        <p class="m-5 text-justify">
          A NŐiesség kifejezése tanulható.
          PiheNŐ Programunkon megtanítunk arra ...
        </p>
      </div>
    </div>
    <div v-parallax="0.3" class="sub-items-bg"></div>
    <div class="sub-items">
      <div
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="item-five-a inner-shadow rounded m-3 image-border"
      ></div>
      <h3
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        class="item-five-b p-4 h3 my-auto mx-5 text-justify"
      >Hogyan és mely illóolajokat használd NŐiességed kifejezésére, felébresztésére és megélésére.</h3>

      <div
        data-aos="flip-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="item-six-a inner-shadow rounded m-3 image-border"
      ></div>
      <h3
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        class="item-six-b p-4 my-auto mx-5 text-justify"
      >
        Hogyan maradj minden körülmények között NŐ.
        Átbeszéljük, hogy milyen problémákkal küzdenek a NŐk manapság a mindennapokban, és azokra megoldásokat is kínálunk theta-coaching módszerünkkel.
      </h3>

      <div
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="item-seven-a inner-shadow rounded m-3 image-border"
      ></div>
      <h3
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        class="item-seven-b p-4 my-auto mx-5 text-justify"
      >
        Hogyan sminkelj a mindennapokban, hogy ne legyen sok, de kevés sem a make-up-od.
        Kinek mi áll jól, mi az, amitől magabiztosnak érzed magad, amikor nem kell pironkodnod, ha valaki rád szegezi
        tekintetét, hanem büszkén, emelt fővel állod a pillantást, mert tisztában vagy azzal, hogy a NŐiességed rendben van.
      </h3>

      <div
        data-aos="flip-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="item-eight-a inner-shadow rounded m-3 image-border"
      ></div>
      <h3
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        class="item-eight-b p-4 my-auto mx-5 text-justify"
      >
        Színvarázslattal megállapítjuk, melyik szín áll jól.
        Mely színekben pompázol, melyek, amelyek elsápasztanak.
        Átbeszéljük és rámutatunk arra, hogy mely színekből álljon a ruhatárad, hogy minden nap önbizalommal telve lépj ki az utcára.
      </h3>
    </div>
    <div data-aos="fade" data-aos-duration="800" class="sign-up-button">
      <h1 class="m-3">Jelentkezz most!</h1>
      <button
        type="button"
        class="btn btn-outline-success m-auto"
        v-on:click="openSignUp"
      >Jelentkezem</button>
      <hr class="w-75" />
    </div>
    <div data-aos="fade" data-aos-duration="800" class="item-nine-title">
      <h1>És, ha az előzőekben leírtak nem elegendőek, akkor mindezek mellé ...</h1>
    </div>
    <div
      data-aos="zoom-in"
      data-aos-duration="1200"
      data-aos-anchor-placement="top-center"
      class="item-nine m-5"
    >
      <div class="item-nine-a">
        <h2 class="item-nine-a-title mt-3">PiheNő Program Plusz</h2>
        <p class="h5 item-nine-a-p">Ráadásként kapsz egy szeretetérintéses arcmasszázst.</p>
        <div class="item-nine-a-image inner-shadow rounded image-border"></div>
        <button type="button" class="btn btn-outline-success mx-auto my-3">Ezt Kérem !</button>
      </div>
      <div class="item-nine-b">
        <h2 class="item-nine-b-title mt-3">PiheNő Program Exra Plusz</h2>
        <p class="h5 item-nine-b-p">Ráadásként kapsz egy arcjóga órát.</p>
        <div class="item-nine-b-image inner-shadow rounded image-border"></div>
        <button type="button" class="btn btn-outline-success mx-auto my-3">Ezt Kérem !</button>
      </div>
    </div>
    <div
      data-aos="fade"
      data-aos-anchor-placement="top-bottom"
      class="item-ten inner-shadow image-border"
    >
      <div data-aos="slide-up" data-aos-duration="800" class="item-ten-p m-5 p-4">
        <p class="m-auto h5 text-justify">
          Következő Programunk időpontja: 2020. Július 11. szombat. 10-16 óráig Helyszín: AnaGa Szín és Lélek Stúdió Veresegyház, Hétvezér u. 2/b.
          Ár: 15.000 Ft/fő. Hozz magaddal még egy NŐT és kedvezményt kaptok mind a ketten.
        </p>
        <hr class="w-75" />
        <img src="../assets/images/workshop14.png" class="w-50 h-50 m-3" />
      </div>
      <div data-aos="slide-up" data-aos-duration="800" class="item-ten-p m-5 p-4 h-50">
        <p class="m-auto h5 text-justify">
          Gyere el a kérdéseiddel és úgy térj haza, mint akit kicseréltek, tele válaszokkal.
          Mert, magabiztos NŐ, anya, feleség kell minden családba. Tőled fog működni minden rendben otthon. Töltődj fel nálunk!
        </p>
        <hr class="w-75" />
        <button
          type="button"
          class="btn btn-outline-success mt-3"
          v-on:click="openSignUp"
        >Jelentkezem</button>
      </div>
      <div data-aos="slide-up" data-aos-duration="800" class="item-ten-p m-5 p-4">
        <p class="m-auto h5 text-justify">
          Garanciát vállalunk az általunk adott programra. Amennyiben a nap végére úgy érzed, hogy nem kaptál elegendő választ,
          elegendő feltöltődést részünkről és ezt, mint építő kritikát elmondod nekünk, meghallgatunk, megfogadjuk a tapasztalásaid
          és visszafizetjük ennek a programnak az árát.
        </p>
        <hr class="w-75" />
        <img src="../assets/images/workshop15.png" class="w-50 h-50 m-3" />
      </div>
    </div>
  </div>
</template>

<script>
import { workshoppers } from "../firebaseInit";

export default {
  name: "Workshop",
  data() {
    return {
      newEmail: null,
      showSignUpModal: false,
      validEmail: true,
      validEmailFormat: true
    };
  },
  components: {},
  created() {
    this.$eventBus.$on("open-signUp", () => {
      this.showSignUpModal = true;
    });
  },
  methods: {
    getPic() {
      return require("../assets/images/" + this.image + ".png");
    },
    openSignUp: function() {
      this.showSignUpModal = true;
    },
    closeSignUp: function() {
      this.newEmail = null;
      this.validEmail = true;
      this.validEmailFormat = true;
      this.showSignUpModal = false;
    },
    onSubmit: function() {
      let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      this.validEmailFormat = reg.test(this.newEmail);
      this.validEmail = true;
      if (this.validEmailFormat) {
        workshoppers.on("value", snapshot => {
          snapshot.forEach(childSnapshot => {
            if (childSnapshot.val().Email == this.newEmail) {
              this.validEmail = false;
              return;
            }
          });
          if (this.validEmail) {
            workshoppers.push({ Email: this.newEmail, Paid: false });
            this.showSignUpModal = false;
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.see-button {
  padding: 25px 25px;
  background-color: transparent;
  border: 1px solid green;
}

p {
  font-size: 22px;
  line-height: 32px;
  margin: 0 0 24px;
}

.x-button {
  cursor: pointer;
}

.my-modal {
  z-index: 70;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 13;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

.sign-up-form {
  position: sticky;
  top: 20%;
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
  background-color: rgba(255, 255, 255, 0.7);
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
  background-color: rgba(255, 255, 255, 0.6);
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
  background-color: rgba(255, 255, 255, 0.7);
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
  background-color: rgba(255, 255, 255, 0.7);
  grid-column: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.item-four {
  border-radius: 5px 5px;
  padding: 10px 10px;
  background-color: rgba(255, 255, 255, 0.6);
  grid-column: 2;
  grid-row: 4;
}

.item-five-a {
  grid-column: 1;
  grid-row: 1;
  background-size: cover;
  background-image: url("../assets/images/workshop3.png");
}

.image-border {
  border: 5px solid rgba(255, 255, 255, 1);
}

.item-five-b {
  grid-column: 2;
  grid-row: 1;
  border-radius: 5px 5px;
  background-color: rgba(255, 255, 255, 0.7);
}

.item-six-a {
  grid-column: 2;
  grid-row: 2;
  background-size: cover;
  background-image: url("../assets/images/workshop4.png");
}

.item-six-b {
  grid-column: 1;
  grid-row: 2;
  border-radius: 5px 5px;
  background-color: rgba(255, 255, 255, 0.7);
}

.item-seven-a {
  grid-column: 1;
  grid-row: 3;
  background-size: cover;
  background-image: url("../assets/images/workshop6.png");
}

.item-seven-b {
  grid-column: 2;
  grid-row: 3;
  border-radius: 5px 5px;
  background-color: rgba(255, 255, 255, 0.7);
}

.item-eight-a {
  grid-column: 2;
  grid-row: 4;
  background-size: cover;
  background-image: url("../assets/images/workshop7.jpeg");
}

.item-eight-b {
  grid-column: 1;
  grid-row: 4;
  border-radius: 5px 5px;
  background-color: rgba(255, 255, 255, 0.7);
}

.item-nine-title {
  z-index: 55;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 7;
  border-radius: 5px 5px;
  padding: 10px 10px;
  background-color: rgba(255, 255, 255, 0.7);
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
  background-color: rgba(255, 255, 255, 0.7);
}

.item-nine-b {
  z-index: 55;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 6fr 1fr;
  grid-column: 2;
  grid-row: 1;
  border-radius: 5px 5px;
  background-color: rgba(255, 255, 255, 0.7);
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
  background-color: rgba(255, 255, 255, 0.7);
  grid-row: 2;
}

.inner-shadow {
  box-shadow: 0px 0px 25px 20px rgba(0, 0, 0, 0.7) inset;
}

.black-shadow {
  box-shadow: 0px 0px 25px 30px rgba(0, 0, 0, 0.9);
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