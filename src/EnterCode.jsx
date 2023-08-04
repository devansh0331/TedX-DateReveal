import React, { useState } from 'react'

import "./App.css"

import { useNavigate } from 'react-router-dom'

function EnterCode() {
  const [inp1, setInp1] = useState('')
  const [inp2, setInp2] = useState('')
  const [inp3, setInp3] = useState('')
  const [inp4, setInp4] = useState('')
    const navigate = useNavigate()
    const handleOnClick = () => {
      if(inp1==1 && inp2==9 && inp3==0 && inp4==8)
        navigate('/dark')
    }
  return (
    <div className="App">
    <form className="otp-Form" onSubmit={handleOnClick}>

{/* <span className="mainHeading"></span> */}
{/* <p className="otpSubheading">We have sent a verification code to your mobile number</p> */}
<div className="inputContainer">
<input required="required" value={inp1} onChange={(e) => {setInp1(e.target.value)}}  maxlength="1" type="number" className="otp-input" id="otp-input1" onKeyUp={(e)=>{document.getElementById('otp-input2').focus()}}/>
<input required="required" value={inp2} onChange={(e) => {setInp2(e.target.value)}}  maxlength="1" type="number" className="otp-input" id="otp-input2" onKeyUp={(e)=>{document.getElementById('otp-input3').focus()}}/>
<input required="required" value={inp3} onChange={(e) => {setInp3(e.target.value)}}  maxlength="1" type="number" className="otp-input" id="otp-input3" onKeyUp={(e)=>{document.getElementById('otp-input4').focus()}}/>
<input required="required" value={inp4} onChange={(e) => {setInp4(e.target.value)}}  maxlength="1" type="number" className="otp-input" id="otp-input4" /> 

</div>
<button className="verifyButton" type="submit">Enter</button>
  {/* <button className="exitBtn">×</button> */}
  {/* <p className="resendNote">Didn't receive the code? <button className="resendBtn">Resend Code</button></p> */}
  
</form>



  </div>
  )
}

export default EnterCode
