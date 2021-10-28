<template>
  <div class="home">
    <img alt="lunch_icon" src="../assets/lunch_icon.png" class="lunch_icon"/>
  </div>
  <div class="container">
    <div class="menu" v-for="item in lunchList" :key="item.name">
      <h2 class="menu-group-heading">
        {{ item.name }}
      </h2>
      <div class="menu-group">
        <div class="menu-item" v-for="menu in item.menu" :key="menu.name">
          <img class="menu-item-image" :src="menu.img" :alt="menu.name">
          <div class="menu-item-text">
            <h3 class="menu-item-heading">
              <span class="menu-item-name">{{menu.name}}</span>
              <span class="menu-item-price">{{menu.price}}</span>
            </h3>
            <p class="menu-item-description">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Lunch",
  components: {},
  data() {
    return {
      lunchList: [],
    };
  },
  mounted() {
    this.getLunchList();
  },
  methods: {
    getLunchList: function () {
      let result = [
        {
          name: "신전떡볶이",
          menu: [
              {name: "떡볶이", price: "3000 원", img: "http://sinjeon.co.kr/img/sub/menu03_dduk1.png"}
              ,{name: "로제떡볶이", price: "5000 원", img: "http://sinjeon.co.kr/img/sub/menu03_dduk3.png"}
              ,{name: "오뎅튀김(6개)", price: "1500 원", img: "http://sinjeon.co.kr/img/sub/menu03_dduk3.png"}
              ,{name: "신전치즈김밥", price: "3500 원", img: "http://sinjeon.co.kr/img/sub/menu01/menu21.png"}
          ]
        }
        ,{
          name: "큰맘할매순대국",
          menu: [
            {name: "순대국", price: "6000 원", img: "http://www.bkfood.kr/renew/image/menu/main_mu4.jpg"}
            ,{name: "수육국밥", price: "7000 원", img: "http://www.bkfood.kr/renew/image/menu/main_mu17.jpg"}
          ]
        }
        ,{
          name: "바삭파삭",
          menu: [
            {name: "새우텐동", price: "7000 원", img: "https://modo-phinf.pstatic.net/20200219_156/1582087008907NLytt_JPEG/mosagUVGR3.jpeg?type=f353_235"}
            ,{name: "가끼아게텐동", price: "9000 원", img: "https://modo-phinf.pstatic.net/20200219_82/1582087212777wKqHN_JPEG/mosaqEYARq.jpeg?type=f353_235"}
          ]
        }
      ];
      this.lunchList = result;
    }
  }
};
</script>

<style scoped>
img.lunch_icon {
  height: 100px;
  width: 100px;
  padding-top: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5em;
}

.menu {
  font-family: "Inter", sans-serif;
  font-size: 14px;
}

.menu-group-heading {
  margin: 0;
  padding-bottom: 1em;
  border-bottom: 2px solid #ccc;
}

.menu-group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
  padding: 1.5em 0;
}

.menu-item {
  display: flex;
}

.menu-item-image {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  object-fit: cover;
  margin-right: 1.5em;
}

.menu-item-text {
  flex-grow: 1;
}

.menu-item-heading {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.menu-item-name {
  margin-right: 1.5em;
}

.menu-item-description {
  line-height: 1.6;
}

@media screen and (min-width: 992px) {
  .menu {
    font-size: 16px;
  }

  .menu-group {
    grid-template-columns: repeat(2, 1fr);
  }

  .menu-item-image {
    width: 125px;
    height: 125px;
  }
}
</style>
