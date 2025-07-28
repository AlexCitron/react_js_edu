const currentHour = new Date().getHours()
const openOrClosed = (currentHour >= 9 && currentHour <= 21) ? 'open' : 'closed';

export default function Header() {
    return (
        <header className='header'>
            <h1>Electronic store</h1>
            <nav className='nav'>
                <ul>
                    <li><a href="#home">
                        home</a></li>
                    <li><a href="#catalog">
                        catalogue</a></li>
                    <li><a href="#about">
                        about</a></li>
                    <li><a href="#contacts">
                        contacts</a></li>
                </ul>
            </nav>
            <div className='working-hours'>
                <h1> {'We are currently' + ' ' + openOrClosed + '. ' +'Work hours 9:00 - 21:00.'}</h1>
            </div>
        </header>
    )
}