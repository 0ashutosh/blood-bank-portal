const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Donor = require('./models/Donor');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/blood-donation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'));

let inventory = {
    A+: 0, A-: 0,
    B+: 0, B-: 0,
    AB+: 0, AB-: 0,
    O+: 0, O-: 0
};

app.post('/donor', async (req, res) => {
    const donor = new Donor(req.body);
    await donor.save();
    res.send({ message: 'Donor registered', donor });
});

app.get('/donors', async (req, res) => {
    const donors = await Donor.find({ approved: true });
    res.send(donors);
});

app.get('/pending-donors', async (req, res) => {
    const donors = await Donor.find({ approved: false });
    res.send(donors);
});

app.post('/approve/:id', async (req, res) => {
    const donor = await Donor.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
    if (donor) {
        inventory[donor.bloodGroup] += 1;
    }
    res.send(donor);
});

app.get('/inventory', (req, res) => {
    res.send(inventory);
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
