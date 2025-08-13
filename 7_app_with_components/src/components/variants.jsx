import Button from "./button.jsx";

export default function Variants() {
    return (
        <div className={'component-group'}>
            <h2>Variants</h2>
            <div className={'component-card'}>
                <Button variant={'primary'} text={'PRIMARY'}/>
                <Button variant={'secondary'} text={'SECONDARY'}/>
                <Button variant={'danger'} text={'DANGER'}/>
                <Button variant={'gradient'} text={'GRADIENT'}/>
                <Button variant={'outline'} text={'OUTLINE'}/>
                <Button variant={'gradient'} text={'new'} size={'large'} onClick={() => {}}/>
            </div>
        </div>
    )
}