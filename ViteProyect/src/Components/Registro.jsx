import { useForm } from "../Hooks/UseForm.js";
export function Register() {
  const InitialValue = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };
  const { form, handleChange, handleReset } = useForm(InitialValue);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    handleReset();
  };
  //
  const {username,email,password,firstname,lastname}= form
  return (
    <>
      <form className="registerForm"   onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={username}
          placeholder="username"
        />
        <input
          onChange={handleChange}
          type="text"
          name="password"
           value={password}
          placeholder="password"
        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
           value={email}
          placeholder="email"
        />
        <input
          onChange={handleChange}
          type="text"
          name="firstname"
           value={firstname}
          placeholder="firstname"
        />
        <input
          onChange={handleChange}
          type="text"
          name="lastname"
           value={lastname}
          placeholder="lastname"
        />

        <button>Reset</button>
      </form>
    </>
  );
}
