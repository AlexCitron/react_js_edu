import Button from "./button.jsx";

export default function Variants() {
    return (
        <div className={'component-group'}>
            <h2>Variants</h2>
            <div className={'component-card'}>
                <Button className={'button primary'} name={'PRIMARY'}/>
                <Button className={'button secondary'} name={'SECONDARY'}/>
                <Button className={'button danger'} name={'DANGER'}/>
                <Button className={'button gradient'} name={'GRADIENT'}/>
                <Button className={'button outline'} name={'OUTLINE'}/>
            </div>
        </div>
    )
}