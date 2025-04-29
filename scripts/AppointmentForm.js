const AppointmentForm = ({ selectedDate, selectedService, addAppointment }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        notes: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!selectedDate || !selectedService) {
            alert('Please select a date and service before booking');
            return;
        }
        
        const newAppointment = {
            ...formData,
            date: selectedDate,
            service: selectedService,
            time: document.getElementById('time').value
        };
        
        addAppointment(newAppointment);
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            notes: ''
        });
    };
    
    return (
        <div className="appointment-form">
            <h2 className="form-title">Book Your Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Preferred Time</label>
                        <select id="time" name="time" required>
                            <option value="">Select a time</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                        </select>
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Any specific concerns or requests?"
                    ></textarea>
                </div>
                
                <div style={{ marginTop: '20px' }}>
                    <button type="submit" className="submit-btn">
                        Book Appointment
                    </button>
                </div>
                
                <div style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
                    {selectedDate && selectedService ? (
                        <p>
                            You are scheduling a {selectedService.name} on{' '}
                            {new Date(selectedDate).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    ) : (
                        <p>Please select a service and date from the options above.</p>
                    )}
                </div>
            </form>
        </div>
    );
};