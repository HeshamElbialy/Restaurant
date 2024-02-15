import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import ClipLoader from "react-spinners/ClipLoader";

import "./date.css";

const Dates = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllReservations = async () => {
    try {
      const response = await axios.get(
        "https://heshamdev-001-site1.gtempurl.com/api/TableReservations"
      );
      setReservations(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllReservations();
  }, []);

  const deleteReservation = async (reservationId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      background: "#000",
      color: "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `https://heshamdev-001-site1.gtempurl.com/api/TableReservations/${reservationId}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            background: "black",
            color: "#fff",
          });
          getAllReservations();
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "There was an error deleting the reservation.",
            icon: "error",
            background: "black",
            color: "#fff",
          });
          console.error(error);
        }
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div>
        <ClipLoader
          className="loader"
          color={"#fac564"}
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="dates">
      <div className="dates-container container">
        <div className="text-box">
          <h2>Reservation Dates</h2>
        </div>
        <div className="table-responsive-sm">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="row">#</th>
                <th scope="row">Name</th>
                <th scope="row">Phone</th>
                <th scope="row">Email</th>
                <th scope="row">Persons</th>
                <th scope="row">Day</th>
                <th scope="row">Control</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.id}</td>
                  <td>{reservation.CustomerFullName}</td>
                  <td>{reservation.CustomerMobile}</td>
                  <td>{reservation.CustomerEmail}</td>
                  <td>{reservation.NoOfPersons}</td>
                  <td>{reservation.ResDate}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => deleteReservation(reservation.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dates;
