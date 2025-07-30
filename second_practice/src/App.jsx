import "./index.css";
import cardData from "./misc/card.data.jsx";
import CardContainer from "./components/card.container.jsx";

export default function App() {
  return (
    <>
      <CardContainer props={cardData} />
    </>
  )
}