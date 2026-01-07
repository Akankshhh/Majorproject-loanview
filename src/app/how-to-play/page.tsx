import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function HowToPlayPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-primary">How to Play</h1>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to LoanView!</CardTitle>
          <CardDescription>
            Here's a guide on how to get started and use the features of this application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="text-muted-foreground">
              LoanView is designed to help you understand and manage loan information effectively. You can explore different loan types, compare rates from various banks, calculate your potential EMIs, and even get advice from our AI assistant.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">General Controls</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Dashboard:</span> Get an overview of key loan metrics and market statistics.</li>
              <li><span className="font-semibold text-foreground">Apply for Loan:</span> Fill out and submit a detailed loan application. You can also view your past applications here.</li>
              <li><span className="font-semibold text-foreground">Market Comparison:</span> See a detailed table of all available loan products from our partner banks.</li>
              <li><span className="font-semibold text-foreground">Compare & Calculate:</span> Use the EMI calculator to understand your monthly payments and compare different loan scenarios.</li>
              <li><span className="font-semibold text-foreground">AI Banking Advisor:</span> Chat with our AI to get personalized advice and answers to your loan-related questions.</li>
              <li><span className="font-semibold text-foreground">Download Report:</span> Generate and download a PDF summary of your calculations and applications.</li>
              <li><span className="font-semibold text-foreground">Profile:</span> Manage your user profile information.</li>
              <li><span className="font-semibold text-foreground">Language Selector:</span> Change the display language of the application at any time using the dropdown in the header.</li>
              <li><span className="font-semibold text-foreground">Theme Toggle:</span> Switch between light and dark modes using the sun/moon icon in the header.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Advanced Controls</h2>
             <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Filtering:</span> On the Dashboard and Market Comparison pages, use the various filters to narrow down the loan products by bank, loan type, interest rate, and more.</li>
              <li><a href="/ai-advisor" className="text-primary hover:underline"><span className="font-semibold text-foreground">AI Advisor Interaction:</span></a> Try asking the AI specific questions like "What are my options for a car loan under 9%?" or "Am I eligible for a home loan of 20 lakhs?".</li>
              <li><span className="font-semibold text-foreground">PDF Reports:</span> The data for the PDF report is pulled from your last calculation on the "Compare & Calculate" page and your most recent application from the "Apply for Loan" page. Ensure you have performed these actions to get a comprehensive report.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
