import React, { useEffect, useState } from 'react';
import './ReserveTable.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const ReserveTable = ({ url }) => {
  const [tableData, setTableData] = useState([]); // Store the fetched table data
  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${url}/reservation/tabledata`); // Ensure this matches your backend route
      if (response.data.success) {
        setTableData(response.data.data)
      } else {
        toast.error('Failed to fetch reservations.');
      }
    } catch (error) {
      console.error('Error fetching reservations:', error);
      toast.error('Error occurred while fetching reservations.');
    }
  };


  useEffect(() => {
    fetchReservations(); // Fetch data on component mount
  }, [url]);

  return (
    <div className="reservation-list ">
      <h1>Reservation List</h1>
      {tableData.length > 0 ? (
        <ul className="reservation-ul">
          {tableData.map((reservation) => (
            <li key={reservation._id} className="reservation-item">
              <div className="reservation-info">
                <div className='box-items'>
                  <p><span>Name : </span> {reservation.name}</p>
                  <p><span>Email : </span>{reservation.email}</p>
                </div>
                <div className='box-items'>
                  <p><span>Date : </span>{new Date(reservation.date).toLocaleDateString()}</p>
                  <p><span>Persons : </span> {reservation.persons}</p>
                </div>
                <div className='box-items'>
                  <p><span>Occasion : </span> {reservation.occasion}</p>
                  <p><span>Dining : </span>{reservation.dining}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reservations found.</p>
      )}
    </div>

  );
};

export default ReserveTable;
