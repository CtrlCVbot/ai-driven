"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon } from "lucide-react"

export default function cargoRegister() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white"> {/* 다크 테마 적용 */}
      <div className="p-4">
        <div className="grid gap-6">
          <Card className="border-[#262626] bg-[#171717] text-white">
            <CardHeader>
              <CardTitle>화물정보</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>
                    종류 <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-[#262626] text-white border-0">
                      <SelectValue placeholder="카고" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#262626] text-white border-0">
                      <SelectItem value="cargo">카고</SelectItem>
                      <SelectItem value="container">컨테이너</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>
                    중량 <span className="text-red-500">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-[#262626] text-white border-0">
                      <SelectValue placeholder="5톤" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#262626] text-white border-0">
                      <SelectItem value="1">1톤</SelectItem>
                      <SelectItem value="2.5">2.5톤</SelectItem>
                      <SelectItem value="5">5톤</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>
                  품목리스트 <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  placeholder="품목의 상세정보를 입력해 주세요."
                  className="h-20 bg-[#262626] text-white border-0"
                />
              </div>
              <div className="space-y-2">
                <Label>비테스트</Label>
                <Textarea
                  placeholder="품목상의 기타 내용을 입력하실 수 있습니다."
                  className="h-20 bg-[#262626] text-white border-0"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Pickup Location */}
            <Card className="border-[#262626] bg-[#171717] text-white">
              <CardHeader>
                <CardTitle>출발지</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>주소지선택</Label>
                  <RadioGroup defaultValue="basic" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="basic" id="basic" />
                      <Label htmlFor="basic">기본출발지</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new" id="new" />
                      <Label htmlFor="new">신규출발지</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>
                      주소 <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex gap-2">
                      <Input placeholder="경기 용인시 처인구 동부대로" className="bg-[#262626] text-white border-0" />
                      <Button variant="secondary">주소검색</Button>
                    </div>
                    <Input placeholder="1000 동백프라자" className="bg-[#262626] text-white border-0" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>
                        회사명 <span className="text-red-500">*</span>
                      </Label>
                      <Input placeholder="와이엘피(본사)" className="bg-[#262626] text-white border-0" />
                    </div>
                    <div className="space-y-2">
                      <Label>
                        연락처 <span className="text-red-500">*</span>
                      </Label>
                      <Input placeholder="1566-8732" className="bg-[#262626] text-white border-0" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>
                      시간 <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input type="datetime-local" className="bg-[#262626] text-white border-0" />
                      <CalendarIcon className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Location */}
            <Card className="border-[#262626] bg-[#171717] text-white">
              <CardHeader>
                <CardTitle>도착지</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>주소지선택</Label>
                  <RadioGroup defaultValue="basic" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="basic" id="d-basic" />
                      <Label htmlFor="d-basic">기본도착지</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new" id="d-new" />
                      <Label htmlFor="d-new">신규도착지</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>
                      주소 <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex gap-2">
                      <Input placeholder="경기 성남시 중원구 둔촌대로" className="bg-[#262626] text-white border-0" />
                      <Button variant="secondary">주소검색</Button>
                    </div>
                    <Input placeholder="550" className="bg-[#262626] text-white border-0" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>
                        회사명 <span className="text-red-500">*</span>
                      </Label>
                      <Input className="bg-[#262626] text-white border-0" />
                    </div>
                    <div className="space-y-2">
                      <Label>
                        연락처 <span className="text-red-500">*</span>
                      </Label>
                      <Input className="bg-[#262626] text-white border-0" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>
                      시간 <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input type="datetime-local" className="bg-[#262626] text-white border-0" />
                      <CalendarIcon className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Applicant Information */}
          <Card className="border-[#262626] bg-[#171717] text-white">
            <CardHeader>
              <CardTitle className="text-base">신청자 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-gray-300">이름</Label>
                <Input value="이현주 대표" readOnly className="bg-[#262626] text-white border-0" />
              </div>
              <div>
                <Label className="text-gray-300">연락처</Label>
                <Input value="010-1111-1234" readOnly className="bg-[#262626] text-white border-0" />
              </div>
            </CardContent>
          </Card>

          {/* Estimate Information */}
          <Card className="border-[#262626] bg-[#171717] text-white">
            <CardHeader>
              <CardTitle className="text-base">견적 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>예상거리</span>
                  <span>0km</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>예상금액</span>
                  <span>0원</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Options */}
          <Card className="border-[#262626] bg-[#171717] text-white">
            <CardHeader>
              <CardTitle className="text-base">옵션</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="lift" />
                  <Label htmlFor="lift" className="text-gray-300">
                    리프트
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mixed" />
                  <Label htmlFor="mixed" className="text-gray-300">
                    혼적
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="urgent" />
                  <Label htmlFor="urgent" className="text-gray-300">
                    긴급
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="return" />
                  <Label htmlFor="return" className="text-gray-300">
                    왕복
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">외부등록</Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">목록으로</Button>
          </div>
        </div>
      </div>
    </div>
  )
} 