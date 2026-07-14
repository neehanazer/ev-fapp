import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewEv = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/view-ev")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching booking details:", error);
      });
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container" style={{ padding: 10, margin: "50px auto" }}>
        <h1 style={{ marginBottom: 30 }}>View EV Charging Bookings</h1>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>Booking ID</th>
                <th>Owner Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Vehicle Reg. No.</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Battery (kWh)</th>
                <th>Connector</th>
                <th>Charging Date</th>
                <th>Time Slot</th>
                <th>Estimated Units</th>
                <th>Charging Bay</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.bookingid}</td>
                  <td>{booking.ownername}</td>
                  <td>{booking.email}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.vehicleregno}</td>
                  <td>{booking.vehiclebrand}</td>
                  <td>{booking.vehiclemodel}</td>
                  <td>{booking.batterycapacity}</td>
                  <td>{booking.connectortype}</td>
                  <td>{booking.chargingdate}</td>
                  <td>{booking.timeslot}</td>
                  <td>{booking.estimatedunits}</td>
                  <td>{booking.chargingbaynumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewEv;