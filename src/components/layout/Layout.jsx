import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"

export function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="mt-[8vh]">{children}</main>
            <Footer />
        </>
    )
}
