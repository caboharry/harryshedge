import React from 'react';

const AlertsPage: React.FC = () => {
    const handleEnableAlerts = () => {
        // Logic to enable Telegram alerts will go here
        console.log('Alerts enabled');
    };

    return (
        <div>
            <h1>Telegram Alerts</h1>
            <p>This is a placeholder for Telegram alerts feature.</p>
            <button onClick={handleEnableAlerts}>Enable Alerts</button>
        </div>
    );
};

export default AlertsPage;