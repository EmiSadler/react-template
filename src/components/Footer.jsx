import Counter from "./Counter";

function Footer(){
    return(
        <footer className="Footer">
            <p></p>
            <p>&copy; {new Date().getFullYear()} Emily's Website</p>
            <Counter />
        </footer>
    );
}

export default Footer