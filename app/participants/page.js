import React from 'react';

const participants = [
    {
        id: 1,
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        linkedin: 'https://linkedin.com/in/johndoe',
        leetcode: 'https://leetcode.com/johndoe',
    },
    {
        id: 2,
        name: 'Jane Smith',
        photo: 'https://via.placeholder.com/150',
        linkedin: 'https://linkedin.com/in/janesmith',
        leetcode: 'https://leetcode.com/janesmith',
    },
    // Add more participants as needed
];

const ParticipantsPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Participants</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {participants.map((participant) => (
                    <div
                        key={participant.id}
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            padding: '16px',
                            width: '250px',
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src={participant.photo}
                            alt={participant.name}
                            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        />
                        <h3>{participant.name}</h3>
                        <p>
                            <a href={participant.linkedin} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </p>
                        <p>
                            <a href={participant.leetcode} target="_blank" rel="noopener noreferrer">
                                LeetCode
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ParticipantsPage;