'use client'

import Link from 'next/link'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'setup', label: 'Setup Guide' },
  { id: 'api', label: 'API Reference' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'maintenance', label: 'Maintenance' },
]

export function DocumentationNav() {
  return (
    <nav className="space-y-2">
      {sections.map((section) => (
        <Link
          key={section.id}
          href={`#${section.id}`}
          className="block px-4 py-2 rounded-lg hover:bg-muted transition-colors"
        >
          {section.label}
        </Link>
      ))}
    </nav>
  )
}
