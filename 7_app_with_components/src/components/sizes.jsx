import Button from "./button.jsx";

export default function Sizes() {
    return (
        <div className={'component-group'}>
            <h2>Sizes</h2>
            <div className={'component-card'}>
                <Button className={'button small'} name={'SMALL'}/>
                <Button className={'button medium'} name={'MEDIUM'}/>
                <Button className={'button large'} name={'LARGE'}/>
            </div>
        </div>
    )
}