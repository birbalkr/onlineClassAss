import { useForm } from "react-hook-form";
import "./App.css";
import axios from "axios";

function App() {
  const { register, handleSubmit, reset, formState:{errors} } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("age", data.age);
    formData.append("profileImage", data.profileImage[0]);

    await axios.post("http://localhost:3000/user/create", formData, {
      withCredentials: true,
    });

    reset();
  };

  return (
    <main className="page-shell">
      <section className="form-panel" aria-labelledby="page-title">
        <p className="eyebrow">New profile</p>
        <h1 id="page-title">Add a person</h1>
        <p className="intro">
          Save a name, age, and a profile image in one quick step.
        </p>

        <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Alex Morgan"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            min="1"
            max="120"
            placeholder="e.g. 28"
            {...register("age", {
              required: "Age is required",
              min: { value: 1, message: "Enter a valid age" },
              max: { value: 120, message: "Enter a valid age" },
            })}
          />
          {errors.age && <span className="error">{errors.age.message}</span>}

          <label htmlFor="profileImage">Profile image</label>
          <input
            id="profileImage"
            type="file"
            accept="image/*"
            {...register("profileImage", {
              required: "Please choose an image",
            })}
          />
          {errors.profileImage && (
            <span className="error">{errors.profileImage.message}</span>
          )}

          <button type="submit">
            Save profile
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
