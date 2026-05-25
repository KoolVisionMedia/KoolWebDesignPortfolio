import { Analytics } from '@vercel/analytics/react'
import Index from './pages/Index'

export default function App() {
  return (
    <>
      <Index />
      <Analytics />
    </>
  )
}
