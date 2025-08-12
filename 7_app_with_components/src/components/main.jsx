import Variants from "./variants.jsx";
import Sizes from "./sizes.jsx";
import ButtonStates from "./button.states.jsx";
import FullWidthButton from "./full.width.button.jsx";

export default function Main() {
    return (
        <main className={'component-showcase'}>
            <Variants />
            <Sizes />
            <ButtonStates />
            <FullWidthButton />
        </main>
    )
}