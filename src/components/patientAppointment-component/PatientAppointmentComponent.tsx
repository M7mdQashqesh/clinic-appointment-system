import "./patientAppointmentComponent.css";
const PatientAppointmentComponent = () => {
  return (
    <div className="patient-appointment-component">
      <div className="container">
        <h2>We'll call you back</h2>
        <form>
          <div className="name-contact">
            <input
              type="text"
              name="patientName"
              placeholder="Full name"
              required
            />
            <input
              type="number"
              name="patientContact"
              placeholder="Mobile number"
              required
            />
          </div>
          <div className="age-gender">
            <input
              type="number"
              name="patientAge"
              placeholder="Your age"
              required
            />
            <select name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="date-time">
            <div className="date">
              <label htmlFor="date">Date</label>
              <input type="date" name="date" id="date" required />
            </div>
            <div className="time">
              <label htmlFor="time">Time</label>
              <input type="time" name="time" id="time" required />
            </div>
          </div>
          <div className="description">
            <textarea
              name="description"
              placeholder="Symptoms description"
              required
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default PatientAppointmentComponent;
