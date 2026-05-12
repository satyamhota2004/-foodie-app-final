import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">🍽️</div>

        <h1>Welcome Back 👋</h1>
        <p>Login to continue to Foodie App</p>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <div className="login-row">
          <span>☐ Remember me</span>
          <span>Forgot Password?</span>
        </div>

        <button>Login</button>

        <div className="or">OR</div>

        <button className="google-btn">🔵 Login with Google</button>

        <p className="register-text">
          Don't have an account? <b>Register</b>
        </p>
      </div>
    </div>
  );
}

export default Login;