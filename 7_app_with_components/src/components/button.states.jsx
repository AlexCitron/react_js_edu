import Button from "./button.jsx";

export default function ButtonStates() {
    return (
        <div className={'component-group'}>
            <h2>Buttons states</h2>
            <div className={'component-card'}>
                <Button className={'button default'} name={'DEFAULT'}/>
                <Button className={'button disabled'} name={'DISABLED'}/>
            </div>
        </div>
    )
}