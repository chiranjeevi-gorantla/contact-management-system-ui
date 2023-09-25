import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateContact from "./components/CreateContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route index element={<ContactList />} />
            <Route exact path="/" element={<ContactList />} />
            <Route exact path="/contactList" element={<ContactList />} />
            <Route exact path="/createContact" element={<CreateContact />} />
            <Route exact path="/editContact/:id" element={<EditContact />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
