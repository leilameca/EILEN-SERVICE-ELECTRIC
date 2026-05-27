import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import ServicesSection from '@/components/home/ServicesSection'
import WhyUs from '@/components/home/WhyUs'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import Testimonials from '@/components/home/Testimonials'
import FinalCTA from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'EILEN Electric Service | Energía Solar & Servicios Eléctricos en Santiago RD',
  description:
    'Empresa líder en instalación de paneles solares, servicios eléctricos y aire acondicionado en Santiago, República Dominicana.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <WhyUs />
      <ProjectsGallery />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
