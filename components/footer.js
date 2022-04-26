export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-300 h-min to-blue-700 p-2 flex flex-row align-items justify-center">
            <span className="text-white">
                &copy; {new Date().getFullYear()} Flee Market
            </span>
        </footer>
    )
}