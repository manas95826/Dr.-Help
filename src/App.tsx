import { Routes, Route } from "react-router-dom"
import AuthLayout from "./auth/AuthLayout"
import SignUp from "./auth/forms/SignUp"


function App() {

  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/sign-up' element={<SignUp />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App
