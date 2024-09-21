import React from 'react';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Include Navbar */}
      <SignupForm />
    </div>
  );
}

export default App;
