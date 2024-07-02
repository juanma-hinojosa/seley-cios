/* eslint-disable react/prop-types */
function HeroComponent(props) {
    return(
        <section className="hero-content">
            <article>
                <h1>{props.h1}</h1>
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
            </article>
        </section>
    )
}

export default HeroComponent