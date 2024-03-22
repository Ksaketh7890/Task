const mongoose = require('mongoose');
const { Schema } = mongoose;

const tokenPairSchema = new Schema({
  chainId: { type: String, required: true },
  dexId: { type: String, required: true },
  pairAddress: { type: String, required: true },
  baseToken: {
    address: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true }
  },
  quoteToken: {
    address: { type: String, required: true },
    name: { type: String, required: true },
    symbol: { type: String, required: true }
  },
  priceNative: { type: Number, required: true },
  priceUsd: { type: Number, required: true },
  txns: {
    m5: {
      buys: { type: Number, required: true },
      sells: { type: Number, required: true }
    },
    h1: {
      buys: { type: Number, required: true },
      sells: { type: Number, required: true }
    },
    h6: {
      buys: { type: Number, required: true },
      sells: { type: Number, required: true }
    },
    h24: {
      buys: { type: Number, required: true },
      sells: { type: Number, required: true }
    }
  },
  volume: {
    h24: { type: Number, required: true },
    h6: { type: Number, required: true },
    h1: { type: Number, required: true },
    m5: { type: Number, required: true }
  },
  priceChange: {
    m5: { type: Number, required: true },
    h1: { type: Number, required: true },
    h6: { type: Number, required: true },
    h24: { type: Number, required: true }
  },
  liquidity: {
    usd: { type: Number, required: true },
    base: { type: Number, required: true },
    quote: { type: Number, required: true }
  },
  pairCreatedAt: { type: Date, required: true },
  info: {
    imageUrl: { type: String, required: true },
    websites: [{
      label: { type: String, required: true },
      url: { type: String, required: true }
    }],
    socials: [{
      type: { type: String, required: true },
      url: { type: String, required: true }
    }]
  }
});

// Create a model
const TokenPair = mongoose.model('TokenPair', tokenPairSchema);

module.exports = TokenPair;