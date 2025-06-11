
const express = require('express');
const app = express();
app.use(express.json());

const users = ['Richard1', 'Lisa1', 'Gray1', 'Toby1', 'MumDad1', 'Smylie1', 'Newman1'];

app.post('/login', (req, res) => {
    const { username } = req.body;
    if (users.includes(username)) {
        return res.status(200).json({ message: 'Login successful' });
    }
    res.status(401).json({ message: 'Invalid user' });
});

app.listen(3000, () => console.log('Dummy backend running on port 3000'));
