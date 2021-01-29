<template>
  <div>
    <div>
      <div class="intro">
        <h3>
          {{$t("home.protocol-name")}}
        </h3>
        <p>
          Stake 0x1 LP tokens (generated from <a href="https://swap.0x1.finance" target="_blank">swap.0x1.finance</a>) to earn BIN tokens.<br><br>
		  <font style="color: red;">BIN tokensale is going on: <a href="https://0x1.finance/mainsale/" target="_blank">0x1.finance/mainsale</a></font>
        </p>
      </div>
    </div>
    <br>
	
	<div class="price alert alert-success">
      <marquee>1 BIN = {{ priceBNBBIN ? (priceBNBBIN * priceBNBUSDT).toFixed(2) : '--' }} USDT |
      1 BNB = {{ priceBNBUSDT ? priceBNBUSDT.toFixed(2) : '--' }} USDT |
	  1 WMUE = {{ priceWMUEUSDT ? (1/priceWMUEUSDT).toFixed(6) : '--' }} USDT</marquee>
	  <small><b>NOTE:</b> PRICE FEED IS IMPORTED FROM 0x1 AMM DEX</small>
    </div>
	<br>
	
    <div class="row">
      <div class="col-md-4 cow" v-for="(cow, i) in cows" :key="i">
        <div class="card mb-4 text-white bg-card cow">
          <div class="card-body">
            <img :src="cow.image" class="tokenlogo">
            <h8 class="card-title title">{{ cow.name }}</h8>
            <!-- <div class="desc">{{ cow.stakeToken.symbol }}</div> -->
            <div class="desc">{{$t("home.card-desc", { symbol: cow.stakeToken.symbol })}}</div>
            <p class="card-text apy"> APY: {{apy[cow.id]}}% </p>
            <a :href="'/pool/' + cow.id" v-if="cow.initialized" class="btn btn-block btn-x">
              {{$t("home.select")}}
            </a>
            <a href="#" v-else class="btn btn-secondary btn-block">{{$t("home.coming-soon")}}</a>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
  import config from '~/config'
  import { Pair, Erc20Reader, CowReader } from '~/contracts'
  import { BigNumber } from 'bignumber.js'

  export default {
    data () {
      return {
        cows: config.cows,
        priceBNBBIN: null,
        priceWMUEBIN: null,
		priceBNBUSDT: null,
		priceWMUEUSDT: null,
        apy: {
          1: '--',
		  2: '--',
		  3: '--'
        }
      }
    },
    methods: {

    },
    async mounted() {
      let pair = new Pair()
      let promises = [ pair.getPriceOfBNBBIN(), pair.getPriceOfBNBUSDT(), pair.getPriceOfWMUEBIN(), pair.getPriceOfWMUEUSDT()];
      let prices = await Promise.all(promises);

      this.priceBNBBIN =  BigNumber(prices[0]);
      this.priceBNBUSDT = BigNumber(prices[1]);
      this.priceWMUEBIN = BigNumber(prices[2]);
	  this.priceWMUEUSDT = BigNumber(prices[3]);
      

      this.cows.map(async(cow) => {
        if(cow.initialized) {
          let erc20Reader = new Erc20Reader(cow.stakeToken.address, cow.stakeToken.symbol, cow.stakeToken.decimals)
          let cowReader = new CowReader(cow.address, cow.stakeToken, cow.yieldToken)
          let rewardRate = await cowReader.rewardRate();
          let balance = await cowReader.totalSupply();
          let rewards = rewardRate.times(365 * 24 * 60 * 60).div(balance)

          if(cow.id == 1) {
            this.apy[1] = rewards.times(this.priceBNBBIN).times(200).toFixed(2)
          } else if(cow.id == 2) {
            this.apy[2] = rewards.times((this.priceWMUEBIN) / (this.priceWMUEUSDT)).times(200).toFixed(2)
          } else if(cow.id == 3) {
            this.apy[3] = rewards.times(this.priceBNBBIN * this.priceBNBUSDT).times(200).toFixed(2)
          }
        }
        return cow
      });
    }
  }
</script>

<style scoped>

  .intro {
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 5px 0px;
    padding: 15px 15px 5px 15px;
  }
  .btn-x {
    color: white;
    background-color: blue;
  }
  .btn-x:hover {
    color: black;
    background-color: aqua;
  }
  .bg-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 5px 0px;
    padding: 15px 15px 5px 15px;
  }
  .cover {
    text-align: center;
  }
  .title {
    margin-bottom: 0.1rem !important;
  }
  .desc {
    font-size: 0.9rem;
    color: #ac1cee;
  }
  @media (max-width:767px){
    .col-md-4.cow {
      width: 100%;
    }
    .cow.card img.tokenlogo{
      max-width: 100px;
    }
  }
  .cow.card img.tokenlogo {
    display:block;
    margin: 0 auto;
    max-width:150px;
  }
  .cover img {
    display: inline-block;
    width: 50px;
    text-align: center;
  }
  .cow {
    margin-bottom: 1rem;
  }
  .cow img {
    width: 100%;
    padding: 1rem;
    text-align: center;
    display: inline-block;
  }
  .avatar {
    text-align: center;
    font-size: 5rem;
  }
  .milk {
    width: 3rem;
  }
  .apy {
    font-size: 0.9rem;
    color: #007bff;
  }

</style>
