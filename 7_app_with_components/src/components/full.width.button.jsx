import Button from "./button.jsx";

export default function FullWidthButton() {
    return (
        <div className={'component-group'}>
            <h2>Width Button</h2>
            <div className={'component-card'}>
                <Button variant={'button full-width'} text={'FULL-WIDTH'}/>
                <Button variant={'button large'} text={'LARGE'}/>
                <Button variant={'button-icon'} text={'ICON'}/>
            </div>
        </div>
    )
}