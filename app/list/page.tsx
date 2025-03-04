"use client"

import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import * as React from "react"
import {
  CalendarIcon,
  Download,
  LineChartIcon,
  ListIcon,
  MapIcon,
  Package2Icon,
  Printer,
  RefreshCwIcon,
  Search,
  Settings2Icon,
  TruckIcon,
  UserIcon,
  X,
  Plus,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose, SheetFooter, SheetDescription } from "@/components/ui/sheet"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import CargoRegistrationSheet from "@/components/cargo/CargoRegistrationSheet"

// 샘플 데이터
const freightData = [
  {
    id: 1,
    status: "등록완료",
    item: "테스트화물1/배차금",
    vehicleInfo: "11톤/카고",
    departure: "경기 이천시 장호원",
    departureTime: "2021-06-23 18:30",
    shipper: "와이엘피",
    destination: "서울 강남구 논현동",
    arrivalTime: "2021-07-01 15:30",
    amount: "11,111",
    registrationDate: "2021-06-24 09:46",
    paymentMethod: "인수증",
    receipt: "X",
    driverInfo: "김성용/광주90바5634",
    registrant: "이현주 대표",
  },
  {
    id: 2,
    status: "등록완료",
    item: "테스트화물2/배차금",
    vehicleInfo: "11톤/카고",
    departure: "경기 이천시 장호원",
    departureTime: "2021-06-23 18:30",
    shipper: "와이엘피",
    destination: "서울 강남구 논현동",
    arrivalTime: "2021-07-01 15:30",
    amount: "50,000",
    registrationDate: "2021-06-23 17:38",
    paymentMethod: "인수증",
    receipt: "X",
    driverInfo: "김성용/광주90바5634",
    registrant: "이현주 대표",
  },
]

export default function cargoList() {
  const [selectedDate, setSelectedDate] = React.useState("2021.06.23 - 2021.07.23")

  return (
    <div className="flex min-h-screen bg-[#1C1C1C] text-white">
      <div className="flex-1 overflow-auto">     
        <div className="p-4">
          <div className="space-y-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Select defaultValue="등록일">
                  <SelectTrigger className="w-[120px] bg-[#262626] border-0 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="등록일">등록일</SelectItem>
                    <SelectItem value="상차일">상차일</SelectItem>
                    <SelectItem value="하차일">하차일</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative">
                  <Input
                    type="text"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-[280px] bg-[#262626] border-0 text-white pl-4 pr-10"
                  />
                  <CalendarIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <Select defaultValue="차종전체">
                <SelectTrigger className="w-[160px] bg-[#262626] border-0 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="차종전체">차종전체</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="중량전체">
                <SelectTrigger className="w-[160px] bg-[#262626] border-0 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="중량전체">중량전체</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="인수증전체">
                <SelectTrigger className="w-[160px] bg-[#262626] border-0 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="인수증전체">인수증전체</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex-1">
                <Input className="w-full bg-[#262626] border-0 text-white" placeholder="검색어" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between gap-2">
              <CargoRegistrationSheet />
              
              <div className="flex gap-2">
                <Button className="bg-[#F5B041] hover:bg-[#E67E22] text-white">
                  <Search className="mr-2 h-4 w-4" />
                  검색
                </Button>
                <Button variant="destructive">
                  <RefreshCwIcon className="mr-2 h-4 w-4" />
                  초기화
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Download className="mr-2 h-4 w-4" />
                  엑셀다운로드
                </Button>
                <Button className="bg-cyan-600 hover:bg-cyan-700">
                  <Printer className="mr-2 h-4 w-4" />
                  인수증 출력
                </Button>
              </div>
            </div>

            {/* Table */}
            <Card className="border-[#262626] bg-[#171717]">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#262626] hover:bg-[#262626]">
                    <TableHead className="text-white w-[30px]">
                      <Checkbox />
                    </TableHead>
                    <TableHead className="text-white">상태</TableHead>
                    <TableHead className="text-white">품목</TableHead>
                    <TableHead className="text-white">차량정보</TableHead>
                    <TableHead className="text-white">출발지</TableHead>
                    <TableHead className="text-white">출발시간</TableHead>
                    <TableHead className="text-white">화차지명</TableHead>
                    <TableHead className="text-white">도착지</TableHead>
                    <TableHead className="text-white">도착시간</TableHead>
                    <TableHead className="text-white text-right">금액</TableHead>
                    <TableHead className="text-white">등록일</TableHead>
                    <TableHead className="text-white">결제방식</TableHead>
                    <TableHead className="text-white">인수증</TableHead>
                    <TableHead className="text-white">기사정보</TableHead>
                    <TableHead className="text-white">등록자</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {freightData.map((freight) => (
                    <TableRow key={freight.id} className="border-[#262626] hover:bg-[#262626]">
                      <TableCell className="text-white">
                        <Checkbox />
                      </TableCell>
                      <TableCell className="text-white">{freight.status}</TableCell>
                      <TableCell className="text-blue-400">{freight.item}</TableCell>
                      <TableCell className="text-white">{freight.vehicleInfo}</TableCell>
                      <TableCell className="text-white">{freight.departure}</TableCell>
                      <TableCell className="text-white">{freight.departureTime}</TableCell>
                      <TableCell className="text-white">{freight.shipper}</TableCell>
                      <TableCell className="text-white">{freight.destination}</TableCell>
                      <TableCell className="text-white">{freight.arrivalTime}</TableCell>
                      <TableCell className="text-white text-right">{freight.amount}</TableCell>
                      <TableCell className="text-white">{freight.registrationDate}</TableCell>
                      <TableCell className="text-white">{freight.paymentMethod}</TableCell>
                      <TableCell className="text-white">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-white">
                          <X className="h-4 w-4" />
                        </Button>
                      </TableCell>
                      <TableCell className="text-white">{freight.driverInfo}</TableCell>
                      <TableCell className="text-white">{freight.registrant}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">
                총 37건 중 31부터 37번째 데이터 (총 192건 중 37건 검색되었습니다.)
              </p>
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 border-[#404040] bg-transparent text-white hover:bg-[#262626]"
                >
                  이전
                </Button>
                {[1, 2, 3, 4].map((page) => (
                  <Button
                    key={page}
                    variant={page === 4 ? "default" : "outline"}
                    size="sm"
                    className={`h-8 w-8 p-0 ${
                      page === 4
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border-[#404040] bg-transparent text-white hover:bg-[#262626]"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0 border-[#404040] bg-transparent text-white hover:bg-[#262626]"
                >
                  다음
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 