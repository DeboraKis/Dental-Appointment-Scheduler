const AppointmentList = ({ appointments, cancelAppointment, rescheduleAppointment }) => {
    const handleReschedule = (id) => {
        const newDate = prompt('Enter new date (YYYY-MM-DD):');
        if (newDate) {
            rescheduleAppointment(id, newDate);
        }
    };
    
    // Sort appointments by date (newest first)
    const sortedAppointments = [...appointments].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    return (
        <div className="appointment-list">
            <h2 className="list-title">My Appointments</h2>
            
            {sortedAppointments.length === 0 ? (
                <div className="empty-list">
                    <p>You don't have any appointments scheduled.</p>
                </div>
            ) : (
                sortedAppointments.map(appointment => (
                    <div key={appointment.id} className="appointment-item">
                        <div className="appointment-header">
                            <div className="appointment-date">
                                {new Date(appointment.date).toLocaleDateString('en-US', {
                                    weekday: 'short',
                                    month: 'short',
                                    day: 'numeric'
                                })} at {appointment.time}
                            </div>
                            <div className="appointment-status">
                                {appointment.status}
                            </div>
                        </div>
                        
                        <div className="appointment-service">
                            {appointment.service.name}
                        </div>
                        
                        <div className="appointment-details">
                            <p><strong>Patient:</strong> {appointment.name}</p>
                            <p><strong>Contact:</strong> {appointment.phone}</p>
                            {appointment.notes && <p><strong>Notes:</strong> {appointment.notes}</p>}
                        </div>
                        
                        {appointment.status !== 'Cancelled' && (
                            <div className="appointment-actions">
                                <button 
                                    className="action-btn cancel" 
                                    onClick={() => cancelAppointment(appointment.id)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    className="action-btn reschedule"
                                    onClick={() => handleReschedule(appointment.id)}
                                >
                                    Reschedule
                                </button>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};