import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, AlertCircle, CheckCircle2, FileText, Phone } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";

export default function CancelledBusinessTrip() {
  return (
    <>
      <SEO 
        title="Cancelled Business Flight - What to Do? | BusinessFlight.info"
        description="Complete guide on handling cancelled business flights. Learn your rights, how to document the situation, and recover additional costs incurred during your business trip."
        url="https://bizneslot.info/en/cancelled-business-trip"
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
        <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-slate-50">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
              <Link href="/en" className="hover:text-slate-900">Home</Link>
              <span>/</span>
              <span>Cancelled Business Flight</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Cancelled Business Flight: Your Action Plan
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              When your business flight gets cancelled, knowing what to do next can save time, money, and stress. 
              This guide covers everything from immediate actions to claiming compensation and settling expenses with your employer.
            </p>
          </div>
        </section>

        {/* Immediate Actions */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Immediate Actions to Take</h2>
            
            <div className="space-y-6 mb-12">
              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <AlertCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">1. Contact Your Employer Immediately</CardTitle>
                      <CardDescription className="text-base">
                        Inform your manager or HR department about the cancellation as soon as possible. 
                        They need to know about potential impacts on meetings, client appointments, or project deadlines.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">2. Document Everything</CardTitle>
                      <CardDescription className="text-base">
                        Keep all documentation: boarding pass, booking confirmation, cancellation notice, 
                        and any communication from the airline. Take photos of information displays showing 
                        the cancellation and reason (if provided).
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">3. Speak with the Airline</CardTitle>
                      <CardDescription className="text-base">
                        The airline must provide you with care assistance (meals, refreshments, accommodation if needed) 
                        and rebooking options. Don't leave the airport until you know your next steps.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">4. Save All Receipts</CardTitle>
                      <CardDescription className="text-base">
                        Keep receipts for any additional expenses: extended hotel stays, meals, transportation, 
                        phone calls, or other costs incurred due to the cancellation. These may be reimbursable 
                        by either the airline or your employer.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Rights Under EU Law</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                When your business flight is cancelled, EU Regulation 261/2004 provides you with specific rights 
                and entitlements. These rights apply regardless of who paid for the ticket.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Immediate Assistance (Care Rights)</h3>
                <p className="text-slate-700 mb-4">The airline must provide:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Meals and refreshments proportional to waiting time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Two phone calls, emails, or fax messages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Hotel accommodation if overnight stay is required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700">Transport between airport and hotel</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Rebooking Options</h3>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                You have the right to choose between:
              </p>

              <ol className="space-y-4 mb-8 list-decimal list-inside">
                <li className="text-slate-700">
                  <strong>Rebooking</strong> - Alternative flight to your final destination at the earliest opportunity 
                  or at a later date convenient to you (subject to seat availability)
                </li>
                <li className="text-slate-700">
                  <strong>Refund</strong> - Full reimbursement of the ticket cost for the part not traveled, 
                  plus a return flight to your first point of departure if relevant
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Monetary Compensation</h3>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Unless the cancellation was caused by extraordinary circumstances (severe weather, security risks, etc.), 
                you're entitled to financial compensation:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700"><strong>€250</strong> for flights up to 1,500 km</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700"><strong>€400</strong> for flights 1,500-3,500 km</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700"><strong>€600</strong> for flights over 3,500 km</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-slate-900 mb-6">Settling Expenses with Your Employer</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Flight cancellations during business trips create additional costs and administrative work. 
                Here's how to handle the financial aspects with your employer:
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Reimbursable Expenses</h3>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Typically, your employer should reimburse business-related costs incurred due to the cancellation:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong>Extended accommodation</strong> - Additional hotel nights beyond the original trip duration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong>Meals</strong> - Food expenses during the extended trip (if not provided by airline)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong>Transportation</strong> - Taxis, public transport, or rental car if needed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong>Communication</strong> - Phone calls, internet access for work purposes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">
                    <strong>Rebooking fees</strong> - If you had to book alternative flights at your own expense
                  </span>
                </li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Pro Tip: Document Proactively</h4>
                    <p className="text-slate-700 mb-0">
                      Create a detailed expense report with all receipts attached. Include a brief explanation 
                      of each expense and how it relates to the flight cancellation. This makes the reimbursement 
                      process smoother and faster.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6">Working with HR and Finance</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                When submitting your expense report and discussing compensation, keep these points in mind:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="text-slate-700">
                  <strong>Check your company's travel policy</strong> - Review guidelines on flight disruptions 
                  and expense reimbursement procedures
                </li>
                <li className="text-slate-700">
                  <strong>Distinguish between airline and employer obligations</strong> - The airline owes you care 
                  assistance and compensation; your employer owes you reimbursement for business-related costs 
                  not covered by the airline
                </li>
                <li className="text-slate-700">
                  <strong>Submit claims promptly</strong> - File your expense report and compensation claim 
                  within your company's specified timeframes
                </li>
                <li className="text-slate-700">
                  <strong>Be transparent about compensation</strong> - If you receive compensation from the airline, 
                  discuss with your employer how to handle it according to company policy
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Had a Cancelled Business Flight?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              You may be entitled to up to €600 in compensation. Check your eligibility and file a claim.
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