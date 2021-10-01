<template>
  <div class="inputBoard">
    <label for="title" class="input-label">Title</label>
    <input type="text" class="input-text" id="title"/>
    <br/>
    <label for="" class="input-label">Content</label>
    <textarea class="input-text" id="contents" rows="4"/>
    <br/>
    <button class="button-4" role="button">Submit</button>
  </div>
  <div class="list">
    <ol>
      <li class="" v-for="item in fakeDbList" :key="item.id">
        <span>{{ item.title }}</span>
        <div class="contents">{{ item.contents }}</div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "FakeDb",
  data() {
    return {
      fakeDbList: [],
      fakeDbData: {},
    };
  },
  mounted() {
    this.getFakeDbData(0);
  },
  methods: {
    getFakeDbData: function (typeNo) {
      let fakeDbType = ["posts", "comments", "profile", "db"];
      let url = "https://my-json-server.typicode.com/gray-kim/fake_db/";
      let queryParams = fakeDbType[typeNo];

      console.log(url + queryParams);

      this.axios.get(url + queryParams).then((result) => {
        console.log(result.data);
        if (result.data.length > 0) {
          if (typeNo == 0 || typeNo == 1) {
            this.fakeDbList = result.data;
          } else {
            this.fakeDbData = result.data;
          }
        }
      });
    },
  },
};
</script>

<style scoped>
:root {
  /* generic */
  --gutterSm: 0.4rem;
  --gutterMd: 0.8rem;
  --gutterLg: 1.6rem;
  --gutterXl: 2.4rem;
  --gutterXx: 7.2rem;
  --colorPrimary400: #7e57c2;
  --colorPrimary600: #5e35b1;
  --colorPrimary800: #4527a0;
  --fontSizeSm: 1.2rem;
  --fontSizeMd: 1.6rem;
  --fontSizeLg: 2.1rem;
  --fontSizeXl: 2.8rem;
  --fontSizeXx: 3.6rem;
  --lineHeightSm: 1.1;
  --lineHeightMd: 1.8;
  --transitionDuration: 300ms;
  --transitionTF: cubic-bezier(0.645, 0.045, 0.355, 1);

  /* floated labels */
  --inputFontSize: var(--fontSizeXx);
  --inputLineHeight: var(--lineHeightMd);
  --labelScaleFactor: 0.8;
  --labelDefaultPosY: 50%;
  --inputTransitionDuration: var(--transitionDuration);
  --inputTransitionTF: var(--transitionTF);
}

div {
  padding-top: 20px;
}

.inputBoard {
  position: relative;
  padding: 30px 500px 0 500px;
}

.input-label {
  position: relative;
}

.input-text {
  display: block;
  margin: 10px 0 0 0;
  color: inherit;
  width: 100%;
  font-family: inherit;
  font-size: var(--inputFontSize);
  font-weight: inherit;
  line-height: var(--inputLineHeight);
  border: 1px solid #ffffff;
  border-radius: 0.4rem;
  transition: box-shadow var(--transitionDuration);
}

.input-text::placeholder {
  color: #B0BEC5;
}

.input-text:focus {
  outline: none;
  box-shadow: 0.2rem 0.8rem 1.6rem var(--colorPrimary600);
}

 /* CSS */
.button-4 {
 appearance: none;
 background-color: #FAFBFC;
 border: 1px solid rgba(27, 31, 35, 0.15);
 border-radius: 6px;
 box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
 box-sizing: border-box;
 color: #24292E;
 cursor: pointer;
 display: inline-block;
 font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
 font-size: 14px;
 font-weight: 500;
 line-height: 20px;
 list-style: none;
 padding: 6px 16px;
 position: relative;
 transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 vertical-align: middle;
 white-space: nowrap;
 word-wrap: break-word;
}

.button-4:hover {
  background-color: #F3F4F6;
  text-decoration: none;
  transition-duration: 0.1s;
}

.button-4:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

.button-4:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.button-4:focus {
  outline: 1px transparent;
}

.button-4:before {
  display: none;
}

.button-4:-webkit-details-marker {
  display: none;
}

ol {
  counter-reset: li;
  list-style: none;
  padding: 0 300px 0 300px;
  text-shadow: 0 1px 0 rgba(255,255,255,.5);
}

ol span {
  position: relative;
  display: block;
  padding: .4em .4em .4em .8em;
  margin: .5em 0 .5em 2.5em;
  background: #D3D4DA;
  color: #444;
  text-decoration: none;
  transition: all .3s ease-out;
}

ol div.contents {
  position: relative;
  display: block;
  padding: .4em .4em .4em .8em;
  margin: .5em 0 .5em 2.5em;
  text-decoration: none;
  border: 3px dotted #ffffff;
}

ol span:hover {background: #DCDDE1;}
ol span:before {
  content: counter(li);
  counter-increment: li;
  position: absolute;
  left: -2.5em;
  top: 50%;
  margin-top: -1em;
  background: #f9dd94;
  height: 2em;
  width: 2em;
  line-height: 2em;
  text-align: center;
  font-weight: bold;
}

ol span:after {
  position: absolute;
  content: "";
  border: .5em solid transparent;
  left: -1em;
  top: 50%;
  margin-top: -.5em;
  transition: all .3s ease-out;
}

ol span:hover:after {
  left: -.5em;
  border-left-color: #f9dd94;
}
</style>
