import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import useCart from "../../../hooks/useCart";

//TODO Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <SectionTitle subHeading="Please Process Payment" heading='Payment'></SectionTitle>
            <h2 className="text-3xl">Taka o pakhi tumi uira uira ashoooo..</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} cart={cart}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;