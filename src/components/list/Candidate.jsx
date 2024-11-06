import React, { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";

const Candidate = ({ candidates, setCandidates }) => {
   
    const [openform, setOpenform] = useState(false);
    const [candidatename, setCandidatename] = useState('');

    const handleAddCandidate = () => {
        setOpenform(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (candidatename) {
            const newCandidate = {
                id: Date.now(),
                candidatename,
                vote: 0
            };
            setCandidates([...candidates, newCandidate]);
            setCandidatename('');
            setOpenform(false)
        }
    };

    return (
        <>
            <div className="border border-black rounded-lg w-[30%]">
                <div className="flex justify-between items-center p-4 border-b border-black">
                    <h2 className="text-xl font-semibold">Candidates</h2>
                    <button onClick={handleAddCandidate}>
                        <IoMdAddCircle size={20} />
                    </button>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th className="border-b border-black p-2">Name</th>
                            <th className="border-b border-black p-2">Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((item) => (
                            <tr key={item.id}>
                                <td>{item.candidatename}</td>
                                <td>{item.vote}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {openform && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center" >
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
                        <h2 className="text-xl font-semibold mb-4">Add Candidate</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block font-medium">Candidate Name</label>
                                <input
                                    type="text"
                                    value={candidatename}
                                    onChange={(e) => setCandidatename(e.target.value)}
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded"
                            >
                                Add Candidate
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

export default Candidate;
