import Header from "./components/header.jsx";
import Variants from "./components/variants.jsx";
import Sizes from "./components/sizes.jsx";
import ButtonStates from "./components/button.states.jsx";

export default function App() {

  return (
    <>
        <Header />
            <div className={'component-showcase'}>
                <Variants />
                <Sizes />
                <ButtonStates />
            </div>
    </>
  )
}
