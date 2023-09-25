import React, { useState, useEffect } from "react";
import ContactService from "../services/ContactService";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const navigate = useNavigate();

  const [contacts, setcontacts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await ContactService.getContacts();
        setcontacts(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  const deleteContact = (e, id) => {
    e.preventDefault();
    ContactService.deleteContact(id).then((res) => {
      if (contacts) {
        setcontacts((oldValues) => {
          return oldValues.filter((contact) => contact.id !== id);
        });
      }
    });
  };

  const editContact = (e, id) => {
    e.preventDefault();
    navigate(`/editContact/${id}`);
  };

  return (
    <div>
      <h2 className="text-center mt-5">Contacts List</h2>
      <div className="row">
        <button
          className="btn btn-warning"
          onClick={() => navigate("/createContact")}
        >
          Add Contact
        </button>
      </div>

      <div className="row mt-3">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {contacts.map((contact) => {
                return (
                  <tr key={contact.id}>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.emailId}</td>
                    <td>
                      <button
                        className="btn btn-outline-warning btn-sm me-2"
                        onClick={(e, id) => editContact(e, contact.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={(e, id) => deleteContact(e, contact.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ContactList;
