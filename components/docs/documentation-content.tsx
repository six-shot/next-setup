'use client'

export function DocumentationContent() {
  return (
    <div className="md:col-span-3 space-y-12">
      <section id="overview">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-muted-foreground mb-4">
          This is a production-ready Next.js 15 fullstack application built with modern best
          practices for scalability, security, and maintainability.
        </p>
      </section>

      <section id="architecture">
        <h2 className="text-2xl font-bold mb-4">Architecture</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>The application follows a layered architecture pattern:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Presentation Layer:</strong> React components with Tailwind CSS
            </li>
            <li>
              <strong>API Layer:</strong> Next.js API routes and Server Actions
            </li>
            <li>
              <strong>Business Logic:</strong> Service layer with reusable functions
            </li>
            <li>
              <strong>Data Layer:</strong> Database access with type safety
            </li>
          </ul>
        </div>
      </section>

      <section id="setup">
        <h2 className="text-2xl font-bold mb-4">Setup Guide</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>See the README.md file for detailed setup instructions.</p>
        </div>
      </section>

      <section id="api">
        <h2 className="text-2xl font-bold mb-4">API Reference</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>API endpoints are documented in the docs/API.md file.</p>
        </div>
      </section>

      <section id="deployment">
        <h2 className="text-2xl font-bold mb-4">Deployment</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Deployment instructions are available in docs/DEPLOYMENT.md</p>
        </div>
      </section>

      <section id="maintenance">
        <h2 className="text-2xl font-bold mb-4">Maintenance</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>See docs/MAINTENANCE.md for maintenance guidelines and best practices.</p>
        </div>
      </section>
    </div>
  )
}
