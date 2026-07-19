// import FullCalendar from "@fullcalendar/react";
// import themePlugin from "@fullcalendar/react/themes/forma"; // YOUR THEME
// import dayGridPlugin from "@fullcalendar/react/daygrid";

// import "@fullcalendar/react/skeleton.css"; // ALWAYS NEED SKELETON
// import "@fullcalendar/react/themes/monarch/theme.css"; // YOUR THEME
// import "@fullcalendar/react/themes/monarch/palettes/blue.css"; // YOUR THEME'S PALETTE

import { EventCalendarDemo } from "@/components/event-calendar-demo";

const Calendar = () => {
    return (
        // <FullCalendar
        //     plugins={[themePlugin, dayGridPlugin]}
        //     initialView="dayGridMonth"
        // />
        <EventCalendarDemo />
    );
};

export default Calendar;
