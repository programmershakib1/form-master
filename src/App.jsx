import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {

  // const handleSingUpSubmit = data => {
  //   console.log('sing up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('update', data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      
      <Grandpa></Grandpa>
      
      <SimpleForm></SimpleForm>
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm formTitle={'Sing Up'} handleSubmit={handleSingUpSubmit}>
        <div>
          <h2>Sing Up</h2>
          <p>please sing up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>always keep your profile update</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App
