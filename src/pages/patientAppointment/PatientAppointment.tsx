import HeaderComponent from "../../components/header-component/HeaderComponent";
import PatientAppointmentComponent from "../../components/patientAppointment-component/patientAppointmentComponent";
import "./patientAppointment.css";

const PatientAppointment = () => {
  return (
    <div className="patient-appointment">
      <HeaderComponent />
      <PatientAppointmentComponent />
    </div>
  );
};

export default PatientAppointment;
