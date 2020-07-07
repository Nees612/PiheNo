<template>
  <div data-aos="fade" data-aos-duration="800" class="workshop-container">
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
    <div v-parallax="0.2" id="background"></div>
    <div class="item-one mt-4">
      <h2 class="item-one-b">PiheNŐ Program</h2>
      <div class="item-one-a m-5">
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
        <button
          type="button"
          class="btn btn-outline-success mt-3 subscribe-btn"
          v-on:click="openSignUp"
        >JELENTKEZEM</button>
      </div>
    </div>
    <div class="item-two">
      <div class="item-two-bg inner-shadow image-border"></div>
      <div data-aos="slide-up" data-aos-duration="800" class="item-two-a">
        <p class="h5 text-justify white-bg p-4">
          PiheNŐ Programunk pont erről szól.
          Azért hoztuk létre Programunkat, mert úgy látjuk, hogy a NŐk mostanában, tisztelet a kivételnek, elfelejtenek NŐK lenni.
          Egy NŐ nemcsak anya és feleség.
          Merj kilépni ebből. Az anyaság és feleség szerepek mellett válj újra, vagy először olyan NŐvé, aki önbizalommal telve éli mindennapjait.
        </p>
      </div>
      <div data-aos="zoom-in-left" data-aos-duration="800" class="item-two-b white-bg rounded m-4">
        <p class="m-3 text-justify p-4">
          Érezted-e már valaha, hogy szeretnél NŐiesebb, légiesebb lenni, de nem tudod, hogyan érd el?
          Talán irigykedsz is azokra, akik minden nap tökéletesen néznek ki, jó a sminkjük, jó a hajuk, jó a ruhájuk, egyszóval igazi NŐk.
          Sok videot, blogot olvasol a NŐiességről, de mégis valahogy elmarad a várt áttörés az életedben.
        </p>
        <button
          type="button"
          class="btn btn-outline-success mt-3 subscribe-btn"
          v-on:click="openSignUp"
        >JELENTKEZEM</button>
      </div>
    </div>
    <div v-parallax="0.2" class="item-three-bg"></div>
    <div class="item-three">
      <div
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="item-three-a-image inner-shadow rounded m-3 image-border"
      ></div>
      <h3
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        class="item-three-a-text p-4 h3 my-auto mx-5 text-justify"
      >Hogyan és mely illóolajokat használd NŐiességed kifejezésére, felébresztésére és megélésére.</h3>
      <div
        data-aos="flip-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="item-three-b-image inner-shadow rounded m-3 image-border"
      ></div>
      <h3
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        class="item-three-b-text p-4 my-auto mx-5 text-justify"
      >
        Hogyan maradj minden körülmények között NŐ.
        Átbeszéljük, hogy milyen problémákkal küzdenek a NŐk manapság a mindennapokban, és azokra megoldásokat is kínálunk theta-coaching módszerünkkel.
      </h3>
      <div
        data-aos="flip-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="item-three-c-image inner-shadow rounded m-3 image-border"
      ></div>
      <h3
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        class="item-three-c-text p-4 my-auto mx-5 text-justify"
      >
        Hogyan sminkelj a mindennapokban, hogy ne legyen sok, de kevés sem a make-up-od.
        Kinek mi áll jól, mi az, amitől magabiztosnak érzed magad, amikor nem kell pironkodnod, ha valaki rád szegezi
        tekintetét, hanem büszkén, emelt fővel állod a pillantást, mert tisztában vagy azzal, hogy a NŐiességed rendben van.
      </h3>
      <div
        data-aos="flip-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        class="item-three-d-image inner-shadow rounded m-3 image-border"
      ></div>
      <h3
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-offset="300"
        class="item-three-d-text p-4 my-auto mx-5 text-justify"
      >
        Színvarázslattal megállapítjuk, melyik szín áll jól.
        Mely színekben pompázol, melyek, amelyek elsápasztanak.
        Átbeszéljük és rámutatunk arra, hogy mely színekből álljon a ruhatárad, hogy minden nap önbizalommal telve lépj ki az utcára.
      </h3>
    </div>
    <div class="item-four">
      <div data-aos="fade" data-aos-duration="800" class="item-four-a">
        <h1 class="m-3">Jelentkezz most!</h1>
        <button
          type="button"
          class="btn btn-outline-success mt-3 subscribe-btn"
          v-on:click="openSignUp"
        >JELENTKEZEM</button>
        <hr class="w-75" />
      </div>
      <div data-aos="fade" data-aos-duration="800" class="item-four-b">
        <h1>És, ha az előzőekben leírtak nem elegendőek, akkor mindezek mellé ...</h1>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1200"
        data-aos-anchor-placement="top-center"
        class="item-four-c m-5"
      >
        <div class="item-four-c-a">
          <h2 class="mt-3">PiheNő Program Plusz</h2>
          <p class="h5">Ráadásként kapsz egy szeretetérintéses arcmasszázst.</p>
          <div class="item-four-a-image inner-shadow rounded image-border"></div>
        </div>
        <div class="item-four-c-b">
          <h2 class="mt-3">PiheNő Program Exra Plusz</h2>
          <p class="h5">Ráadásként kapsz egy arcjóga órát.</p>
          <div class="item-four-b-image inner-shadow rounded image-border"></div>
        </div>
      </div>
    </div>
    <div class="item-five image-border">
      <div data-aos="slide-up" data-aos-duration="800" class="item-five-a m-5 p-4">
        <p class="m-auto h5 text-justify">
          Következő Programunk időpontja: 2020. Július 11. szombat. 10-16 óráig Helyszín: AnaGa Szín és Lélek Stúdió Veresegyház, Hétvezér u. 2/b.
          Ár: 15.000 Ft/fő. Hozz magaddal még egy NŐT és kedvezményt kaptok mind a ketten.
        </p>
        <hr class="w-75" />
        <img src="../assets/images/workshop14.png" class="h-25 w-25" />
      </div>
      <div data-aos="slide-up" data-aos-duration="800" class="item-five-b m-5 p-4">
        <p class="m-auto h5 text-justify">
          Gyere el a kérdéseiddel és úgy térj haza, mint akit kicseréltek, tele válaszokkal.
          Mert, magabiztos NŐ, anya, feleség kell minden családba. Tőled fog működni minden rendben otthon. Töltődj fel nálunk!
        </p>
        <hr class="w-75" />
        <button
          type="button"
          class="btn btn-outline-success mt-10 subscribe-btn"
          v-on:click="openSignUp"
        >JELENTKEZEM</button>
      </div>
      <div data-aos="slide-up" data-aos-duration="800" class="item-five-c m-5 p-4">
        <p class="m-auto h5 text-justify">
          Garanciát vállalunk az általunk adott programra. Amennyiben a nap végére úgy érzed, hogy nem kaptál elegendő választ,
          elegendő feltöltődést részünkről és ezt, mint építő kritikát elmondod nekünk, meghallgatunk, megfogadjuk a tapasztalásaid
          és visszafizetjük ennek a programnak az árát.
        </p>
        <hr class="w-75" />
        <img src="../assets/images/workshop15.png" class="h-25 w-25" />
      </div>
    </div>
  </div>
