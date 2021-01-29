'use strict'
module.exports = {
	chainId: 56,
	cows: [
		{
			id: 1,
			name: "BIN/BNB LP Token",
			image: "https://0x1.finance/assets/images/logos/logo.png",
			desc: "Reward Halving every 30 days, 0 fee on staked tokens for harvest & unstake",
			initialized: true,
			staking: true,
			harvest: true,
			address: "0x852bd83a6c868f11986624e8495082071ea2041e",
			stakeToken: {
				address: "0xb8202415265a84069437699F1Dd2026335808416",
				decimals: 18,
				symbol: "BIN/BNB LP Token"
			},
			yieldToken: {
				address: "0xcc1da2eaa0150b958fd30c3b849d9efe1d365aed",
				decimals: 18,
				symbol: "BIN"
			}
		},
		{
			id: 2,
			name: "WMUE/BIN LP Token",
			image: "https://s2.coinmarketcap.com/static/img/coins/200x200/706.png",
			desc: "Reward Halving every 30 days, 0 fee on staked tokens for harvest & unstake",
			initialized: true,
			staking: true,
			harvest: true,
			address: "0x6EdB347A56dEC48dA9e7De7Ed8129C365f6FC66e",
			stakeToken: {
				address: "0xdaf4cCf9D8a95C6304018b514C8961Db71Ec4672",
				decimals: 18,
				symbol: "WMUE/BIN LP Token"
			},
			yieldToken: {
				address: "0xcc1da2eaa0150b958fd30c3b849d9efe1d365aed",
				decimals: 18,
				symbol: "BIN"
			}
		},
		{
			id: 3,
			name: "BNB/USDT LP Token",
			image: "https://seeklogo.com/images/B/binance-coin-bnb-logo-97F9D55608-seeklogo.com.png",
			desc: "Reward Halving every 30 days, 0 fee on staked tokens for harvest & unstake",
			initialized: true,
			staking: true,
			harvest: true,
			address: "0x40e082bb2ec0f5801348a9094f434e53c6da3b29",
			stakeToken: {
				address: "0xF7019b0EA2D7bD8BC94394103630e8030788CF12",
				decimals: 18,
				symbol: "BNB/USDT LP Token"
			},
			yieldToken: {
				address: "0xcc1da2eaa0150b958fd30c3b849d9efe1d365aed",
				decimals: 18,
				symbol: "BIN"
			}
		}
	],
	tokens: [
		{
			symbol: "bnb",
			address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
			decimal: 18
		},
		{
			symbol: "WBNB",
			address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
			decimals: 18,
		}
	],
	pair_BNB_BIN: "0xb8202415265a84069437699F1Dd2026335808416",
	pair_WMUE_BIN: "0xdaf4cCf9D8a95C6304018b514C8961Db71Ec4672",
	pair_BNB_USDT: "0xF7019b0EA2D7bD8BC94394103630e8030788CF12",
	pair_WMUE_USDT: "0x912F7aDbA2A86982b9D0Fe3b560CeA17078820Da",
	web3Provider: "https://bsc-dataseed1.defibit.io"
}
