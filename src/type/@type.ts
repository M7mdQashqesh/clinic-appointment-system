export interface Appointment {
    id: number;
    name: string;
    age: number;
    gender: string;
    phone: string;
    date: string;
    timeSlot: string;
    status: "Pending" | "Confirmed" | "Completed";
    note: string;
  };
