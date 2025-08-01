import Button from "./button.jsx";

export default function NavigationContainer() {
    return (
        <div className='navigation-buttons'>
            <Button name='< Previous' />
            <Button name='Next >' />
        </div>
    )
}