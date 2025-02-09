import './cardAppointmentComponent.css'
import { Appointment } from "../../type/@type";



const CardAppointment = (props :Appointment) => {
  return (
    <div className="card-appointment-container">
      <div className="index-container">
        <p>{props.id}</p>
      </div>  
      <div className="card-information">
        <p><strong>Name:</strong> <span>{props.name}</span></p>
        <p><strong>Age:</strong> <span>{props.age}</span></p>
        <p><strong>Phone:</strong> <span>{props.phone}</span></p>
        <p><strong>Gender:</strong> <span>{props.gender}</span></p>
        <p><strong>Date:</strong> <span>{props.date}</span></p>
        <p><strong>Time:</strong> <span>{props.timeSlot}</span></p>
        <p className='patient-note'><strong>Note:</strong> <span>{props.note}</span></p>
      </div>
      <div className="card-action">
        <select className="status-select" value={props.status} >
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="text"
          className="doctor-note"
          value={props.note}
          placeholder="Add note..."
        />
        <button className="save-note">Save</button>
      </div>
    </div>
  );
};

export default CardAppointment;
