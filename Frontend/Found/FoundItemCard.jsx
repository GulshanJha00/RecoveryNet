import "../Lost/LostItemCard.css";

const FoundItemCard = ({ item }) => {
  console.log(item.fileUploadName);

  // Construct the image URL based on the filename or ID
  const imageUrl = item.fileUploadName
    ? `http://localhost:3000/images/${item.fileUploadName}` // Adjust URL if needed
    : "/detailsBackground.jpg";

  return (
    <div className="lost-item-card">
      <img src={imageUrl} alt="Item" className="lost-item-image" />
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

export default FoundItemCard;
