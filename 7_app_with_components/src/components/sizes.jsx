import Button from "./button.jsx";

export default function Sizes() {
    return (
        <div className={'component-group'}>
            <h2>Sizes</h2>
            <div className={'component-card'}>
                <Button variant={'small'} text={'SMALL'}/>
                <Button variant={'medium'} text={'MEDIUM'}/>
                <Button variant={'large'} text={'LARGE'}/>
            </div>
        </div>
    )
}