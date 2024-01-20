import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div>
      <h1 className="text-black-500">Thankyou for Shopping</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}
