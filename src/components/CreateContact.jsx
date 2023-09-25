import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactService from "../services/ContactService";

const CreateContact = () => {
  const [contact, setcontact] = useState({
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };

  const saveContact = (e) => {
    e.preventDefault();
    ContactService.saveContact(contact)
      .then((response) => {
        console.log(response);
        navigate("/ContactList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setcontact({
      id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailId: "",
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-5 mt-3">
            <h3 className="text-center ">Add Contact</h3>
            <div className="card-body">
              <form action="">
                <div className="form-group">
                  <label htmlFor="firstName"> First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    value={contact.firstName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName"> Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    value={contact.lastName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber"> Phone Number:</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    value={contact.phoneNumber}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="emailId"> email Id:</label>
                  <input
                    type="email"
                    name="emailId"
                    className="form-control"
                    value={contact.emailId}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div>
                  <button className="btn btn-warning m-3" onClick={saveContact}>
                    Save
                  </button>
                  <button className="btn btn-danger" onClick={reset}>
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
