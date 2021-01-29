<template>


  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="/">
            <img src="~/static/logo.png" class="d-inline-block align-top logo" alt="0x1 Staking Pool">
            0x1 Staking Pool
          </b-navbar-brand>
        </b-navbar>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto menu-link">
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="https://swap.0x1.finance" target="_blank">Trade</b-nav-item>
            <b-nav-item href="https://swap.0x1.finance/#/pool" target="_blank">Liquidity Pool</b-nav-item>
			<b-nav-item href="https://0x1.finance" target="_blank">About</b-nav-item>
		  </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item right>
              <div class="wallet" v-if="walletInstalled">
                <span v-if="checkChainId">
                  <span class="addr" v-if="$store.state.connectedAccount">
                    <b-icon-wallet></b-icon-wallet>
                    {{ shortAddr($store.state.connectedAccount) }}
                  </span>
                  </router-link>
                </span>
                <a href="https://docs.binance.org/smart-chain/wallet/metamask.html" target="_blank" v-else>{{$t("navbar.change-to-bsc")}}</a>
              </div>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>


    <div class="container main">
      <b-row>
        <b-col>
        <div class="alert alert-warning"  v-if="walletLocked">
          {{$t("home.unlockWallet")}}
        </div>
          <nuxt />
        </b-col>
      </b-row>
    </div>

    <div class="footer">
      <div class="footer-body">
		<a href="https://0x1-finance.medium.com" class="footer-link" target="_blank">Medium</a>
        <a href="https://twitter.com/0x1Finance" class="footer-link" target="_blank">Twitter</a>
        <a href="https://t.me/finance0x1" class="footer-link" target="_blank">Telegram</a>
        <a href="https://discord.gg/hzc98weRq5" class="footer-link" target="_blank">Discord</a>
		<a href="https://www.reddit.com/r/0x1Finance" class="footer-link" target="_blank">Reddit</a>
      </div>
    </div>
  </div>
</template>

<script>
  import utils from '~/mixins/utils'
  import config from '~/config'
  export default {
    data () {
      return {
        walletInstalled: true,
        walletLocked: false,
        language: {
          en: "English"
        }
      }
    },
    computed: {
      currentLang(){
        return  this.$store.state.locale
      },
      checkChainId() {
        if(/MathWallet/i.test(window.navigator.userAgent)){
          return true
        }
        if(window.detectProvider && window.detectProvider.isTrust) return true;
        if(this.$store.state.isMathWallet) return true;
        return config.chainId == this.$store.state.chainId
      }
    },
    methods: {
      checkLanguage(lang){
        this.$i18n.locale = lang
        this.$store.commit('updateLang', lang)
      },
      shortAddr(addr) {
        return utils.shortAddr(addr)
      },
      async onUnlock() {
        await this.$onConnect()
      }
    },
    async created() {
      try{
        await this.$onConnect();
      } catch(err) {
        if(err.toString() == "Error: User rejected the signature request") {
          this.walletLocked = true
        }
      }
    }
  }
</script>


<style>

  body {
    background: url(https://0x1.finance/bg.jpg);
    background-size: cover;
	font-family: "Lucida Console", "Courier New", monospace;
  }
  .bg-dark {
    background-color: transparent !important;
  }
  .menu-link {
    color: aqua;
	font-size: 1.25rem;
  }
  .footer-link {
    color: black;
    padding: 5px 20px 5px 20px;
    margin-left: 5px;
    margin-right: 5px;
    text-decoration: none;
    background-color: white;
    border-radius: 10px;
  }
  .header {
    background-color: #4C4C4C;
    padding: 0.5rem;
    margin-bottom: 2rem;
    color: #fff;
  }
  .nav-item a {
    font-size: 1.1rem;
  }
  .nav-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wallet {
    /* float: right; */
  }

  .logo {
    padding: 0;
    height: 32px;
  }
  .addr{
    color: #fff;
    font-size: 1.1rem;
  }
  .main {
    min-height: calc(100vh - 80px);
    padding-top: 100px;
  }

  .footer {

  }
  .footer-body{
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 72px;
    width: 100%;
  }
  .support img{
    height: 16px;
  }
  .link {
    margin: 0 0.5rem;
    text-align: center;
  }
  .right{
    display:flex;
    justify-content:flex-end;
    align-items: center;
  }
  .wallet {
    font-weight: bold;
    cursor: pointer;
  }

  .dropdown .btn.dropdown-toggle{
    /* line-height:1; */
    margin-left: 20px;
    padding: 0;
    background-color: transparent;
    color: #fff;
    font-size: 1.1rem;
    border: none;
    outline: none;
  }
  .dropdown .btn, .dropdown .btn.dropdown-toggle:active, .dropdown .btn.dropdown-toggle:hover{
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }
  .dropdown-item.active{
    color: #FFBB00;
    background-color: transparent;
  }
  .dropdown-item:active{
    color: black;
    background-color: transparent;
  }
  .dropdown-menu a{
    color: #16181b;
  }

</style>
