import "./LostItemCard.css";

const LostItemCard = ({ item }) => {
  return (
    <div className="lost-item-card">
      <img
        src={
          item.fileName
            ? `http://localhost:3000/${item.fileName}`
            : "/detailsBackground.jpg"
        }
        alt="Item"
        className="lost-item-image"
      />
      <div className="lost-item-details">
        <h2>{item.itemName}</h2>

        
          <p>
            <strong>Email:</strong> {item.email}
          </p>
          <p>
            <strong>Phone:</strong> {item.phoneNumber}
          </p>
          <p>
            <strong>Semester:</strong> {item.semester}
          </p>
          <p>
            <strong>Branch:</strong> {item.branch}
          </p>
          <p>
            <strong>Location:</strong> {item.location}
          </p>
      </div>
    </div>
  );
};

export default LostItemCard;
