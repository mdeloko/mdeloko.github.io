import { MdCopyright } from "react-icons/md";
import "./footer.css";

export default function Footer(){
    return(<>
        <footer>
            <div id="footer-first-line">
                <MdCopyright />
                Erik G. Coutinho &#8212; 2026
            </div>
            <p>erikgcoutinho03@gmail.com</p>
        </footer>
    </>)
}