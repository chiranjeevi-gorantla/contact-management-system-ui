import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactService from "../services/ContactService";

const EditContact = () => {
  const { id } = useParams();

  const [contact, setcontact] = useState({
    id: id,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ContactService.getContactById(id);
        setcontact(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateContact = (e) => {
    e.preventDefault();
    ContactService.updateContact(id, contact)
      .then((response) => {
        navigate("/ContactList");
      })
      .catch((error) => {
        console.log(error);
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
                  <button
                    className="btn btn-warning m-3"
                    onClick={updateContact}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => navigate("/ContactList")}
                  >
                    Cancel
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

export default EditContact;
