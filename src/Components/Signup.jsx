import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  let navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    username: '',
    password: '',
    rpassword: '',
  })

  const changeHandler = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/welcome/${userDetail.username}`);
    setUserDetail({
      username: '',
      password: '',
      rpassword: '',
    })
  }
  return (
    <main>
      Signup
      <section>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" value={userDetail.username} id="username" name="username" onChange={changeHandler} data-testid="username" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" value={userDetail.password} id="password" name="password" onChange={changeHandler} data-testid="password" />
          <br />
          <label htmlFor="rpassword">Repeat Password</label>
          <input type="password" value={userDetail.rpassword} id="rpassword" name="rpassword" onChange={changeHandler} data-testid="rpassword" />
          <br />
          <input type="submit" data-testid="signupButton" label="Sign Up" />
        </form>
      </section>
    </main>
  )
}

export default Signup; 