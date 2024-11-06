import React from 'react';
import Voters from './list/Voters';
import Candidate from './list/Candidate';
import Voterlist from './list/Voterlist';
import Candidatelist from './list/Candidatelist';
import { useState } from 'react';

const VoteingApp = () => {
    const [voters, setVoters] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [selectedVoter, setSelectedVoter] = useState(null);
    const [selectedCandidate, setSelectedCandidate] = useState(null);


    const handleVote = () => {
        if (!selectedVoter || !selectedCandidate) {
            alert('Please select both a voter and a candidate');
            return;
        }

        const updatedVoters = voters.map(item =>
            item.id === selectedVoter ? { ...item, hasvoted: true } : item
        );


        const updatedCandidates = candidates.map(item =>
            item.id === selectedCandidate ? { ...item, vote: item.vote + 1 } : item
        );

        setVoters(updatedVoters);
        setCandidates(updatedCandidates);
    };

    return (
        <>

            <div className='w-full flex flex-col justify-center items-center space-y-6'>
                <h1 className='text-[3rem] flex justify-center items-center font-semibold'>Voteing App</h1>
                <div className="flex  w-[80%] mx-auto p-4 justify-center items-center gap-24">
                    <Voters
                        voters={voters}
                        setVoters={setVoters}
                    />
                    <Candidate
                        candidates={candidates}
                        setCandidates={setCandidates}
                    />
                </div>
                <div className="flex w-full mx-auto justify-between items-center flex-col gap-10 ">
                    <div className='flex justify-between items-center space-x-44 gap-4'>
                        <Voterlist
                            voter={voters}
                            selectedVoter={selectedVoter}
                            setSelectedVoter={setSelectedVoter}
                        />
                        <Candidatelist
                            candidates={candidates}
                            selectedCandidate={selectedCandidate}
                            setSelectedCandidate={setSelectedCandidate}
                        />
                    </div>

                    <button className='bg-slate-600 px-4 rounded-lg w-40 h-10 block ml-20' onClick={handleVote} disabled={!selectedVoter || !selectedCandidate}>
                        Cast Your Vote
                    </button>
                </div>
             </div>
        </>
    );
};

export default VoteingApp;

