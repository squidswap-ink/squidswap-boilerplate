'use client'

import { ReactNode } from 'react'
import { useInkThemeClass, InkLayout, InkLayoutSideNav } from '@inkonchain/ink-kit'
import type { InkLayoutLink } from '@inkonchain/ink-kit'
import { ConnectButton } from "@/components/ConnectButton";

// Define valid theme types
type ThemeType = 'default' | 'dark' | 'light' | 'contrast' | 'neo' | 'morpheus'

// Navigation links for the sidebar
const navigationLinks: InkLayoutLink[] = [
  { 
    href: '/', 
    children: 'Home'
  },
  { 
    href: '/about', 
    children: 'About'
  },
  { 
    href: '/dashboard', 
    children: 'Dashboard'
  },
]

// Define the props type for our layout component
interface ClientLayoutProps {
  children: ReactNode
  theme?: ThemeType
}

export default function ClientLayout({ 
  children,
  theme = 'dark'
}: ClientLayoutProps) {
  useInkThemeClass(theme)

  return (
    <InkLayout
      sideNavigation={
        <InkLayoutSideNav
          links={[
            ...navigationLinks,
            {
              href: '#',
              children: <ConnectButton />
            }
          ]}
        />
      }
      headerContent={
        <div className="ink:p-4">
          <h1 className="ink:text-2xl ink:font-bold">Your dApp Name</h1>
        </div>
      }
    >
      {children}
    </InkLayout>
  )
}