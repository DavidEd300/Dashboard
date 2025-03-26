import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "" || senha.trim() === "") {
      setErro("Preencha todos os campos.");
      return;
    }

    setErro("");

    try {
        const response = await fetch("/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              username: email,
              password: senha,
              grant_type: "password",
            }),
          });

      if (!response.ok) throw new Error("Usuário ou senha inválidos");

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", email);
      navigate("/home");
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Esquerda - Imagem */}
      <div className="hidden md:flex w-1/2 bg-blue-100 items-center justify-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/user-login-4268415-3551762.png"
          alt="Login Illustration"
          className="max-w-md"
        />
      </div>

      {/* Direita - Formulário */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-10">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-white p-8 rounded shadow">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Sign in to your Account</h2>
            <p className="text-sm text-gray-500">Welcome back! Please enter your detail</p>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaUser className="absolute left-3 top-3 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaLock className="absolute left-3 top-3 text-gray-400" />
          </div>

          {erro && <p className="text-red-500 text-sm">{erro}</p>}

          <div className="flex justify-between text-sm text-gray-600">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
          >
            Sign In
          </button>

          <div className="text-center text-sm text-gray-500">
            Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
