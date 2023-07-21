import axios from 'axios';
import React from 'react';

const DonationList = () => {
  const donations =  [
    {
      userId: 'user1_id', // Replace with an actual user ID from the 'user' collection
      name: 'John Doe',
      amount: 100,
      message: 'Wishing you all the best!',
      category: 'health',
    },
    {
      userId: 'user2_id', // Replace with an actual user ID from the 'user' collection
      name: 'Jane Smith',
      amount: 50,
      message: 'For a brighter future!',
      category: 'education',
    },
    {
      userId: 'user3_id', // Replace with an actual user ID from the 'user' collection
      name: 'Anonymous',
      amount: 20,
      message: 'Hope this helps!',
      category: 'food',
    },
    // Add more donation objects as needed
  ];

  // Inline style object for the container
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f5f5f5',
  };

  // Inline style object for the donation items

  // Inline style object for the header
  const donationItemStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const headerStyle = {
    textAlign: 'center',
    fontSize: '32px',
    marginBottom: '40px',
    color: '#333',
  };

  const headingStyle = {
    marginBottom: '10px',
    color: '#333',
    fontSize: '24px',
  };

  const detailStyle = {
    margin: '0',
    color: '#777',
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    marginLeft: '10px',
  };

  const handleUpdateDonation = async (id) => {
    try {
      const token = ''; // Replace with your authentication token
      const updatedData = {}; // Update this object with the new data for the donation
      const response = await axios.put(`https://odd-lion-life-jacket.cyclic.app/api/donation/update/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.msg);
      // Handle the successful update, such as updating the donation list with the updated data
    } catch (error) {
      console.error(error.response.data.msg);
      // Handle the error, display an error message, or perform appropriate error handling
    }
  };
  
  const handleDeleteDonation = async (id) => {
    console.log('im clicked');
    try {
      const token = ''; // Replace with your authentication token
      const response = await axios.delete(`https://odd-lion-life-jacket.cyclic.app/api/donation/delete/${id}`)

        
      // Handle the successful deletion, such as updating the donation list by removing the deleted donation
    } catch (error) {
      console.error(error.response.data.msg);
      // Handle the error, display an error message, or perform appropriate error handling
    }
  };
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Donation List</h1>
      <div className="donation-list">
        {donations.map((donation) => (
          <div key={donation.userId} style={donationItemStyle}>
            <div>
              <h2 style={headingStyle}>{donation.name}</h2>
              <p style={detailStyle}>Amount: ${donation.amount}</p>
              <p style={detailStyle}>Message: {donation.message}</p>
              <p style={detailStyle}>Category: {donation.category}</p>
            </div>
            <div>
              {/* Update button */}
              <button style={buttonStyle} onClick={() => handleUpdateDonation(donation.userId)}>
                Update
              </button>
              {/* Delete button */}
              <button style={buttonStyle} onClick={() => handleDeleteDonation(donation.userId)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default DonationList;
