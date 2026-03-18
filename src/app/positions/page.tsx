import React, { useState } from 'react';

const positions = [
  // Sample data for positions, replace this with real data.
  { id: 1, name: 'Position A', locked: false },
  { id: 2, name: 'Position B', locked: true },
  { id: 3, name: 'Position C', locked: false },
];

const Page = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);

  const handlePositionClick = (position) => {
    if (position.locked) {
      setShowUpgradePrompt(true);
    } else {
      setSelectedPosition(position);
    }
  };

  const closeModal = () => {
    setSelectedPosition(null);
    setShowUpgradePrompt(false);
  };

  return (
    <div>
      <h1>Positions</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {positions.map(position => (
          <div key={position.id} onClick={() => handlePositionClick(position)}>
            <h2>{position.name}</h2>
            {position.locked && <p>This content is locked, upgrade to access.</p>}
          </div>
        ))}
      </div>

      {selectedPosition && (
        <div className="modal">
          <h2>{selectedPosition.name}</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      )}

      {showUpgradePrompt && (
        <div className="modal">
          <h2>Upgrade Required</h2>
          <p>This position is locked. Please upgrade your account to view the details.</p>
          <button onClick={() => setShowUpgradePrompt(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Page;