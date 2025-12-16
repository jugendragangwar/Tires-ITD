import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const vendors = [
  {
    id: 1,
    name: 'Vendor One',
    phone: '+123456789',
    email: 'vendor1@example.com',
    address: '123 Main Street, City A',
  },
  {
    id: 2,
    name: 'Vendor Two',
    phone: '+987654321',
    email: 'vendor2@example.com',
    address: '456 Elm Street, City B',
  },
  {
    id: 3,
    name: 'Vendor Three',
    phone: '+567890123',
    email: 'vendor3@example.com',
    address: '789 Oak Street, City C',
  },
  {
    id: 4,
    name: 'Vendor Two',
    phone: '+987654321',
    email: 'vendor2@example.com',
    address: '456 Elm Street, City B',
  },
];

const VendorCard = ({ name, phone, email, address }) => {
  return (
    <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <div className="flex items-center mb-2">
        <FaPhone className="mr-2 text-[#2C3E50]" />
        <span>{phone}</span>
      </div>
      <div className="flex items-center mb-2">
        <FaEnvelope className="mr-2 text-[#2C3E50]" />
        <span>{email}</span>
      </div>
      <div className="flex items-center">
        <FaMapMarkerAlt className="mr-2 text-[#2C3E50]" />
        <span>{address}</span>
      </div>
    </div>
  );
};

const VendorInformation = () => {
  return (
    <div className="font-[sans-serif] min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-2xl text-[#2C3E50] mb-6">Vendor Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.id}
            name={vendor.name}
            phone={vendor.phone}
            email={vendor.email}
            address={vendor.address}
          />
        ))}
      </div>
    </div>
  );
};

export default VendorInformation;
