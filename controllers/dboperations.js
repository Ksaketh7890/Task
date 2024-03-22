const TokenPair = require('../models/schema');

// Create operation
async function createTokenPair(data) {
  try {
    const newTokenPair = await TokenPair.create(data);
    return newTokenPair;
  } catch (error) {
    throw new Error('Could not create token pair: ' + error.message);
  }
}

// Read operation: Get all token pairs
async function getAllTokenPairs() {
  try {
    const tokenPairs = await TokenPair.find({}, { _id: 0, __v: 0 });
    return tokenPairs;
  } catch (error) {
    throw new Error('Could not fetch token pairs: ' + error.message);
  }
}

// Read operation: Get token pair by ID
async function getTokenPairById(id) {
  try {
    const tokenPair = await TokenPair.findById(id, { _id: 0, __v: 0 });
    if (!tokenPair) {
      throw new Error('Token pair not found');
    }
    return tokenPair;
  } catch (error) {
    throw new Error('Could not fetch token pair: ' + error.message);
  }
}

// Update operation
async function updateTokenPair(id, data) {
  try {
    const updatedTokenPair = await TokenPair.findByIdAndUpdate(id, data, { new: true });
    if (!updatedTokenPair) {
      throw new Error('Token pair not found');
    }
    return updatedTokenPair;
  } catch (error) {
    throw new Error('Could not update token pair: ' + error.message);
  }
}

// Delete operation
async function deleteTokenPair(id) {
  try {
    const deletedTokenPair = await TokenPair.findByIdAndDelete(id);
    if (!deletedTokenPair) {
      throw new Error('Token pair not found');
    }
    return deletedTokenPair;
  } catch (error) {
    throw new Error('Could not delete token pair: ' + error.message);
  }
}

module.exports = {
  createTokenPair,
  getAllTokenPairs,
  getTokenPairById,
  updateTokenPair,
  deleteTokenPair
};
