<template>
  <div id="home">
    <b-container class="container">
      <h3>{{ msg }}</h3>
      <div class="active">
        <div class="alert" v-if="alertSuccessRegister">
          <div>Votre consultation a été enregistrée. Bienvenue</div>
        </div>

        <div class="lists" v-if="!toggle">
          <ul class="firstList">
            <li class="bold">
              <i class="material-icons">phone_iphone</i>
              <p>
                Les horaires d'appel au
                <br>+253 21 35 27 10 :
              </p>
            </li>
            <li>Dimanche : 8h00-17h00</li>
            <li>Lundi : 8h00-17h00</li>
            <li>Mardi : 8h00-17h00</li>
            <li>Mercredi : 8h00-17h00</li>
            <li>Jeudi : 8h00-17h00</li>
          </ul>

          <ul class="secondList">
            <li class="bold">
              <i class="material-icons">query_builder</i>
              <p>Consultations</p>
            </li>
            <li>Dimanche : 8h00-17h00</li>
            <li>Lundi : 8h00-17h00</li>
            <li>Mardi : 8h00-17h00</li>
            <li>Mercredi : 8h00-17h00</li>
            <li>Jeudi : 8h00-17h00</li>
          </ul>

          <p class="map">
            <i class="material-icons">place</i>
            Adresse: Avenue Marechal
            Djibouti, Djibouti
          </p>
        </div>
        <div class="reserve" v-if="!toggle">
          <p>Les consultations dure 30 minutes par patients afin de pouvoir recevoir le plus de patients possible. Nous vous recommandons fortement donc, d'arriver un quart d'heure en avance pour éviter les surprises. Si vous n'etes pas en place à l'heure, votre consultation sera occtroyé au patient suivant dans la liste.</p>
          <b-button class="bouton" v-on:click="toggle = !toggle">Réserver maintenant</b-button>

          <div>
            <b-button class="whiteBtn" v-b-modal.modal-center>Administration</b-button>

            <b-modal id="modal-center" centered title="Administration">
              <input
                id="input-live1"
                v-model="name"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Votre nom"
                trim
              >
              <br>
              <br>
              <input
                id="input-live"
                v-model="pass"
                type="password"
                aria-describedby="input-live-help input-live-feedback"
                placeholder="Votre mot de passe"
                trim
              >
              <div slot="modal-footer" class="w-100">
                <b-button class="continuer" @click="handleOk">Connexion</b-button>
              </div>
              <p
                v-if="connexionErr"
                class="rouge"
              >Il y'a un problème avec l'identifiant ou le mot de passe. Vérifiez svp !</p>
            </b-modal>
          </div>
        </div>
      </div>

      <div class="firstForm" v-if="toggle && !move">
        <b-button class="retour" v-on:click="toggle = !toggle">Retour</b-button>
        <br>
        <div class="perso">
          <h5>
            <b>Entrez vos donnees</b>
          </h5>
          <form>
            <div class="column is-12">
              <div class="column is-12">
                <br>
                <input
                  name="prenom"
                  v-model="prenom"
                  v-validate="'required|alpha'"
                  type="text"
                  placeholder="Prénom"
                >
                <i v-show="errors.has('prenom')" class="fa fa-warning"></i>
                <span
                  v-show="errors.has('prenom')"
                  class="help is-danger"
                >{{ errors.first('prenom') }}</span>
              </div>
              <div class="column is-12">
                <input
                  name="nom"
                  v-model="nom"
                  v-validate="'required|alpha'"
                  type="text"
                  placeholder="Nom"
                >
                <i v-show="errors.has('nom')" class="fa fa-warning"></i>
                <span v-show="errors.has('nom')" class="help is-danger">{{ errors.first('nom') }}</span>
              </div>
              <div class="column is-12">
                <input
                  name="telephone"
                  v-model="telephone"
                  v-validate="'required|numeric|min:8'"
                  :counter="8"
                  type="text"
                  placeholder="Téléphone"
                >
                <i v-show="errors.has('telephone')" class="fa fa-warning"></i>
                <span
                  v-show="errors.has('telephone')"
                  class="help is-danger"
                >{{ errors.first('telephone') }}</span>
              </div>

              <div>
                <input class="chek" type="checkbox" v-model="checked">
                <p class="chekmen">Je veux recevoir un email de confirmation</p>
              </div>

              <div v-if="checked">
                <input
                  name="email"
                  v-model="email"
                  type="email"
                  v-validate="'email'"
                  placeholder="Email"
                >
                <i v-show="errors.has('email')" class="fa fa-warning"></i>
                <span
                  v-show="errors.has('email')"
                  class="help is-danger"
                >{{ errors.first('email') }}</span>
              </div>
            </div>
          </form>
        </div>
        <b-button class="continuer" v-on:click="checkForm">Continuer</b-button>
      </div>

      <div class="tid" v-show="move && !trois">
        <b-button class="retour" v-on:click="move =!move">Retour</b-button>
        <div class="calendar">
          <br>
          <p v-if="weekend" class="weekend">Les Week-end sont résérvés au urgences.</p>
          <p v-if="past" class="past">La date choissie est passée.</p>
          <v-app id="inspire">
            <v-date-picker v-model="picker" locale="fr-fr" full-width landscape></v-date-picker>
          </v-app>
        </div>

        <b-button class="continuer tidCo" v-on:click="sendData">Continuer</b-button>
      </div>

      <div v-if="trois && !foor" class="time">
        <b-button class="retour droiteTime" v-on:click="trois =!trois">Retour</b-button>

        <br>

        <div class="timeTitle">
          <h5>
            <b>Choississez une heure de visite</b>
          </h5>

          <ul>
            <li v-for="(hour, index) in dispoHours" :key="index">
              <b-button class="btnHour" @click="getButonVal">{{hour}}</b-button>
            </li>
            <br>
            <br>
            <li v-if="dispo">
              <b-spinner label="Spinning"></b-spinner>
              <b-spinner type="grow" label="Spinning"></b-spinner>
              <b-spinner label="Spinning"></b-spinner>
            </li>

            <li v-if="fullBooked">
              <div class="alert">
                <div>{{picker}} est complet</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="foor" class="conf">
        <b-button class="retour" v-on:click="foor =!foor">Retour</b-button>
        <br>
        <div class="last">
          <h5>
            <b>Voulez vous confirmer ce rendez-vous?</b>
          </h5>
          <p>
            Le patient
            <b-button variant="light">{{prenom}} {{nom}}</b-button>  souhaite faire une résérvation pour la date suivante :
            <br>
            <b-button variant="light">{{picker}}</b-button>  à
            <b-button variant="light">{{hour}}</b-button>
          </p>
        </div>
        <b-button class="continuer" v-on:click="submitForm">ENVOYER</b-button>
      </div>
    </b-container>
  </div>
