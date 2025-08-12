import Button from "./button.jsx";

export default function FullWidthButton() {
    return (
        <div className={'component-group'}>
            <h2>Width Button</h2>
            <div className={'component-card'}>
                <Button className={'button full-width'} name={'FULL-WIDTH'}/>
                <Button className={'button large'} name={'LARGE'}/>
                <Button className={'button-icon'} name={'ICON'}/>
            </div>
        </div>
    )
}