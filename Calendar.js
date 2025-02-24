const Calendar = ({ selectedDate, setSelectedDate, appointments }) => {
    const [currentMonth, setCurrentMonth] = React.useState(new Date());
    
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };
    
    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };
    
    const formatDate = (year, month, day) => {
        return new Date(year, month, day).toISOString().split('T')[0];
    };
    
    const isDateSelected = (dateString) => {
        return selectedDate === dateString;
    };
    
    const isAppointmentOnDate = (dateString) => {
        return appointments.some(app => app.date === dateString && app.status !== 'Cancelled');
    };
    
    const renderCalendar = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);
        
        const days = [];
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }
        
        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateString = formatDate(year, month, day);
            const isSelected = isDateSelected(dateString);
            const hasAppointment = isAppointmentOnDate(dateString);
            
            const today = new Date();
            const isToday = today.getFullYear() === year && 
                           today.getMonth() === month && 
                           today.getDate() === day;
                           
            const isPast = new Date(dateString) < new Date(new Date().setHours(0,0,0,0));
            
            let className = "calendar-day";
            if (!isPast) className += " day-available";
            if (isSelected) className += " day-selected";
            if (isToday) className += " day-today";
            
            days.push(
                <div 
                    key={day} 
                    className={className}
                    onClick={() => !isPast && setSelectedDate(dateString)}
                >
                    <div className="day-number">{day}</div>
                    <div className="day-slots">
                        {hasAppointment ? 'Booked' : isPast ? '' : 'Available'}
                    </div>
                </div>
            );
        }
        
        return days;
    };
    
    const goToPrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };
    
    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };
    
    return (
        <div className="calendar">
            <div className="calendar-header">
                <h2 className="calendar-title">Select Appointment Date</h2>
                <div className="calendar-nav">
                    <button onClick={goToPrevMonth}>Previous</button>
                    <span>{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                    <button onClick={goToNextMonth}>Next</button>
                </div>
            </div>
            
            <div className="calendar-grid">
                <div className="calendar-day">Sun</div>
                <div className="calendar-day">Mon</div>
                <div className="calendar-day">Tue</div>
                <div className="calendar-day">Wed</div>
                <div className="calendar-day">Thu</div>
                <div className="calendar-day">Fri</div>
                <div className="calendar-day">Sat</div>
                
                {renderCalendar()}
            </div>
        </div>
    );
};