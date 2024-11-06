import React, { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";

const Voters = ({ voters,  setVoters }) => {
    const [openform, setOpenform] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const handleAddVoter = () => {
        setOpenform(!openform);
    };

    const calculateAge = (birthdate) => {
        const birthDate = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        return age;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const age = calculateAge(birthdate);
        if (age < 18) {
            alert("You are not eligible to vote");
            return;
        }

        setVoters([...voters, { id: Date.now(), firstname, lastname, birthdate, hasvoted: false }]);
        setFirstname('');
        setLastname('');
        setBirthdate('');
        setOpenform(false)
    };

    return (
        <>
            <div className="border border-black rounded-lg w-[30%]">
                <div className="flex justify-between items-center p-4 border-b border-black">
                    <h2 className="text-xl font-semibold">Voters</h2>
                    <button onClick={handleAddVoter}>
                        <IoMdAddCircle size={20} />
                    </button>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="border-b border-black p-2">Name</th>
                            <th className="border-b border-black p-2">Has voted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voters.map((item) => (
                            <tr key={item.id}>
                                <td>{`${item.firstname}  ${item.lastname},  ${item.birthdate}`}</td>
                                <td>{item.hasvoted ? "voted" : "not yet"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {openform && (
                <div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center w-full" >
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Add Voter</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block font-medium">First Name</label>
                                <input
                                    type="text"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Last Name</label>
                                <input
                                    type="text"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block font-medium">Birth Date</label>
                                <input
                                    type="date"
                                    value={birthdate}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded"
                            >
                                Add Voter
                            </button>
                        </form>
                        <button
                            onClick={() => setOpenform(false)}
                            className="mt-4 text-red-500 hover:underline"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Voters;
