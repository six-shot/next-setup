import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <main className="min-h-screen bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 pb-20">
          {/* <SiteHeader /> */}
          <div className="max-w-3xl py-20 mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight text-foreground">
                Production-Ready Next.js 15
              </h1>
              <p className="text-xl text-muted-foreground">
                Enterprise-grade fullstack application with complete architecture, CI/CD pipeline,
                and documentation
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/dashboard">
                <Button size="lg">Dashboard</Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline">
                  Documentation
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="font-semibold mb-2">Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  Scalable, modular design with clear separation of concerns
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">
                  Authentication, authorization, and data protection built-in
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-card">
                <h3 className="font-semibold mb-2">Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  Complete CI/CD pipeline with automated testing and deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}
