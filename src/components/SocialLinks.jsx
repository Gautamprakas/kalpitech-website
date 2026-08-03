import { FaYoutube, FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { socials } from '../data/content'

const ICONS = {
  youtube: FaYoutube,
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaXTwitter,
}

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`}>
      {socials.map((social) => {
        const Icon = ICONS[social.icon]
        return (
          <a
            key={social.name}
            href={social.href}
            className={`social-links__icon social-links__icon--${social.icon}`}
            aria-label={social.name}
          >
            <Icon size={16} />
          </a>
        )
      })}
    </div>
  )
}
