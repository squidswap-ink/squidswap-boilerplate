// About page component using Ink Kit UI components
import { Card } from "@inkonchain/ink-kit";

export default function About() {
  return (
    <div className="ink:container ink:mx-auto ink:p-4">
      {/* Main content section */}
      <Card className="ink:mb-8 ink:p-8">
        <h1 className="ink:text-3xl ink:font-bold ink:mb-4">
          About This Project
        </h1>
        
        <hr className="ink:my-6 ink:border-t ink:border-gray-200" />
        
        {/* Project description section */}
        <div className="ink:space-y-4">
          <h2 className="ink:text-2xl ink:font-bold">What We Do</h2>
          <p className="ink:text-lg">
            This is a modern Web3 application built with Next.js and Ink Kit.
            Edit this section to describe your project.
          </p>
          
          <h2 className="ink:text-2xl ink:font-bold ink:mt-8">Our Technology</h2>
          <p className="ink:text-lg">
            • Next.js 15 with App Router<br />
            • Ink Kit for UI components<br />
            • Ethers.js for Web3 integration
          </p>
        </div>
      </Card>
    </div>
  );
}
