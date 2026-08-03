import { brand } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <a href="#contact">Get in touch</a>
      </div>
    </footer>
  )
}
