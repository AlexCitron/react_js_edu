import {useState} from "react";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Main from "./components/main.jsx";
import Section from "./components/section.jsx";
import Button from "./components/button.jsx";

export default function App() {
    const [showInstructions, setShowInstructions] = useState(false);

    function handleClick() {
        console.log("clicked");
    }

    return (
    <div className={'app'}>
        <Header showInstructions={showInstructions} setShowInstructions={setShowInstructions} />
        <Main handleClick={handleClick}>
            <Section title={'Variants'} handleClick={handleClick}>
                <Button onClick={handleClick}>Primary</Button>
                <Button onClick={handleClick} variant={'secondary'}>Secondary</Button>
                <Button onClick={handleClick} variant={'danger'}>Danger</Button>
                <Button onClick={handleClick} variant={'gradient'}>Gradient</Button>
                <Button onClick={handleClick} variant={'outline'}>Outline</Button>
            </Section>
            <Section title={'Sizes'}>
                <Button onClick={handleClick} size={"small"}>Small</Button>
                <Button onClick={handleClick} size={"medium"}>Medium</Button>
                <Button onClick={handleClick} size={"large"}>Large</Button>
            </Section>
            <Section title={'Button States'}>
                <Button isDisabled>Disabled</Button>
                <Button>Default</Button>
            </Section>
            <Section title={'Full Width Button'}>
                <Button fullWidth>Full width button</Button>
            </Section>
        </Main>
        <Footer />
    </div>
  )
}
