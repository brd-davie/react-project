import React, { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a request to the Hattch API to generate a password reset token
    fetch("https://api.hattch.brdsites.com/api/v1/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.status !== 'error') {
          setMessage(data.description);
        }
        else {
          setMessage(<p className="text-error">{data.description}</p>);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <form onSubmit={handleSubmit} id='form-animation' className='flex flex-col w-[400px] rounded-xl bg-black p-10'>
        {message && <p className='text-success text-center my-5'>{message}</p>}
        <label className="text-white text-lg text-center mb-4">
          Email
        </label>
        <input
          className="input input-accent"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit" className="btn btn-sm btn-primary mt-5 w-1/2  mx-auto">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
