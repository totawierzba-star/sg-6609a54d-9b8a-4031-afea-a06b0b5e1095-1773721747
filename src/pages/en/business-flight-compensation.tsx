import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Scale, CheckCircle2, AlertCircle } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";

export default function BusinessFlightCompensation() {
  return (
    <>
      <SEO 
        title="Business Flight Compensation - Who Gets the Money? | BusinessFlight.info"
        description="Comprehensive guide on employee compensation rights for business flights. Learn who is entitled to compensation when a company-booked flight is delayed or cancelled."
        url="https://bizneslot.info/en/business-flight-compensation"
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
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-slate-50">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
              <Link href="/en" className="hover:text-slate-900">Home</Link>
              <span>/</span>
              <span>Business Flight Compensation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Business Flight Compensation: Who Gets the Money?
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              When your business flight is delayed or cancelled, who is entitled to the compensation - you or your employer? 
              This comprehensive guide explains your passenger rights under EU Regulation 261/2004.
            </p>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <Shield className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">Passenger Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">
                    Compensation belongs to the passenger - the person who flew, not who paid for the ticket.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <Scale className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">EU Law Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">
                    EU Regulation 261/2004 clearly defines passenger rights regardless of who purchased the ticket.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CheckCircle2 className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">Up to €600</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700">
                    Compensation ranges from €250 to €600 depending on flight distance and delay duration.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Legal Foundation</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Under EU Regulation 261/2004, the right to compensation belongs to the <strong>passenger</strong> - 
                the person who actually traveled on the flight. This applies regardless of who purchased the ticket 
                or paid for it. Even if your employer booked and paid for your business flight, you remain the 
                passenger with full rights to compensation.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Who is Considered a Passenger?</h3>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                According to EU regulations, a passenger is defined as any person carried or to be carried on a flight 
                under a contract of carriage. The key distinction is that the passenger is the individual who:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Physically boards and travels on the aircraft</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Has their name on the ticket and boarding pass</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Experiences the disruption (delay, cancellation) firsthand</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">Holds the legal right to claim compensation</span>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Important Distinction</h4>
                    <p className="text-slate-700 mb-0">
                      The entity that purchases the ticket (your employer) is the <strong>customer</strong>, 
                      but you, as the traveler, are the <strong>passenger</strong>. This legal distinction 
                      is crucial - passenger rights belong to passengers, not to customers.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6">Company Policy vs. Legal Rights</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                While EU law clearly grants compensation rights to passengers, your employer may have internal 
                policies regarding business travel compensation. However, it's important to understand:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Scale className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong>Company policy cannot override EU law</strong> - your legal right to compensation 
                    remains valid regardless of internal company rules
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong>Employment agreements may include provisions</strong> about business travel compensation, 
                    but these cannot eliminate your statutory rights under EU 261/2004
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong>Voluntary arrangements</strong> - some employees choose to transfer compensation 
                    to their employer as a goodwill gesture, but this is entirely voluntary
                  </span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6">Compensation Amounts</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                The compensation amount depends on the flight distance and delay duration:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Short Distance</CardTitle>
                    <CardDescription>Up to 1,500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-slate-900 mb-2">€250</p>
                    <p className="text-sm text-slate-600">For delays of 3+ hours or cancellations</p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Medium Distance</CardTitle>
                    <CardDescription>1,500 - 3,500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-slate-900 mb-2">€400</p>
                    <p className="text-sm text-slate-600">For delays of 3+ hours or cancellations</p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Long Distance</CardTitle>
                    <CardDescription>Over 3,500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-slate-900 mb-2">€600</p>
                    <p className="text-sm text-slate-600">For delays of 4+ hours or cancellations</p>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Claim Your Compensation</h2>
              
              <ol className="space-y-4 mb-8 list-decimal list-inside">
                <li className="text-slate-700">
                  <strong>Document the disruption</strong> - Keep your boarding passes, booking confirmation, 
                  and any communication from the airline about delays or cancellations
                </li>
                <li className="text-slate-700">
                  <strong>Contact the airline</strong> - Submit a compensation claim directly to the airline 
                  or use a claims service to handle it for you
                </li>
                <li className="text-slate-700">
                  <strong>Know your rights</strong> - You have up to 3 years (in most EU countries) to file 
                  a claim for past flight disruptions
                </li>
                <li className="text-slate-700">
                  <strong>Discuss with your employer</strong> - If your company has specific policies about 
                  business travel compensation, have an open conversation about how to handle it
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Was Your Business Flight Disrupted?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              If your business flight was delayed by more than 3 hours or cancelled, you may be entitled to 
              compensation. Check your eligibility now.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <a href="https://claimwinger.com/en/cancelled-flight" target="_blank" rel="noopener noreferrer">
                Check Your Compensation
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