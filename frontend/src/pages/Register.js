function Register() {
  return (
    <div className="container">
      <h1>Register</h1>

      <form className="form">
        <input type="text" placeholder="Name" />

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;