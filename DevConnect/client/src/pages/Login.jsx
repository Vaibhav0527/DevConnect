import { useState } from "react";
import Input from "../components/Input";
function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
function handleSubmit(e) {
  e.preventDefault();

  if (!email || !password) {
    setError("All fields are required");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  setError("");

  console.log("Email:", email);
  console.log("Password:", password);
}

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-xl w-[400px]"
      >

        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
                </h1>
        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;