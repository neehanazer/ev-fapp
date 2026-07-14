import React from "react";
import axios from "axios";
// import NavBar from "./NavBar";

const AddEv = () => {
  const [data, setData] = React.useState({
    bookingid: "",
    ownername: "",
    email: "",
    phone: "",
    vehicleregno: "",
    vehiclebrand: "",
    vehiclemodel: "",
    batterycapacity: "",
    connectortype: "",
    chargingdate: "",
    timeslot: "",
    estimatedunits: "",
    chargingbaynumber: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/add-booking", data)
      .then((res) => {
        alert("Booking Added Successfully");

        setData({
          bookingid: "",
          ownername: "",
          email: "",
          phone: "",
          vehicleregno: "",
          vehiclebrand: "",
          vehiclemodel: "",
          batterycapacity: "",
          connectortype: "",
          chargingdate: "",
          timeslot: "",
          estimatedunits: "",
          chargingbaynumber: "",
        });
      })
      .catch((err) => {
        alert("Error Adding Booking");
        console.log(err);
      });
  };

  return (
    <div>
      {/* <NavBar /> */}

      <div className="container" style={{ padding: 10, margin: 50 }}>
        <h2 style={{ marginBottom: 40 }}>EV Charging Booking</h2>

        <form onSubmit={handleSubmit} className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Booking ID</label>
            <input
              type="text"
              className="form-control"
              name="bookingid"
              value={data.bookingid}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Owner Name</label>
            <input
              type="text"
              className="form-control"
              name="ownername"
              value={data.ownername}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Vehicle Registration No.</label>
            <input
              type="text"
              className="form-control"
              name="vehicleregno"
              value={data.vehicleregno}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Vehicle Brand</label>
            <input
              type="text"
              className="form-control"
              name="vehiclebrand"
              value={data.vehiclebrand}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Vehicle Model</label>
            <input
              type="text"
              className="form-control"
              name="vehiclemodel"
              value={data.vehiclemodel}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Battery Capacity (kWh)</label>
            <input
              type="number"
              className="form-control"
              name="batterycapacity"
              value={data.batterycapacity}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Connector Type</label>
            <select
              className="form-select"
              name="connectortype"
              value={data.connectortype}
              onChange={handleChange}
              required
            >
              <option value="">Select Connector</option>
              <option value="CCS2">CCS2</option>
              <option value="Type 2">Type 2</option>
              <option value="CHAdeMO">CHAdeMO</option>
              <option value="GB/T">GB/T</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">Charging Date</label>
            <input
              type="date"
              className="form-control"
              name="chargingdate"
              value={data.chargingdate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Time Slot</label>
            <input
              type="text"
              className="form-control"
              name="timeslot"
              placeholder="09:00 AM - 10:00 AM"
              value={data.timeslot}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Estimated Units (kWh)</label>
            <input
              type="number"
              className="form-control"
              name="estimatedunits"
              value={data.estimatedunits}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Charging Bay Number</label>
            <input
              type="text"
              className="form-control"
              name="chargingbaynumber"
              value={data.chargingbaynumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddEv;