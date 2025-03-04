"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarIcon, Plus } from "lucide-react";

export default function CargoRegistrationSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-[#404040] hover:bg-[#4D4D4D]">
          <Plus className="mr-2 h-4 w-4" />
          화물 등록
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-2xl bg-[#1C1C1C] border-l border-[#262626] overflow-y-auto text-white"
      >
        <SheetHeader>
          <SheetTitle className="text-white">화물 등록</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-6 mt-6">
          {/* 화물 정보 섹션 */}
          <Card className="border-[#262626] bg-[#171717]">
            <CardHeader>
              <h3 className="text-lg font-semibold">화물정보</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>종류 <span className="text-red-500">*</span></Label>
                  <Select>
                    <SelectTrigger className="bg-[#262626] border-0">
                      <SelectValue placeholder="카고" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#262626] border-0">
                      <SelectItem value="cargo">카고</SelectItem>
                      <SelectItem value="container">컨테이너</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>중량 <span className="text-red-500">*</span></Label>
                  <Select>
                    <SelectTrigger className="bg-[#262626] border-0">
                      <SelectValue placeholder="5톤" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#262626] border-0">
                      <SelectItem value="1">1톤</SelectItem>
                      <SelectItem value="2.5">2.5톤</SelectItem>
                      <SelectItem value="5">5톤</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>품목리스트 <span className="text-red-500">*</span></Label>
                <Textarea 
                  className="bg-[#262626] border-0 h-20" 
                  placeholder="품목 상세정보 입력"
                />
              </div>
            </CardContent>
          </Card>

          {/* 출발지/도착지 섹션 */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-[#262626] bg-[#171717]">
              <CardHeader>
                <h3 className="text-lg font-semibold">출발지 정보</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>주소 <span className="text-red-500">*</span></Label>
                  <div className="flex gap-2">
                    <Input className="bg-[#262626] border-0" placeholder="주소 검색" />
                    <Button variant="secondary">주소검색</Button>
                  </div>
                  <Input className="bg-[#262626] border-0" placeholder="상세주소" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>회사명 <span className="text-red-500">*</span></Label>
                    <Input className="bg-[#262626] border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label>연락처 <span className="text-red-500">*</span></Label>
                    <Input className="bg-[#262626] border-0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>출발시간 <span className="text-red-500">*</span></Label>
                  <div className="flex gap-2">
                    <Input type="datetime-local" className="bg-[#262626] border-0" />
                    <CalendarIcon className="h-4 w-4 mt-2 text-gray-500" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#262626] bg-[#171717]">
              <CardHeader>
                <h3 className="text-lg font-semibold">도착지 정보</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>주소 <span className="text-red-500">*</span></Label>
                  <div className="flex gap-2">
                    <Input className="bg-[#262626] border-0" placeholder="주소 검색" />
                    <Button variant="secondary">주소검색</Button>
                  </div>
                  <Input className="bg-[#262626] border-0" placeholder="상세주소" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>회사명 <span className="text-red-500">*</span></Label>
                    <Input className="bg-[#262626] border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label>연락처 <span className="text-red-500">*</span></Label>
                    <Input className="bg-[#262626] border-0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>도착시간 <span className="text-red-500">*</span></Label>
                  <div className="flex gap-2">
                    <Input type="datetime-local" className="bg-[#262626] border-0" />
                    <CalendarIcon className="h-4 w-4 mt-2 text-gray-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 액션 버튼 */}
          <SheetFooter className="mt-6">
            <SheetClose asChild>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                등록 완료
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
} 