import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const PredictionsPage = () => {
  const [predictions, setPredictions] = useState([]);
  const [filteredPredictions, setFilteredPredictions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch predictions from an API or a data source
    const fetchPredictions = async () => {
      const response = await fetch('/api/predictions'); // Change this to your actual API
      const data = await response.json();
      setPredictions(data);
      setFilteredPredictions(data);
    };

    fetchPredictions();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredPredictions(predictions);
    } else {
      setFilteredPredictions(predictions.filter(pred => pred.category === category));
    }
  };

  const handleUpgrade = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  }; 

  return (
    <div>
      <h1>Predictions</h1>
      <div>
        <label>Filter by category:</label>
        <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
          <option value="all">All</option>
          <option value="sports">Sports</option>
          <option value="politics">Politics</option>
          <option value="finance">Finance</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <ul>
        {filteredPredictions.map(prediction => (
          <li key={prediction.id}>
            {prediction.title} - {prediction.category}
            {prediction.locked && <Button onClick={handleUpgrade}>Upgrade to view</Button>}
          </li>
        ))}
      </ul>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Upgrade Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>You need to upgrade to view this content. Would you like to upgrade now?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}> 
            Close
          </Button>
          <Button variant="primary" onClick={() => {/* Implement upgrade function */}}>
            Upgrade
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PredictionsPage;
