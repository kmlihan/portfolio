import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnpadbo");
  const [isSuccessVisible, setIsSuccessVisible] = useState(false); // Track success message visibility
  const [formValues, setFormValues] = useState({ email: "", message: "" });

  useEffect(() => {
    if (state.succeeded) {
      setIsSuccessVisible(true); // Show success message
      const timer = setTimeout(() => {
        setIsSuccessVisible(false); // Hide success message
        setFormValues({ email: "", message: "" }); // Reset form values
      }, 5000); // 5 seconds delay

      // Cleanup timer on component unmount or state change
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact Me
      </h1>
      <p className="sub-title">
      Feel free to reach out for more information or collaborations.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              value={formValues.email} // Controlled input
              onChange={handleChange} // Handle input change
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea
              required
              name="message"
              id="message"
              value={formValues.message} // Controlled input
              onChange={handleChange} // Handle input change
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {isSuccessVisible && (
            <p
              className="flex sub-title"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
