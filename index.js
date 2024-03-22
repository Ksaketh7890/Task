const express = require('express');
const app = express();
const db = require('./dbconnection');
const { createTokenPair, getAllTokenPairs, getTokenPairById, updateTokenPair, deleteTokenPair } = require('./controllers/dboperations');
const port = 3000;
db();

app.use(express.json());

app.get('/tokenPairs', async (req, res) => {
    try {
      const tokenPairs = await getAllTokenPairs();
      res.json(tokenPairs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.get('/tokenPairs/:id', async (req, res) => {
    try {
      const tokenPair = await getTokenPairById(req.params.id);
      res.json(tokenPair);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
});
  
app.post('/tokenPairs', async (req, res) => {
    try {
      const newTokenPair = await createTokenPair(req.body);
      res.status(201).json(newTokenPair);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});
  
app.put('/tokenPairs/:id', async (req, res) => {
    try {
      const updatedTokenPair = await updateTokenPair(req.params.id, req.body);
      res.json(updatedTokenPair);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
});
  
app.delete('/tokenPairs/:id', async (req, res) => {
    try {
      const deletedTokenPair = await deleteTokenPair(req.params.id);
      res.json(deletedTokenPair);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
});
  


app.listen(port,(req,res)=>{
    console.log("connected to port 3000 successfully");
});