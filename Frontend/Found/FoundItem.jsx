// FoundItem.jsx

import React, { useState, useEffect } from 'react';
import "../Lost/LostItemCard.css"; 
import { Link } from "react-router-dom";
import FoundItemCard from './FoundItemCard';

const FoundItem = () => {
  const [foundItems, setFoundItems] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/founditems')
      .then(response => response.json())
      .then(data => {
        console.log(data[0]._id); 
        setFoundItems(data);
      })
      .catch(error => console.error('Error fetching found items:', error));
  }, []);
  

  return (
    <>
      <div className="bgrund">
        <header className="header">
          <h2>Found Something? Report Here</h2>
          <Link to="/reportfound" className="report-button">Report Item</Link>
        </header>

        <div className="lost-items-container"> 
          <section className="lost-items-list"> 
            {foundItems.map((item) => (
              <FoundItemCard key={item._id} item={item} />
            
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default FoundItem;
