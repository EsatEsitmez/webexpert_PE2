<template>
  <div class="loginbody">
    <!-- foto -->
    <div id="left-section">
      <img src="@/assets/inlogfoto.png">
    </div>
    <!-- loginform -->
    <div id="right-section">
      <form v-if="!loggedIn" id="login-form">
        <h2 class="logintitel">Login</h2>
        <label for="username">Naam:</label>
        <input v-model="user.username" type="text" id="username" name="username" required>

        <label for="password">Wachtwoord:</label>
        <input v-model="user.password" type="password" id="password" name="password" required>
        <h6 class="wwvergeten"><a href="">Wachtwoord vergeten</a></h6>

        <button id="login-button" type="button" @click="login">Login</button>
        <button id="register-button" type="button">Registreren</button>
      </form>

      <div v-else>
        <div id="login-form">
          <h2 class="logintitels">Je bent nu ingelogd als:</h2>
          <p>{{ user.username }}</p>
          <div>
            <router-link to="/products"> Kies je producten.</router-link>

          </div>
          <button id="logout-button" type="button" @click="logout">Uitloggen</button>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      loggedIn: false
    };
  },
  methods: {
    login() {
      const validUsername = 'school@mail.be';
      const validPassword = 'test';

      if (this.user.username === validUsername && this.user.password === validPassword) {
        this.loggedIn = true;
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', this.user.username);
        alert('Je bent nu ingelogd!');
      } else {
        console.error('Ongeldige inloggegevens', this.user.username, this.user.password);
        alert('Ongeldige inloggegevens');
      }
    },
    logout() {
      this.loggedIn = false;
      localStorage.setItem('loggedIn', 'false');
      localStorage.removeItem('username');
      localStorage.clear();
      alert('Je bent nu uitgelogd!');
    },
    restoreLoggedInStatus() {
      const storedLoggedIn = localStorage.getItem('loggedIn');
      const storedUsername = localStorage.getItem('username');

      console.log('Stored loggedIn:', storedLoggedIn);
      console.log('Stored username:', storedUsername);

      if (storedLoggedIn === 'true' && storedUsername) {
        this.loggedIn = true;
        this.user.username = storedUsername;
      }
    }
  },
  created() {
    this.restoreLoggedInStatus();
  }
};
</script>

<style>
@import "/src/css/main.css";
.logintitels {
  align-items: center;
  text-align: center;
}
</style>
