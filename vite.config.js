import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Temporary: base set for the GitHub Pages project subpath until kalpitech.com
// DNS is configured, at which point this should revert to '/' and public/CNAME
// should be restored, since the custom domain serves the site at its root.
export default defineConfig({
  base: '/kalpitech-website/',
  plugins: [react()],
})
