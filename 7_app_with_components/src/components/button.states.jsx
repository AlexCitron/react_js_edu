import Button from "./button.jsx";

export default function ButtonStates() {
    return (
        <div className={'component-group'}>
            <h2>Buttons states</h2>
            <div className={'component-card'}>
                <Button variant={'button default'} text={'DEFAULT'}/>
                <Button variant={'button disabled'} text={'DISABLED'}/>
            </div>
        </div>
    )
}