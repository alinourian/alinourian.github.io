<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/ProjectInfo/Header.vue";

export default {
  name: 'DefaultLayout',
  components: {Footer, Header},
};
</script>

<template>
  <div class="layout-container">
    <header>
      <!-- Header content -->
      <Header/>
    </header>
    <main>
      <!-- The view will be rendered here -->
      <router-view />
    </main>
    <footer>
      <!-- Footer content -->
      <Footer/>
    </footer>
  </div>
</template>


<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  z-index: 100;
  box-shadow: -12px 12px 25px 0 rgba(158, 158, 158, 0.2);
  background-color: #f9f9ff;
  border-bottom: 1px solid #f2f3f3;
}

main {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
}


footer {
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  height: 100px;
  border-top: 1px solid rgba(158, 158, 158, 0.3);
  background-color: #f9f9ff;
  position: relative;
}
</style>