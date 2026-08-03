import { brand } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
        <span className="footer__links">
          <a href="kalpi.html">About Kalpi</a>
          <a href="kalpi-news.html">Kalpi News</a>
          <a href="#contact">Get in touch</a>
        </span>
      </div>
    </footer>
  )
}
