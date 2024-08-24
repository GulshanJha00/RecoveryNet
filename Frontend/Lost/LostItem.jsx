import "./LostItem.css"
import { Link } from "react-router-dom";
import LostItemCard from "./LostItemCard"
const LostItem = () => {
  return (
    <>
      <div className="bgrund">

        <header className="header">
            <h2>Lost an Item? Report Here</h2>
            <Link to="/reportlost" className="report-button">Report Item</Link>
          </header>
          <div className="contentt">

            <LostItemCard/>
            <LostItemCard/>
            <LostItemCard/>
            <LostItemCard/>
          
          </div>
      </div>

    </>
  )
}

export default LostItem
