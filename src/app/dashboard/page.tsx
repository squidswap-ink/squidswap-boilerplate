// Dashboard page component using Ink Kit UI components
import { Card, Button } from "@inkonchain/ink-kit";
import { ConnectButton } from "@/components/ConnectButton";

export default function Dashboard() {
  return (
    <main className="ink:container ink:mx-auto ink:p-4">
      {/* Wallet connection section */}
      <Card className="ink:bg-card ink:mb-8">
        <div className="ink:flex ink:justify-between ink:items-center ink:p-6">
          <h2 className="ink:heading-2 ink:text-foreground">Your Dashboard</h2>
          <ConnectButton />
        </div>
      </Card>

      {/* Main dashboard content */}
      <div className="ink:grid md:ink:grid-cols-2 ink:gap-6">
        {/* Stats Card */}
        <Card className="ink:bg-card">
          <div className="ink:p-6">
            <h3 className="ink:heading-3 ink:text-foreground ink:mb-6">Statistics</h3>
            <div className="ink:space-y-4">
              <div className="ink:flex ink:justify-between ink:items-center">
                <span className="ink:text-muted">Total Transactions</span>
                <span className="ink:text-foreground">0</span>
              </div>
              <div className="ink:flex ink:justify-between ink:items-center">
                <span className="ink:text-muted">Balance</span>
                <span className="ink:text-foreground">0 ETH</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions Card */}
        <Card className="ink:bg-card">
          <div className="ink:p-6">
            <h3 className="ink:heading-3 ink:text-foreground ink:mb-6">Quick Actions</h3>
            <div className="ink:space-y-4">
              <Button variant="primary" className="ink:w-full">
                Send Transaction
              </Button>
              <Button variant="secondary" className="ink:w-full">
                View History
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
