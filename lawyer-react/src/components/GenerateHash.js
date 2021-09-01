import React from "react";
import useSignUpForm from "./CustomHooks";

const GenerateHash = () => {
    const signup = () => {
        alert(`User Created!
               Name: ${inputs.firstName} ${inputs.lastName}`);
      }
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);
  

  
    return (
<form onSubmit={handleSubmit}>
  <div className="forms">
<br/>
<br/>
<br/>

<br/>

    <label>First Name</label>
    <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
    <label>Last Name</label>
    <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
  </div>
 

  <button type="submit">Sign Up</button>
</form>

      )
    }

export default GenerateHash;
