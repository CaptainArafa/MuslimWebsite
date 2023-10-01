
import IconCard from "../Components/IconCard"
import { Navbar } from "../Components/Navbar"
import { Card } from "../Database/IconCardDatabase"

export const HomePage = () => {
  return (
    <>
    <header className="HomePage-Header">
    <Navbar />
    <section className="HomePage-Front">
        <h1>assalamu alaikum</h1>
        <p>Here you can access the Islamic Calendar, the entire holy quran, which is available in both English and Arabic, and the prayer times specific to your location.</p>
        <a href="#MoreInfo">Tell me more</a>
    </section>
    </header>
    <body>
        <section id="MoreInfo" className="MoreInfo-Container-Outter">
            <h2>What do we offer?</h2>
            <div className="MoreInfo-Container-Inner">
                {Card.map((card)=>{
                    return <IconCard key={card.id} {...card} />
                })}
            </div>
        </section>
    </body>
    <main>

    </main>
    </>
  )
}
