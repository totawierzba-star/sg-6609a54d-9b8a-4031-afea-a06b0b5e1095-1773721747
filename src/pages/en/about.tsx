import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";

export default function About() {
  return (
    <>
      <SEO 
        title="About the Author | BusinessFlight.info"
        description="Learn about the creator of BusinessFlight.info and the mission to educate business travelers about their passenger rights."
        url="https://bizneslot.info/en/about"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/en" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <img src="/bizneslotlogotyp.png" alt="BusinessFlight.info" className="h-8 w-auto" />
                BusinessFlight.info
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/en/business-flight-compensation" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Compensation
                </Link>
                <Link href="/en/cancelled-business-trip" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Cancelled Flight
                </Link>
                <Link href="/en/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                  About
                </Link>
              </nav>
              <MobileNav locale="en" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
              <Link href="/en" className="hover:text-slate-900">Home</Link>
              <span>/</span>
              <span>About the Author</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              About BusinessFlight.info
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Created by a frequent business traveler who believes that knowledge of passenger rights 
              should be accessible to everyone who flies for work.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Mission</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                BusinessFlight.info was created to fill a gap in accessible information about passenger rights 
                in the context of business travel. While EU Regulation 261/2004 clearly defines passenger rights, 
                many business travelers are unaware of their entitlements or unsure how these rights apply when 
                their employer pays for the ticket.
              </p>

              <p className="text-slate-700 leading-relaxed mb-8">
                This portal aims to educate business travelers, HR professionals, and travel managers about 
                the legal framework governing flight disruptions, compensation eligibility, and the practical 
                aspects of handling these situations in a corporate environment.
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why This Matters</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Business travel is an essential part of modern professional life. When flights get disrupted, 
                it doesn't just cause inconvenience - it can impact important meetings, client relationships, 
                and project deadlines. Understanding your rights helps you:
              </p>

              <ul className="space-y-3 mb-8 list-disc list-inside text-slate-700">
                <li>Make informed decisions during travel disruptions</li>
                <li>Know what assistance and compensation you're entitled to</li>
                <li>Navigate the relationship between airline obligations and employer responsibilities</li>
                <li>Document situations properly for reimbursement and claims</li>
                <li>Understand how company policies interact with legal rights</li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6">Partnership with ClaimWinger</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                For readers who want to claim compensation for flight disruptions, we recommend ClaimWinger - 
                a trusted service that handles airline compensation claims on behalf of passengers. ClaimWinger 
                takes care of the entire process, from documentation to negotiation with airlines, working on 
                a no-win-no-fee basis.
              </p>

              <p className="text-slate-700 leading-relaxed mb-8">
                This partnership allows us to focus on education while providing readers with a reliable path 
                to claiming what they're owed.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Transparency Note</h3>
                <p className="text-slate-700 mb-0">
                  BusinessFlight.info is an independent educational resource. We may earn a commission when 
                  readers use ClaimWinger's services through our links, but this doesn't affect the accuracy 
                  or objectivity of our content. All information provided is based on EU regulations and aims 
                  to help travelers understand their rights.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Have questions, suggestions, or want to share your business travel experience? We'd love to hear from you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <a href="https://www.linkedin.com/company/claimwinger" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <a href="mailto:contact@claimwinger.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Claim Your Compensation?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              If you've experienced a flight disruption during business travel, check if you're eligible for compensation.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href="https://claimwinger.com/en" target="_blank" rel="noopener noreferrer">
                Check Eligibility
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center text-sm text-slate-400">
              <p>© 2026 BusinessFlight.info. Educational portal about passenger rights in business travel.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}