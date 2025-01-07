import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import ContactForm from "../../components/ContactManagement/ContactForm";
import { ContactData } from "../../components/ContactManagement/formType";
import ContactList from "../../components/ContactManagement/ContactList";

export default function ContactManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<ContactData | null>(
    null
  );
  const [contacts, setContacts] = useState<ContactData[]>([]);

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts") || "[]";
    setContacts(JSON.parse(savedContacts));
  }, []);

  useEffect(() => {
    // Save contacts to localStorage whenever the contacts state changes
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const openAddModal = () => {
    setEditingContact(null);
    setIsModalOpen(true);
  };
  const openEditModal = (contact: ContactData) => {
    setEditingContact(contact);
    setIsModalOpen(true);
  };
  const handleAddContact = (contact: ContactData) => {
    const newContact = {
      ...contact,
      id: Math.random().toString(36).substr(2, 9),
    };
    // localStorage.setItem("contacts", JSON.stringify([...contacts, newContact]));
    setContacts([...contacts, newContact]);
    setIsModalOpen(false);

  };

  const handleEditContact = (contact: ContactData) => {
    const updatedContacts = contacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    setContacts(updatedContacts);
    setIsModalOpen(false);
  };

  const handleDeleteContact = (id: string) => {
    const updatedContacts = contacts.filter((c) => c.id !== id);
    setContacts(updatedContacts);
  };
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between">
      <h1 className="text-3xl font-bold mb-8">Contact Management System</h1>
        <button
          onClick={openAddModal}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded mb-4 cursor-pointer "
        >
          Add Contact
        </button>
      </div>

      <ContactList
            contacts={contacts}
            onEdit={openEditModal}
            onDelete={handleDeleteContact}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingContact ? "Edit Contact" : "Add Contact"}
        >
          <ContactForm
            onSubmit={editingContact ? handleEditContact : handleAddContact}
            contact={editingContact || undefined}
          />
        </Modal>
    </div>
  );
}
