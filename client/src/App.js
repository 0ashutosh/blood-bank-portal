import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [form, setForm] = useState({ name: '', age: '', bloodGroup: '', contact: '' });
    const [pendingDonors, setPendingDonors] = useState([]);
    const [approvedDonors, setApprovedDonors] = useState([]);
    const [inventory, setInventory] = useState({});

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitDonor = async () => {
        await axios.post('http://localhost:5000/donor', form);
        alert("Submitted for approval");
    };

    const fetchPending = async () => {
        const res = await axios.get('http://localhost:5000/pending-donors');
        setPendingDonors(res.data);
    };

    const approveDonor = async (id) => {
        await axios.post(`http://localhost:5000/approve/${id}`);
        fetchPending();
        fetchApproved();
        fetchInventory();
    };

    const fetchApproved = async () => {
        const res = await axios.get('http://localhost:5000/donors');
        setApprovedDonors(res.data);
    };

    const fetchInventory = async () => {
        const res = await axios.get('http://localhost:5000/inventory');
        setInventory(res.data);
    };

    useEffect(() => {
        fetchPending();
        fetchApproved();
        fetchInventory();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Blood Donation Form</h2>
            <input name="name" placeholder="Name" onChange={handleChange} /><br />
            <input name="age" placeholder="Age" onChange={handleChange} /><br />
            <input name="bloodGroup" placeholder="Blood Group (e.g., A+)" onChange={handleChange} /><br />
            <input name="contact" placeholder="Contact Info" onChange={handleChange} /><br />
            <button onClick={submitDonor}>Submit</button>

            <hr />
            <h2>Admin Panel - Pending Approvals</h2>
            {pendingDonors.map(d => (
                <div key={d._id}>
                    {d.name} - {d.bloodGroup}
                    <button onClick={() => approveDonor(d._id)}>Approve</button>
                </div>
            ))}

            <hr />
            <h2>Approved Donors</h2>
            {approvedDonors.map(d => (
                <div key={d._id}>{d.name} - {d.bloodGroup}</div>
            ))}

            <hr />
            <h2>Blood Inventory</h2>
            {Object.entries(inventory).map(([group, count]) => (
                <div key={group}>{group}: {count}</div>
            ))}
        </div>
    );
}

export default App;
