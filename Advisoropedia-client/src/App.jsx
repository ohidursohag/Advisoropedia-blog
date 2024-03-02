import useAuth from "./hooks/useAuth"


function App() {
const {user} = useAuth()
console.log(user)
  return (
    <>
     <div className="text-2xl">AdvisoroPedia</div>
     <div className="text-2xl">{user?.fullName}</div>
    </>
  )
}

export default App