</template>

<script>
import { workshoppers } from "../firebaseInit";

export default {
  name: "WorkshopFinal",
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
.inner-shadow {
  box-shadow: 0px 0px 25px 20px rgba(0, 0, 0, 0.7) inset;
}

.sign-up-form {
  position: sticky;
  top: 20%;
}

.subscribe-btn {
  width: 280px;
}

.x-button {
  cursor: pointer;
}

.mt-10 {
  margin-top: 10%;
}

.my-modal {
  z-index: 70;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 6;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

#background {
  z-index: 3;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("../assets/images/workshop1.jpg");
}

.workshop-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1.5fr 5.1fr 2.7fr 2fr;

  background: transparent;
}

.item-one {
  z-index: 3;
  grid-row: 1;
  grid-column: 1;

  display: grid;
  grid-template-columns: 8fr 5fr;
  grid-template-rows: 0.2fr 2fr;

  background: transparent;
}

.item-one-a {
  grid-column: 2;
  grid-row: 2;
}

.item-one-b {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 1;
}

.item-two {
  z-index: 3;
  grid-column: 1;
  grid-row: 2;

  display: grid;
  grid-template-columns: 8fr 5fr;
  grid-template-rows: 1fr 3fr;
  background: white;
}

.item-two-a {
  z-index: 3;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row: 1;
}

