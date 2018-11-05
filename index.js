const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
    res.json({ data: 'Hi' });
});
app.listen(1337).on('listening', () => {
    console.log('Running on port 1337');
}).on('error', (err) => {
    console.log('Error', err);
});