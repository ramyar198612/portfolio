import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name required";

    if (!form.email.trim()) {
      err.email = "Email required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      err.email = "Invalid email";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: form.name,
        from_email: form.email,
      },
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
      alert("Message sent successfully!");
      setForm({ name: "", email: "" });
    })
    .catch(() => alert("Failed to send message"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-xl w-96 space-y-4"
      >
        <h2 className="text-2xl text-cyan-400">Contact Me</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 bg-gray-800"
        />
        {errors.name && <p className="text-red-400">{errors.name}</p>}

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-3 bg-gray-800"
        />
        {errors.email && <p className="text-red-400">{errors.email}</p>}

        <button className="w-full bg-cyan-500 py-3 text-black font-bold">
          Send
        </button>
      </form>
    </div>
  );
}