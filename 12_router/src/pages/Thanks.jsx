import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Thanks() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {navigate("/")}, 5000);
        return () => clearTimeout(timer);
    }, [navigate])


    return (
        <div>Thank you for order. You'll be redirected at the home page in 5 seconds...</div>
    )
}