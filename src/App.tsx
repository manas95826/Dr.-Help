import { Routes, Route } from "react-router-dom"
import AuthLayout from "./auth/AuthLayout"
import SignUp from "./auth/forms/SignUp"
import FolderDrop from "./pages/FolderDrop"
import Patient from "./pages/Patient"
import UploadFiles from "./pages/UploadFiles"
import OtpPage from "./auth/forms/OtpPage"



function App() {

  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path="/otp-verification" element={<OtpPage />}/>
        </Route>


          <Route path='/' element={<FolderDrop />}/>
          <Route path='/patient' element={<Patient />}/>
          <Route path="/upload-files" element={<UploadFiles />}/>
      </Routes>
    </main>
  )
}

export default App
