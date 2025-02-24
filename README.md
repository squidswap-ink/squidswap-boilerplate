# Next.js + Ethers.js Boilerplate with @inkonchain/ink-kit

A modern, beginner-friendly boilerplate for building Web3 applications using Next.js 14, Ethers.js, and @inkonchain/ink-kit UI components.

## 🚀 Features

- ⚡️ Next.js 14 with App Router
- 🔗 Web3 Integration with Ethers.js
- 🎨 Beautiful UI components from @inkonchain/ink-kit
- 📱 Responsive design out of the box
- 🔒 Type-safe development with TypeScript
- 🎯 Easy to customize and extend

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- A code editor (we recommend [Visual Studio Code](https://code.visualstudio.com/))

## 🛠 Quick Start

1. Clone this repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see your app!

## 🔑 Getting Your Reown Project ID

Before you can start developing, you'll need a Reown Project ID:

1. Visit [Reown Dashboard](https://reown.eth)
2. Sign in with your wallet
3. Create a new project or select an existing one
4. Navigate to the project settings
5. Copy your Project ID

Then create a `.env.local` file in your project root:
```bash
NEXT_PUBLIC_REOWN_PROJECT_ID=your_project_id_here
```

This Project ID is required for:
- Accessing Reown's infrastructure
- Deploying smart contracts
- Utilizing Reown's API services

Note: Never commit your `.env.local` file to version control. It's already included in `.gitignore` for your security.

## 📁 Project Structure

```
your-project/
├── src/
│   ├── app/                 # App Router pages and layouts
│   ├── components/          # Reusable UI components
│   ├── styles/             # Global styles and theme
│   └── utils/              # Helper functions and constants
├── public/                 # Static files
└── package.json           # Project dependencies and scripts
```

## 🎨 Customization Guide

### Changing the Theme
1. Open `src/styles/theme.ts`
2. Modify the colors, fonts, and other theme variables
3. Your changes will automatically apply throughout the app

### Adding New Pages
1. Create a new file in `src/app` directory
2. The file name will become the route (e.g., `about.tsx` becomes `/about`)
3. Use this basic template:
```tsx
'use client'

import {
  Button,
  Card,
  Input,
  Tag,
  Alert,
  InkLayout,
  InkPanel
} from "@inkonchain/ink-kit";

// Your page component
function YourContent() {
  return (
    <InkPanel className="ink:p-4">
      <Card>
        <h2 className="ink:text-xl ink:font-bold ink:mb-4">Your Title</h2>
        <div className="ink:space-y-2">
          {/* Your content here */}
          <p>Your content goes here</p>
        </div>
      </Card>
    </InkPanel>
  );
}

// Main page component
export default function YourPage() {
  return (
    <YourContent />
  );
}
```

Note: 
- Always use the `'use client'` directive at the top of your page components
- Import needed components from `@inkonchain/ink-kit`
- Use the `ink:` prefix for all styling classes
- Wrap your content in `InkPanel` and `Card` components for consistent styling

### Connecting to Web3
1. Find the wallet connection logic in `src/utils/web3.ts`
2. Update the network settings in `src/utils/constants.ts`
3. Use the provided hooks in your components

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Need Help?

- Check out the [Next.js Documentation](https://nextjs.org/docs)
- Learn about [Ethers.js](https://docs.ethers.org/)
- Explore [@inkonchain/ink-kit Documentation](https://ink-kit.inkonchain.com/)


## ⭐️ Show Your Support

Give a ⭐️ if this project helped you!
