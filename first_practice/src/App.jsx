import './index.css'
import CardContainer from "./components/card.container.jsx";
import cardData from "./misc/card.data.jsx";


export default function App() {

  return (
    <>
      <CardContainer cardData={cardData} />
    </>
  )
}
