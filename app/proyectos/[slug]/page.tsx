import { projects } from '@/lib/project-data'
import { notFound } from 'next/navigation'
import ProjectPage from '@/components/project-analysis/project-page'

export default async function ProyectoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug]
  if (!project) return notFound()
  return <ProjectPage project={project} />
}
