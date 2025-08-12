import Button from "./button.jsx";

export default function ButtonStates() {
    return (
        <div className={'component-group'}>
            <h2>Sizes</h2>
            <div className={'component-card'}>
                <Button className={'button disabled'} name={'DISABLED'}/>
                <Button className={'button full-width'} name={'FULL-WIDTH'}/>
                <Button className={'button large'} name={'LARGE'}/>
                <Button className={'button-icon'} name={'ICON'}/>
            </div>
        </div>
    )
}