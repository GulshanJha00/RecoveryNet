import React, { useState, useEffect } from 'react';
import "./LostItemCard.css";
import {Link} from "react-router-dom"
import LostItemCard from './LostItemCard';

const LostItem = () => {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const response = await fetch('http://localhost:3000/lostitems');  
        const data = await response.json();
        setLostItems(data);
      } catch (error) {
        console.error('Error fetching lost items:', error);
      }
    };

    fetchLostItems();
  }, []);

  return (
    <>
        <div className="bgrund">
            <header className="header">
              <h2>Lost any Belonging? Report Here</h2>
              <Link to="/reportlost" className="report-button">Report Item</Link>
            </header>
        
          <div className="lost-items-container">
            <section className="lost-items-list">
              {lostItems.map((item) => (
                <LostItemCard key={item._id} item={item} />
              ))}
            </section>
          </div>
          
        </div>
    </>
  );
};

export default LostItem;
