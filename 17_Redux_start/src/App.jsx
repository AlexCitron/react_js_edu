import './index.css'
import AddUserForm from "./components/AddUserForm.jsx";
import SelectUserDetails from "./components/SelectdUserDetails.jsx";
import UsersList from "./components/UsersList.jsx";

export default function App() {

  return (
      <main className="mx-auto border border-gray-200 rounded-lg bg-gray-50 w-screen h-screen">
            <div className="w-2xl mx-auto">
              <h1 className="mt-10 text-4xl text-center font font-semibold">User Management App</h1>
              <AddUserForm />
              <SelectUserDetails />
              <UsersList />
            </div>
      </main>
  )
}
