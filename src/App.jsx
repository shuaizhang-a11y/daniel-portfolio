import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Project from './pages/Project'
import DzPlanningTools from './pages/DzPlanningTools'
import DzDocs from './pages/DzDocs'
import Focus from './pages/Focus'
import About from './pages/About'
import Awards from './pages/Awards'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/work" element={<Work />} />
    <Route path="/work/dz-planning-tools" element={<DzPlanningTools />} />
    <Route path="/work/dz-planning-tools/:doc" element={<DzDocs />} />
    <Route path="/work/:slug" element={<Project />} />
    <Route path="/computational-design" element={<Focus mode="computational" />} />
    <Route path="/ai-research" element={<Focus mode="ai" />} />
    <Route path="/about" element={<About />} />
    <Route path="/awards" element={<Awards />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Layout>
}
