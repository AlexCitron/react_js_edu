import Button from "./button.jsx";

export default function Header() {
    return (
        <div className={'app-header'}>
            <h1> UI Component Library</h1>
            <p> Explore reusable and customizable components</p>
            <Button className={'accordion-button'} name={'Show instructions'}/>
            <Button className={'download-button'} name={'Download Button.js'}/>
        </div>
    )
}