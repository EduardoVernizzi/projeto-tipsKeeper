import React from "react";

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer>
      <p> &copy; {currentYear} Carlos Eduardo Vernizzi Silva. Todos os direitos reservados. </p>
    </footer>
  )
}

export default Footer;