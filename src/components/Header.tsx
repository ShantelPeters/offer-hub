// components/Header.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export default function Header({ onMenuClick, showMenuButton = false }: HeaderProps) {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo and menu button */}
        <div className="flex items-center gap-4">
          {showMenuButton && (
            <button 
              onClick={onMenuClick}
              className="md:hidden p-2 rounded-md text-gray-700"
            >
              <Menu size={24} />
            </button>
          )}
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
            <img src="/logo.svg" alt="Offer Hub Logo" className="w-10 h-10" />
            <span>Offer Hub</span>
          </Link>
        </div>
        
        {/* Right actions */}
        <div className="flex items-center ml-auto gap-4">
          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 hover:bg-gray-100 p-1 rounded-lg">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/verificationImage.svg" alt="User" />
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}