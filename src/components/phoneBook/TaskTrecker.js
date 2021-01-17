import React from "react";
import ContactForm from "./taskForm/ContactForm";
import ContactList from "./taskList/ContactList";
import { v4 as uuidv4 } from "uuid";
import Filter from "./Filter";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (data) => {
    const newContact = { ...data, id: uuidv4() };

    if (
      this.state.contacts
        .map((contact) => contact.name.toLocaleLowerCase())
        .includes(data.name)
    ) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalazedFilter = filter.toLocaleLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(normalazedFilter)
    );
  };

  render() {
    const filteredContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

// class TaskTrecker extends Component {
//   state = {
//     contacts: [],
//   };

//   addTask = (contact) => {
//     this.setState((prev) => ({
//       contacts: [...prev.contacts, { id: uuidv4(), ...contact }],
//     }));
//   };
//   deleteTask = (e) => {
//     const id = e.target.dataset.id;
//     this.setState({
//       contacts: [...this.state.contacts.filter((contact) => contact.id !== id)],
//     });
//   };
//   render() {
//     return (
//       <div>
//         <TaskForm addTask={this.addTask} />
//         <TaskList contacts={this.state.contacts} deleteTask={this.deleteTask} />
//       </div>
//     );
//   }
// }

// export default TaskTrecker;
