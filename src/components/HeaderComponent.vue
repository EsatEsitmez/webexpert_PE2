<template>
  <header class="navigation">
    <div class="nav-container">
      <div class="brand">
        <a class="navbar-brand" href="">
          <router-link to="/" class="nav-link" active-class="active-link">
            <img src="../assets/products/logo.png" alt="Logo GenkTech"/>
          </router-link>
        </a>
      </div>
      <nav>
        <div>
          <ul class="nav-list">
            <li>
              <router-link to="/" class="nav-link" active-class="active-link">Homepagina</router-link>
            </li>
            <li>
              <router-link to="/products" class="nav-link" active-class="active-link">Producten</router-link>
            </li>
            <li>
              <router-link to="/login" @click="handleLoginClick" class="nav-link" active-class="active-link">
                <img class="usericon" src="../assets/usericon.webp" alt="login" style="width: 70px; height: 40px;" />
              </router-link>
            </li>
            <li>
              <router-link to="/cart" class="nav-link" active-class="active-link">
                <img class="navbar-image" src="../assets/winkelwagen.png" alt="winkelwagen" loading="lazy" id="cart"/>
              </router-link>
            </li>
            <li id="winkelwagentotaal">
              <h1>{{ showtotalItems }}</h1>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  inject: ['cartList'],

  data() {
    return {
      loginRoute: '/login',
      linkText: 'Login',
    };
  },

  computed: {
    totalItems() {
      let total = 0;
      this.cartList.forEach(product => {
        total = Math.round(parseFloat(total) + product.quantity);
      });
      return total;
    },
    showtotalItems() {
      return this.totalItems;
    },
  },

  created() {
    const ingelogd =  1;

    if (ingelogd) {
      this.loginRoute = '/login';
      this.linkText = 'Login';
    } else {
      this.loginRoute = '/login';
      this.linkText = 'ee"n';
    }
  },

  methods: {
    handleLoginClick() {
      const ingelogd = 1;

      if (ingelogd) {
        this.loginRoute = '/login';
        this.linkText = 'Login';
      } else {
        this.loginRoute = '/login';
        this.linkText = 'Login';
      }
    },
  },
}
</script>

<style>

.nav-list li {
  display: flex;
  align-items: center;
}

.usericon {
  padding-top: 1.2rem;
}

.nav-link.active-link {
  color: lightblue;
  font-size: 30px;
}
</style>
