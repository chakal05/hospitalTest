<template>
  <div id="admin">
    <b-container class="container">
      <h3>{{msg}}</h3>
      <div class="top" v-if="!show">
        <h4>Entrez une date :</h4>
        <v-app id="inspire">
          <v-layout>
            <v-flex xs12 sm12 class="my-3">
              <v-date-picker class="tb" landscape full-width v-model="picker" locale="fr-fr"></v-date-picker>
            </v-flex>
          </v-layout>
          <button class=" btn left">
            <router-link tag="li" to="/">
              Se déconnecter
            </router-link>
          </button>
          <b-button class="btn right" v-on:click="getInfo">Retrouver</b-button>
        </v-app>
      </div>

      <div class="table" v-if="show">
        <b-button class="btn back" v-on:click="show = !show">Retour</b-button>

        <h4 class="second">Les résérvations pour cette date sont:</h4>
        <br>
        <b-table class="data" striped hover :items="items"></b-table>
        <div class="empty" v-if="empty">Aucune reservation n'a été rétrouvé pour ce jour</div>
      </div>
    </b-container>
  </div>
</template>

<script>
import getData from "@/requests/getData";
export default {
  name: "admin",

  data: () => ({
    msg: "Hôpital Général Peltier",
    picker: new Date().toISOString().substr(0, 10),
    show: false,
    empty: false,
    items: []
  }),
  methods: {
    async getInfo() {
      if(!this.show){
        this.empty = false;
        this.items = [];
      }
      await getData
        .getReser({
          date: this.picker
        })
        .then(response => {
          if (response.status === 200) {
              this.empty = false;
            let data = response.data;
            data.forEach(element => {
              this.items.push(element);
            });
          }
        })
        .catch(e => {
          if (e) {
            this.empty = true;
          }
        });
      this.show = true;
    }
  }
};
</script>

<style scoped>
h3 {
  margin-bottom: 3%;
  color: #133358;
}
h4 {
  color: #133358;
}
.btn {
  width: 150px;
  height: 35px;
  border-radius: 2px;
  border-color: #fff;
  background-color: #8ea9c4;
  color: #fff;
}
.btn:hover,
.btn:focus {
  background-color: #fff;
  color: #5076a4;
  border-color: #8ea9c4;
}
#inspire {
  margin: 0 auto;
  height: 200px;
  background-color: #fff;
}

.left {
  position: absolute;
  top: 23rem;
  left: 0;
}

.right {
  position: absolute;
  top: 23rem;
  right: 0;
}

#inspire a {
  color: #fff;
  text-decoration: none;
}
#inspire a:hover {
  color: #5076a4;
}

#inspire .btn:hover a {
  color: #5076a4;
}

li {
  list-style: none;
}

.back {
  margin-bottom: 3%;
}

.table {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3%;
}

.data {
  margin: 0 auto;
}
.empty {
  background-color: #8ea9c4;
  color: #fff;
  width: 70%;
  border-radius: 1px;
  margin: 0 auto;
  padding: 3%;
  font-size: 15px;
}

@media only screen and (max-width: 320px) {
  .container {
    max-width: 320px;
  }
  .btn {
    width: 130px;
    margin-top: 7%;
  }
  .back {
    margin-top: 1%;
    margin-bottom: 1rem;
  }
  .table {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3%;
  }
  .data {
    width: 50%;
    margin-left: -1.6rem;
  }
}
@media only screen and (min-width: 768px) {
  .top {
    width: 90%;
    margin: 0 auto;
  }
  .table {
    width: 80%;
    margin: 0 auto;
  }
  h3 {
    margin-top: -2%;
  }
  h4 {
    width: 70%;
    margin: 0 auto;
    margin-top: -1.5%;
  }
  .back {
    margin-top: -1%;
  }
}
@media only screen and (min-width: 1264px) {
  h3 {
    margin-top: -2.5%;
    color: #133358;
  }

  h4 {
    margin-bottom: 1%;
    color: #133358;
    margin-top: -2%;
  }
  #input-1 {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    border: 1px solid;
  }

  .top {
    width: 70%;
    height: 180px;
    margin: 0 auto;
  }

  .btn {
    width: 200px;
    height: 35px;
    border-radius: 2px;
    border-color: #fff;
    background-color: #8ea9c4;
    color: #fff;
  }
  .btn:hover,
  .btn:focus {
    background-color: #fff;
    color: #5076a4;
    border-color: #8ea9c4;
  }
  .left {
    position: absolute;
    top: 23rem;
    left: 0;
  }

  .right {
    position: absolute;
    top: 23rem;
    right: 0;
  }
  .second {
    margin-top: -0.5%;
  }

  .back {
    margin-top: -2.5%;
  }
}
</style>