</template>

<script>
//todo Deploy and add nodemailer

/*eslint-disable */
import { Validator } from "vee-validate";
import getData from "@/requests/getData";
import underscore from "vue-underscore";
export default {
  name: "Home",
  data: () => ({
    msg: "Hôpital Général Peltier",
    picker: new Date().toISOString().substr(0, 10),
    toggle: false,
    move: false,
    trois: false,
    foor: false,
    telephone: "",
    nom: "",
    prenom: "",
    email: "",
    hour: "",
    checked: false,
    dispoHours: [],
    name: "",
    pass: "",
    dispo: false,
    alertSuccessRegister: false,
    fullBooked: false,
    connexionErr: false,
    weekend: false,
    past: false
  }),
  methods: {
    mounted() {
      this.$validator.localize("fr", this.dictionary);
    },

    async handleOk() {
      let response = await getData
        .loginUser({
          name: this.name,
          pass: this.pass
        })
        .then(response => {
          if (response.data.user) {
            localStorage.setItem("jwt", response.data.token);
            if (localStorage.getItem("jwt") != null) {
              this.$router.push({ name: "admin" });
            }
          }
          if(response.data){
            console.log(response.data);
          }
        })
        .catch(e => {
          this.connexionErr = true;
        });
    },
    checkForm() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.move = true;
          this.weekend = false;
          this.past = false;
        } else {
          this.move = false;
        }
      });
    },
    async sendData() {
      // Get today'date and compare it to the picked date. If picked date is previous than today's date, alert them to choose a new date
      var d = new Date().toISOString().substr(0, 10);
      var today = new Date(d);
      var tid = new Date(this.picker);

      // todo change the alert to better UI

      if (this.picker) {
        if (tid.getTime() > today.getTime()) {
          if (tid.getDay() === 5) {
            this.weekend = true;
            this.trois = false;
          } else if (tid.getDay() === 6) {
            this.weekend = true;
            this.trois = false;
          } else {
            this.trois = true;
            this.weekend = false;
            this.past = false;
          }
        } else {
          this.past = true;
          this.trois = false;
        }
      } else {
        this.trois = false;
      }

      if (this.trois) {
        this.dispoHours = [];
        this.fullBooked = false;
        var timmar = [
          "8h30",
          "9h00",
          "9h30",
          "10h00",
          "10h30",
          "11h00",
          "11h30",
          "12h00",
          "16h30",
          "17h00",
          "17h30",
          "18h00"
        ];

        let response = await getData
          .getHours(
            {
              date: this.picker
            },
            (this.dispo = true)
          )
          .then(response => {
            // Format and display only available hours
            var obj = response.data;
            var found = this.$_.difference(timmar, obj);
            found.forEach(element => {
              this.dispoHours.push(element);
            });

            if (!this.dispoHours[0]) {
              this.fullBooked = true;
              this.dispo = false;
            } else {
              this.fullBooked = false;
              this.dispo = false;
            }
          })
          .catch(e => {
            console.error(e);
          });
      }
    },
    getButonVal: function(event) {
      let item = event.target.innerHTML;

      if (item) {
        event.target.style.backgroundColor = "#fff";
        event.target.style.color = "#133358";
        this.hour = item;
      }
      if (!this.hour) {
        this.foor = false;
        alert("please pick a time");
      } else {
        this.foor = true;
      }
    },

    async submitForm() {
      const response = await getData
        .submitForm({
          firstName: this.prenom,
          lastName: this.nom,
          phone: this.telephone,
          email: this.email,
          date: this.picker,
          time: this.hour
        })
        .then(response => {
          if (response && response.status === 200) {
            this.alertSuccessRegister = true;

            setTimeout(() => {
              this.$router.go();
            }, 2000);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#home {
  color: #133358;
}
h3 {
  margin-top: -1rem;
  margin-bottom: 4%;
}
.lists {
  width: 100%;
  margin: 0 auto;
  border-radius: 3px;
  padding: 3%;
  box-shadow: 1px 1px 1px 1px #8ea9c4;
}

.bold {
  font-weight: bold;
  color: #133358;
}

li {
  list-style: none;
}

.reserve {
  width: 80%;
  padding: 5%;
  margin-top: 13%;
  margin-bottom: 11%;
  margin-left: 9%;
  border-radius: 2px;
  box-shadow: 1px 1px 1px 1px #8ea9c4;
}

.weekend,
.past {
  width: 80%;
  margin: 0 auto;
  color: red;
}

.weekend {
  margin-top: 4%;
}

.bouton {
  background-color: #8ea9c4;
  margin: 0 auto;
  width: 200px;
  border: none;
  border-radius: 1px;
  margin-top: 5%;
  margin-bottom: 3%;
  padding: 2%;
}
.bouton:hover,
.bouton:focus {
  background-color: #5076a4;
  color: #fff;
  font-weight: bold;
}
.whiteBtn {
  background-color: #fff;
  color: #133358;
  width: 200px;
  border-radius: 1px;
  border-color: #8ea9c4;
  padding: 2%;
}
.whiteBtn:hover {
  border-color: #b8bbbb;
  font-weight: bold;
}

.firstList {
  margin: 0 auto;
  padding: 3%;
  width: 90%;
  margin-bottom: -1%;
}

.firstList i {
  margin-left: -1rem;
}
.lists li {
  margin-top: 3px;
}
.secondList {
  width: 90%;
  margin: 0 auto;
  padding: 3%;
}

.bold i {
  margin-left: -1rem;
}
.bold p {
  margin-left: -1rem;
  padding-top: 3px;
}

.map {
  position: relative;
  left: -0.5rem;
  top: 0.3rem;
  margin-bottom: 3%;
}

.map i {
  position: relative;
  top: 0;
}

.tid,
.time,
.conf {
  width: 100%;
  margin: 0 auto;
  margin-top: 1%;
}

.firstForm {
  width: 90%;
  margin: 0 auto;
}

.chek {
  height: 19px;
  float: left;
  margin-left: 2%;
  width: 20px;
}
.chekmen {
  width: 100%;
  margin-left: -7rem;
}

.perso {
  margin-top: 11%;
  border-radius: 2px;
  box-shadow: 1px 1px 1px 1px #8ea9c4;
  padding-top: 5%;
  padding: 3%;
}

form {
  padding: 2%;
}

.perso span {
  color: red;
}

.rouge {
  color: red;
  text-align: center;
  padding: 0.5%;
}

.retour {
  width: 100px;
  height: 35px;
  border-radius: 2px;
  border-color: #fff;
  background-color: #8ea9c4;
  float: left;
  margin-bottom: 1rem;
}
.continuer {
  width: 100px;
  height: 35px;
  border-radius: 2px;
  border-color: #fff;
  background-color: #8ea9c4;
  float: right;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

input {
  margin-bottom: 3%;
  width: 99%;
  height: 31px;
  padding-left: 1%;
  border: 0.3px solid gainsboro;
  border-top-color: #fff;
  border-right-color: #fff;
  border-left-color: #fff;
}

input:focus {
  outline: none;
}

.calendar {
  height: 300px;
}
#inspire {
  width: 100%;
  padding-top: 3%;
  background-color: #fff;
  height: 300px;
  margin-bottom: 7%;
  margin-top: 3%;
}
.tidCo {
  position: relative;
  top: 4.5rem;
  right: 0;
}
.droiteTime {
  margin-top: -1rem;
}

.time {
  margin-top: 7%;
}
.time ul {
  padding: 3%;
  height: auto;
  box-shadow: 1px 1px 1px 1px #8ea9c4;
  margin-top: 3%;
}

.time li :hover {
  background-color: #fff;
  color: #4e7091;
}

.btnHour {
  background-color: #4e7091;
  width: 200px;
  border-radius: 1px;
  margin-top: 1.5%;
  font-weight: bold;
  padding: 1%;
}
.timeTitle {
  margin-top: 1.1rem;
}

.conf {
  margin-top: 2rem;
  margin-bottom: -0.5rem;
}

.last {
  height: 200px;
  margin-top: 2rem;
  box-shadow: 1px 1px 1px 1px #8ea9c4;
  width: 100%;
  padding-top: 9%;
}

.last p {
  padding: 3%;
  font-size: 15px;
  font-weight: 500;
}

.alert {
  background-color: #8ea9c4;
  color: #fff;
  width: 70%;
  border-radius: 1px;
  margin: 0 auto;
  padding: 1%;
}

#modal-center {
  background-color: #5076a4;
}
@media only screen and (max-width: 320px) {
  .container {
    width: 320px;
    margin: 0 auto;
  }
  .firstList,
  .secondList {
    margin: 0 auto;
  }

  .perso {
    margin-top: 15%;
  }
  .bouton {
    margin-bottom: 5%;
  }
  .chekmen {
    margin-left: -3rem;
  }
  .tidCo {
    position: relative;
    top: 5.5rem;
    right: 0;
  }
}

@media only screen and (max-width: 959px) and (min-width: 768px) {
  h3 {
    margin-bottom: 2%;
  }
  .active {
    width: 100%;
  }
  .firstList {
    float: left;
    width: 50%;
    border: 1px solid;
    border-left-color: #fff;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-right-color: #8ea9c4;
    padding: 3%;
  }
  .secondList {
    float: right;
    width: 50%;
  }
  #inspire {
    margin-top: 2%;
  }
  .continuer {
    margin-top: 4rem;
  }
  .reserve {
    margin-top: 6%;
    margin-bottom: 3%;
  }

  .perso {
    margin-top: 8%;
    margin-bottom: -3%;
  }

  .last {
    margin-bottom: -3rem;
  }
  .time li {
    display: inline-block;
    margin: 1%;
  }
  .tidCo {
    top: 5rem;
  }
}

@media only screen and (max-width: 1264px) and (min-width: 959px) {
  h3 {
    margin-bottom: 3%;
  }
  .lists {
    width: 60%;
    padding: 4%;
    float: left;
    margin-left: 0;
    margin-bottom: 3%;
  }
  .map {
    position: relative;
    left: 5rem;
    top: 1.5rem;
    float: left;
  }
  .map i {
    position: relative;
    top: 0.5rem;
  }

  .firstList {
    margin-left: 0;
    float: left;
    width: 50%;
    border: 1px solid;
    border-left-color: #fff;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-right-color: #8ea9c4;
  }

  .secondList {
    margin: 0 auto;
    float: right;
    width: 50%;
  }
  .reserve {
    width: 30%;
    padding: 2%;
    float: right;
    margin-top: 0.3rem;
  }
  .perso {
    margin-top: 4%;
    margin-bottom: -2.3rem;
  }

  .perso form {
    margin-top: -3%;
  }
  .retour {
    margin-bottom: 0;
  }
  .chekmen {
    margin-left: -25rem;
  }

  #inspire {
    margin-top: -1%;
  }
  .time li {
    display: inline-block;
    height: 20px;
    margin: 1%;
  }
  .conf {
    margin-bottom: 7rem;
  }
  .tidCo {
    top: 3.7rem;
  }
  .last {
    padding-top: 3%;
    margin-bottom: -2.5rem;
  }
  .continuer {
    margin-top: 4rem;
  }
}