.item-two-b {
  z-index: 3;
  grid-column: 2;
  grid-row: 2;
}

.item-two-bg {
  z-index: 2;
  background-size: cover;
  background-image: url("../assets/images/workshop17.jpg");
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}

.item-three {
  grid-column: 1;
  grid-row: 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

.item-three-bg {
  z-index: 2;
  grid-column: 1;
  grid-row-start: 3;
  grid-row-end: 5;
  background-size: cover;
  background-image: url("../assets/images/workshop18.jpg");
}

.item-three-a-image {
  z-index: 3;
  grid-column: 1;
  grid-row: 1;
  background-size: cover;
  background-image: url("../assets/images/workshop3.png");
}

.item-three-a-text {
  z-index: 3;
  grid-column: 2;
  grid-row: 1;
  border-radius: 5px 5px;
}

.item-three-b-image {
  z-index: 3;
  grid-column: 2;
  grid-row: 2;
  background-size: cover;
  background-image: url("../assets/images/workshop4.png");
}

.item-three-b-text {
  z-index: 3;
  grid-column: 1;
  grid-row: 2;
  border-radius: 5px 5px;
}

.item-three-c-image {
  z-index: 3;
  grid-column: 1;
  grid-row: 3;
  background-size: cover;
  background-image: url("../assets/images/workshop6.png");
}

.item-three-c-text {
  z-index: 3;
  grid-column: 2;
  grid-row: 3;
  border-radius: 5px 5px;
}

.item-three-d-image {
  z-index: 3;
  grid-column: 2;
  grid-row: 4;
  background-size: cover;
  background-image: url("../assets/images/workshop7.jpeg");
}

.item-three-d-text {
  z-index: 3;
  grid-column: 1;
  grid-row: 4;
  border-radius: 5px 5px;
}

.item-four {
  z-index: 3;
  grid-column: 1;
  grid-row: 4;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0fr 0fr 0.7fr;
}

.item-four-a {
  z-index: 3;
  grid-column: 1;
  grid-row: 1;
}

.item-four-b {
  z-index: 3;
  grid-column: 1;
  grid-row: 2;
  border-radius: 5px 5px;
  padding: 10px 10px;
}

.item-four-c {
  z-index: 3;
  grid-column: 1;
  grid-row: 3;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
}

.item-four-c-a {
  z-index: 3;
  grid-column: 1;
  grid-row: 1;
}

.item-four-c-b {
  z-index: 3;
  grid-column: 2;
  grid-row: 1;
}

.item-four-a-image {
  height: 100%;
  width: 100%;
  z-index: 3;
  background-size: cover;
  background-image: url("../assets/images/workshop9.jpeg");
}

.item-four-b-image {
  height: 100%;
  width: 100%;
  z-index: 3;
  background-size: cover;
  background-image: url("../assets/images/workshop10.jpeg");
}

.item-five {
  z-index: 3;
  grid-column: 1;
  grid-row: 5;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  background-size: cover;
  background-image: url("../assets/images/workshop13.jpg");
  /* height: fit-content; */
}

.item-five-a {
  z-index: 3;
  grid-column: 1;
  grid-row: 1;
}

.item-five-b {
  z-index: 3;
  grid-column: 2;
  grid-row: 1;
}

.item-five-c {
  z-index: 3;
  grid-column: 3;
  grid-row: 1;
}

.image-border {
  border: 5px solid rgba(255, 255, 255, 1);
}

.white-bg {
  background-color: rgba(255, 255, 255, 0.6);
}
</style>