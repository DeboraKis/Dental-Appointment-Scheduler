const App = () => {
    const [appointments, setAppointments] = React.useState([]);
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedService, setSelectedService] = React.useState(null);
    const [currentView, setCurrentView] = React.useState('schedule'); // 'schedule' or 'appointments'
    
    const addAppointment = (appointment) => {
        const newAppointment = {
            ...appointment,
            id: Date.now(),
            status: 'Scheduled'
        };
        setAppointments([...appointments, newAppointment]);
        setSelectedDate(null);
        setSelectedService(null);
        
        // Show success message
        alert('Appointment scheduled successfully!');
    };
    
    const cancelAppointment = (id) => {
        const updatedAppointments = appointments.map(appointment => 
            appointment.id === id 
                ? {...appointment, status: 'Cancelled'} 
                : appointment
        );
        setAppointments(updatedAppointments);
    };
    
    const rescheduleAppointment = (id, newDate) => {
        const updatedAppointments = appointments.map(appointment => 
            appointment.id === id 
                ? {...appointment, date: newDate, status: 'Rescheduled'} 
                : appointment
        );
        setAppointments(updatedAppointments);
    };
    
    return (
        <div className="app">
            <Header 
                setCurrentView={setCurrentView} 
                currentView={currentView} 
            />
            
            {currentView === 'schedule' ? (
                <>
                    <ServiceSelector 
                        selectedService={selectedService}
                        setSelectedService={setSelectedService}
                    />
                    
                    <Calendar 
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        appointments={appointments}
                    />
                    
                    <AppointmentForm 
                        selectedDate={selectedDate}
                        selectedService={selectedService}
                        addAppointment={addAppointment}
                    />
                </>
            ) : (
                <AppointmentList 
                    appointments={appointments}
                    cancelAppointment={cancelAppointment}
                    rescheduleAppointment={rescheduleAppointment}
                />
            )}
        </div>
    );
};