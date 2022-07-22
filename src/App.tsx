import React, { useState } from "react";
import OtpInputField from "./otpInput";

function App() {
  const [otp, setOtp] = useState<string>("");
  const onChange = (value: string) => setOtp(value);
  return (
    <div className="App">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <OtpInputField value={otp} valueLength={6} onChange={onChange} />
    </div>
  );
}

export default App;
