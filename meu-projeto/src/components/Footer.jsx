import React from "react";

const currentYear = new Date().getFullYear()

function Footer() {
    return (
        <footer>
            <p>Eduardo Vernizzi © TipsCode {currentYear}</p>
        </footer>
    )
}

export default Footer;