import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import PatientAppointment from "./pages/patientAppointment/PatientAppointment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/PatientAppointment" element={<PatientAppointment />} />
      </Routes>
    </>
  );
}

export default App;
