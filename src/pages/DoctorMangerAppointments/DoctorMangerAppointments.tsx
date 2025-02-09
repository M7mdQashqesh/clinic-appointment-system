import { Appointment } from "../../type/@type";
import CardAppointment from "../../components/cardAppointment-component/cardAppointmentComponent";
import "./DoctorMangerAppointments.css";
import HeaderComponent from "../../components/header-component/HeaderComponent";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const initialAppointments: Appointment[] = [
  {
    id: 1,
    name: "Ahmad shahier",
    age: 30,
    gender: "Male",
    phone: "123-456-7890",
    date: "2025-02-10",
    timeSlot: "10:00 AM",
    status: "Pending",
    note: "",
  },
  {
    id: 2,
    name: "Ahmad akram",
    age: 25,
    gender: "male",
    phone: "987-654-3210",
    date: "2025-02-11",
    timeSlot: "2:00 PM",
    status: "Confirmed",
    note: "",
  },
  {
    id: 3,
    name: "Hosny ishtaya",
    age: 26,
    gender: "male",
    phone: "987-654-3210",
    date: "2025-02-12",
    timeSlot: "3:00 PM",
    status: "Confirmed",
    note: "",
  },
  {
    id: 4,
    name: "Rola ahmad",
    age: 25,
    gender: "Female",
    phone: "987-654-3210",
    date: "2025-02-13",
    timeSlot: "5:00 PM",
    status: "Confirmed",
    note: "",
  },
  {
    id: 5,
    name: "Mohammed sabbah",
    age: 23,
    gender: "Female",
    phone: "987-654-3210",
    date: "2025-02-11",
    timeSlot: "3:00 PM",
    status: "Confirmed",
    note: "",
  },
];
const DoctorMangerAppointments = () => {
  const [params, setParams] = useSearchParams();
  const [filteredList, setFilteredList] =
    useState<Appointment[]>(initialAppointments);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (query.length) {
      params.set("n", query);
    } else {
      params.delete("n");
    }
    setParams(params);
  };

  const handleStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const query = event.target.value;
    if (query !== "all") {
      params.set("s", query);
    } else {
      params.delete("s");
    }
    setParams(params);
  };

  useEffect(() => {
    const queryName = params.get("n") || "";
    const queryStatus = params.get("s") || "";
    if (queryName) {
      setFilteredList(
        initialAppointments.filter((App) =>
          App.name.toLowerCase().includes(queryName.toLowerCase())
        )
      );
    } else if (queryStatus) {
      setFilteredList(
        initialAppointments.filter(
          (app) => app.status.toLowerCase() === queryStatus.toLowerCase()
        )
      );
    } else {
      setFilteredList(initialAppointments);
    }
  }, [params]);
  return (
    <div className="appointments-container">
      <HeaderComponent />
      <h2>Doctor Manger Appointments</h2>
      <div className="appointments-header">
        <input
          className="search-bar"
          type="text"
          onChange={handleSearch}
          placeholder="Search by Patient Name ..."
        ></input>
        <select className="status-select-bar" onChange={handleStatus}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {filteredList.length ? (
        <div className="appointments-cards">
          {filteredList.map((card) => {
            return (
              <div>
                {
                  <CardAppointment
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    age={card.age}
                    gender={card.gender}
                    date={card.date}
                    timeSlot={card.timeSlot}
                    phone={card.phone}
                    note={card.note}
                    status={card.status}
                  />
                }
              </div>
            );
          })}
        </div>
      ) : (
        <h3>No Patient Found ... </h3>
      )}
    </div>
  );
};

export default DoctorMangerAppointments;
