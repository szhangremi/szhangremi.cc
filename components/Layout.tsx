import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  immersive?: boolean
}

export default function Layout({ children, immersive = false }: LayoutProps) {
  return (
    <div className={`${immersive ? 'h-screen overflow-hidden' : 'min-h-screen'} flex flex-col`}>
      <Navbar />
      <main className={`flex-1 ${immersive ? 'min-h-0' : ''}`}>
        {children}
      </main>
      {!immersive && <Footer />}
    </div>
  )
}
