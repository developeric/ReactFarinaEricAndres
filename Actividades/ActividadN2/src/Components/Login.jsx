import { useForm } from "../Hooks/UseForm.js";
export default function Login({ onLogin }) {
  const InitialValue = { username: "", password: "" };
  const { form, handleChange, handleReset } = useForm(InitialValue);

  const { username, password } = form;

  const handleSubmit = (evento) => {
    evento.preventDefault()
    onLogin(username);
    console.log(form)
    handleReset()
  };
  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username" 
           value={username}//importante para setear el estado
          placeholder="username"
          />
        <input
          onChange={handleChange}
          type="text"
          name="password"
           value={password}
          placeholder="password"
        />

        <button>Submit</button>
      </form>
    </>
  );
}
