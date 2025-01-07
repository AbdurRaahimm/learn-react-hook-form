import { ContactData } from "./formType";

interface ContactListProps {
  contacts: ContactData[];
  onEdit: (contact: ContactData) => void;
  onDelete: (id: string) => void;
}

export default function ContactList({
  contacts,
  onEdit,
  onDelete,
}: ContactListProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      {contacts.length === 0 ? (
        <p className="text-gray-500">No contacts found.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li key={contact.id} className="bg-white shadow rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{contact.name}</h3>
                  <p className="text-gray-600">{contact.email}</p>
                  <p className="text-gray-600">{contact.phone}</p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => onEdit(contact)}
                    className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(contact.id!)}
                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
