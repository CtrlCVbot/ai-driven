"use client"
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RefreshCwIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-[#262626] bg-[#1C1C1C] px-4">
      <div className="flex items-center gap-4">
        <Input
          className="h-9 w-[240px] bg-[#262626] text-sm text-white placeholder-gray-400 border-0"
          placeholder="Search email, phone or UID"
        />
        <Select>
          <SelectTrigger className="h-9 w-[120px] border-0 bg-[#262626] text-sm text-white">
            <SelectValue placeholder="All users" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All users</SelectItem>
            <SelectItem value="active">Active users</SelectItem>
            <SelectItem value="inactive">Inactive users</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="h-9 border-[#404040] bg-transparent text-white hover:bg-[#262626]"
        >
          <RefreshCwIcon className="mr-2 h-4 w-4" />
          Refresh
        </Button>
        <Button size="sm" className="h-9 bg-[#404040] text-white hover:bg-[#4D4D4D]">
          Add user
        </Button>
      </div>
    </header>
  );
} 