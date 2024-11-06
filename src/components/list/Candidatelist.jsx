import React, { useState } from 'react';

const Candidatelist = ({ candidates, selectedCandidate, setSelectedCandidate }) => {
    return (
        <>
            <div className="">
                <h2 className="text-2xl font-bold mb-4">Candidates</h2>
                <select 
                    className="border border-gray-300 rounded px-4 py-2" 
                    onChange={(e) => setSelectedCandidate(parseInt(e.target.value))}
                    value={selectedCandidate}
                >
                    <option value="">I vote for</option>
                    {candidates.map((candidate) => (
                        <option key={candidate.id} value={candidate.id}>
                            {candidate.candidatename} ({candidate.vote} votes)
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Candidatelist;