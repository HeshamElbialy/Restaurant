import React, { useEffect, useState } from "react";
import PageHead from "../../components/PageHead";
import axios from "axios";
import { toast } from "react-toastify";
import "./reservation.css";
import Aos from "aos";

const isValidName = (name) => name.trim() !== "";
const isValidPhone = (phone) => phone.trim() !== "";
const isValidEmail = (email) =>
  email.trim() !== "" &&
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);
const isValidPersons = (persons) =>
  persons.trim() !== "" &&
  parseInt(persons.trim()) >= 1 &&
  parseInt(persons.trim()) <= 10;
const isValidDate = (day) => day !== "";

const Reservation = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [persons, setPersons] = useState("");
  const [day, setDay] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [personsError, setPersonsError] = useState("");
  const [dayError, setDayError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const nameIsValid = isValidName(name);
    const phoneIsValid = isValidPhone(phone);
    const emailIsValid = isValidEmail(email);
    const personsIsValid = isValidPersons(persons);
    const dayIsValid = isValidDate(day);

    setNameError(nameIsValid ? "" : "Name is required.");
    setPhoneError(phoneIsValid ? "" : "Phone number is required.");
    setEmailError(emailIsValid ? "" : "Email is required.");
    setPersonsError(
      personsIsValid
        ? ""
        : "Number of persons is required and must be less than 11."
    );
    setDayError(dayIsValid ? "" : "Date is required.");

    if (
      nameIsValid &&
      phoneIsValid &&
      emailIsValid &&
      personsIsValid &&
      dayIsValid
    ) {
      try {
        const response = await axios.post(
          "https://heshamdev-001-site1.gtempurl.com/api/TableReservations",
          {
            CustomerFullName: name,
            CustomerMobile: phone,
            CustomerEmail: email,
            NoOfPersons: persons,
            ResDate: day,
          }
        );
        console.log(response);
        toast.success("Your request is successfully sent.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        // Reset form fields
        setName("");
        setPhone("");
        setEmail("");
        setPersons("");
        setDay("");
      } catch (error) {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="reservation">
      <PageHead title="Reservation">
        <h6>
          <a href="/">Home</a> Reservation
        </h6>
      </PageHead>
      <div className="head text-center">
        <h3>Book a table</h3>
        <h2>Make Reservation</h2>
      </div>
      <div className="reservation-container container">
        <form onSubmit={submit}>
          <div className="box d-flex justify-content-center">
            <div className="form">
              <div className="div">
                <input
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="500"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="text-danger">{nameError}</p>}
              </div>
              <div className="div">
                <input
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {phoneError && <p className="text-danger">{phoneError}</p>}
              </div>
              <div className="div">
                <input
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="700"
                  className="w-100"
                  type="text"
                  placeholder="Person Number"
                  value={persons}
                  onChange={(e) => setPersons(e.target.value)}
                />
                {personsError && <p className="text-danger">{personsError}</p>}
              </div>
            </div>
            <div className="form">
              <div className="div">
                <input
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="800"
                  type="text"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-danger">{emailError}</p>}
              </div>
              <div className="div">
                <input
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="900"
                  type="date"
                  placeholder="Day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
                {dayError && <p className="text-danger">{dayError}</p>}
              </div>
            </div>
          </div>
          <div className="button text-center">
            <button type="submit">Reservation</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
