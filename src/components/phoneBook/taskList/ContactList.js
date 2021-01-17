import React from "react";
import s from "./ContactList.module.css";

export default function contactsMarkup({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={s.contactItem} key={id}>
            <p className={s.contactText}>
              {name}: {number}
            </p>
            <button onClick={() => onDeleteContact(id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
}
