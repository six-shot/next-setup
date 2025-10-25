import type { Metadata } from 'next'
import { DocumentationNav } from '@/components/docs/documentation-nav'
import { DocumentationContent } from '@/components/docs/documentation-content'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Project documentation and guides',
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <DocumentationNav />
          <DocumentationContent />
        </div>
      </div>
    </div>
  )
}
