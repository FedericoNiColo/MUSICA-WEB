
import { Hero, LayOutSidebar, New, Recommand, Treading } from "../router"



export function Home() {
    return (
        <>
            <Hero />
            <LayOutSidebar>
                <Treading />
                <New />
                <Recommand />
            </LayOutSidebar>
        </>
    )
}
