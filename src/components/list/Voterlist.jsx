import React, { useState } from 'react';

const Voterlist = ({ voter, selectedVoter, setSelectedVoter }) => {
    return (
        <>
            <div className="">
                <h2 className="text-2xl font-bold mb-4">Voters!</h2>
                <select
                    className="border border-gray-300 rounded px-4 py-2"
                    onChange={(e) => setSelectedVoter(parseInt(e.target.value))}
                    value={selectedVoter }
                >
                    <option value="">I am</option>
                    {voter.filter(item => !item.hasvoted).map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.firstname} {item.lastname}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Voterlist;