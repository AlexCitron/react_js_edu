import {useState} from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";

export default function App() {
    const [showInstructions, setShowInstructions] = useState(false);

    return (
    <div className={'app'}>
        <Header showInstructions={showInstructions} setShowInstructions={setShowInstructions} />
        <Main />
        <Footer />
    </div>
  )
}
