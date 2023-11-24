import { Routes, Route } from "react-router-dom"
import AuthLayout from "./auth/AuthLayout"
import SignUp from "./auth/forms/SignUp"
import FolderDrop from "./pages/FolderDrop"
import Patient from "./pages/Patient"



function App() {

  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/sign-up' element={<SignUp />}/>
        </Route>


          <Route path='/' element={<FolderDrop />}/>
          <Route path='/patient' element={<Patient />}/>
      </Routes>
    </main>
  )
}

export default App
