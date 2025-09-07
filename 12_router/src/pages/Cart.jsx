import { useNavigate} from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();
    return (
        <>
            <p>Cart page</p>
            <button onClick={() => navigate("/thanks")}>Order</button>
        </>
    )
}