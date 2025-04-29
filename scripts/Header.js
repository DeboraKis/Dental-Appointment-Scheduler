const Header = ({ setCurrentView, currentView }) => {
    return (
        <div className="header">
            <div className="logo">🦷</div>
            <div className="clinic-info">
                <h1 className="clinic-name">White Smile Dental Clinic</h1>
                <p className="clinic-address">567 Dental Street, London, W222KL</p>
            </div>
            <div className="nav-buttons">
                <button 
                    className={`submit-btn ${currentView === 'schedule' ? 'active' : ''}`}
                    onClick={() => setCurrentView('schedule')}
                >
                    Schedule
                </button>
                <button 
                    className={`submit-btn ${currentView === 'appointments' ? 'active' : ''}`}
                    style={{ marginLeft: '10px', backgroundColor: currentView === 'appointments' ? '#1a91d1' : '#78cff5' }}
                    onClick={() => setCurrentView('appointments')}
                >
                    My Appointments
                </button>
            </div>
        </div>
    );
};