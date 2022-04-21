import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>page1</h1>
      <Link to="/page1/detailA">Page1DetailA</Link>
      <br />
      <Link to="/page1/detailB">Page1DetailB</Link>
    </div>
  );
};