@media only screen and (min-width: 1264px) {
  h3 {
    margin-bottom: 1.5%;
  }
  .lists {
    width: 60%;
    padding: 3%;
    float: left;
    margin-left: 0;
    margin-bottom: 2%;
  }
  .firstList {
    margin-left: 0;
    float: left;
    width: 50%;
    border: 1px solid;
    border-left-color: #fff;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-right-color: #8ea9c4;
  }

  .secondList {
    margin: 0 auto;
    float: right;
    width: 50%;
  }

  .map {
    left: 1rem;
  }
  .reserve {
    width: 30%;
    padding: 2%;
    float: right;
    margin-top: 1.3rem;
    margin-right: 1%;
  }
  .firstForm {
    width: 70%;
  }
  .perso {
    margin: 0 auto;
    margin-top: 2.5rem;
    margin-bottom: -2rem;
  }

  .perso form {
    margin-top: -3%;
  }
  .retour {
    margin-bottom: 0;
  }
  .continuer {
    margin-top: 3.5rem;
  }
  .chekmen {
    margin-left: -27rem;
  }
  .tid,
  .time,
  .conf {
    width: 70%;
    margin: 0 auto;
  }
  #inspire {
    margin-top: -1%;
    margin-bottom: 3%;
  }
  .time li {
    display: inline-block;
    height: 20px;
    margin: 1%;
  }
  .conf {
    margin-bottom: 7rem;
  }
  .tidCo {
    top: 3.7rem;
  }
  .last {
    padding-top: 3%;
    margin-bottom: -2.5rem;
  }
  .alert {
    margin-bottom: 1%;
  }
}
</style>
