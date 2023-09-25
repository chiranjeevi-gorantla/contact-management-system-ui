import axios from "axios";

const CONTACT_API_BASE_URL = "http://localhost:8080/api/v1/contacts";

class Contactservice {
  getContacts() {
    return axios.get(CONTACT_API_BASE_URL);
  }

  saveContact(contact) {
    return axios.post(CONTACT_API_BASE_URL, contact);
  }

  deleteContact(id) {
    return axios.delete(CONTACT_API_BASE_URL + "/" + id);
  }

  getContactById(id) {
    return axios.get(CONTACT_API_BASE_URL + "/" + id);
  }

  updateContact(id, contact) {
    return axios.put(CONTACT_API_BASE_URL + "/" + id, contact);
  }
}

export default new Contactservice();
