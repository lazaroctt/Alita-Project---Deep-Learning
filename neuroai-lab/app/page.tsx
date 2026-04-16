import Navbar          from '@/components/layout/Navbar'
import Footer          from '@/components/layout/Footer'
import Hero            from '@/components/sections/Hero'
import ResearchParadigm from '@/components/sections/ResearchParadigm'
import ScientificMetrics from '@/components/sections/ScientificMetrics'
import Explainer       from '@/components/sections/Explainer'
import NeuralNetworkViz from '@/components/sections/NeuralNetworkViz'
import ResearchAreas   from '@/components/sections/ResearchAreas'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResearchParadigm />
        <ScientificMetrics />
        <Explainer />
        <NeuralNetworkViz />
        <ResearchAreas />
      </main>
      <Footer />
    </>
  )
}
