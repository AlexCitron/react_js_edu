import './index.css'
import AddUserForm from "./features/userList/AddUserForm.jsx";
import SelectUserDetails from "./features/userDetails/SelectdUserDetails.jsx";
import UsersList from "./features/userList/UsersList.jsx";

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
