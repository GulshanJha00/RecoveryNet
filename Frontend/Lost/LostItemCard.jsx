import "./LostItemCard.css"
  
const LostItemCard = () => {
  return (
    <>
         <div className="lost-items-container">
          <section className="lost-items-list">
            
                <div className="lost-item-card">
                  <img src="/detailsBackground.jpg" alt="Item" className="lost-item-image" />
                  <div className="lost-item-details">
                    <h2>Phone</h2>
                    <p><strong>Email:</strong> gulshan@gmail.com</p>
                    <p><strong>Phone:</strong> 12345</p>
                    <p><strong>Year:</strong> First</p>
                    <p><strong>Branch:</strong> ISE</p>
                    <p><strong>Section:</strong> A</p>
                  </div>
                </div>

          </section>
        </div>
      
    </>
  )
}

export default LostItemCard
