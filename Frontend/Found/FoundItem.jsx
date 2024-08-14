import "../Lost/LostItem.css"
import { Link } from "react-router-dom";
import FoundItemCard from "./FoundItemCard";
const FoundItem = () => {
  return (
    <>
      
      <header className="header">
          <h2>Found any Belonging? Report Here</h2>
          <Link to="/reportfound" className="report-button">Report Item</Link>
        </header>
        <div className="contentt">

          <FoundItemCard/>
          <FoundItemCard/>
          <FoundItemCard/>
          <FoundItemCard/>
        
        </div>

    </>
  )
}

export default FoundItem
