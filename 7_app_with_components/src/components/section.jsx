export default function Section({title, children}) {
    return (
        <section className={'component-group'}>
            <h2>{title}</h2>
            <div className={'component-card'}>{children}</div>
        </section>
    )
}