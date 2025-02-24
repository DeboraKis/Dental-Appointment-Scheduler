const ServiceSelector = ({ selectedService, setSelectedService }) => {
    const services = [
        {
            id: 1,
            name: 'Regular Cleaning',
            icon: '🧹',
            duration: '30 min',
            description: 'Standard dental cleaning procedure'
        },
        {
            id: 2,
            name: 'Deep Cleaning',
            icon: '🧼',
            duration: '60 min',
            description: 'Thorough cleaning below the gumline'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            icon: '✨',
            duration: '45 min',
            description: 'Professional teeth whitening treatment'
        },
        {
            id: 4,
            name: 'Dental Exam',
            icon: '🔍',
            duration: '30 min',
            description: 'Comprehensive dental examination'
        },
        {
            id: 5,
            name: 'X-Ray',
            icon: '📷',
            duration: '15 min',
            description: 'Dental x-ray imaging'
        },
        {
            id: 6,
            name: 'Filling',
            icon: '🦷',
            duration: '45 min',
            description: 'Dental cavity filling procedure'
        }
    ];
    
    return (
        <div className="service-selector">
            <h2 className="service-title">Select Dental Service</h2>
            <div className="service-grid">
                {services.map(service => (
                    <div 
                        key={service.id}
                        className={`service-card ${selectedService && selectedService.id === service.id ? 'selected' : ''}`}
                        onClick={() => setSelectedService(service)}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <div className="service-name">{service.name}</div>
                        <div className="service-duration">{service.duration}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};