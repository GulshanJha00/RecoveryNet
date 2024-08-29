import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Body">
      <div className="content">
        <h1>What's The Scoop?</h1>
        <div className="buttonz">
          <Link to="/lost" className="button1">
            Lost😥
          </Link>
          <h3>OR</h3>
          <Link to="/found" className="button2">
            Found 🤑
          </Link>
        </div>
        <h1>Items</h1>
      </div>
    </div>
  );
};

export default Home;
