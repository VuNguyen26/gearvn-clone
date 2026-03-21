import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
  TableFooter
} from "@/components/ui/table"

import { ScrollArea } from "@/components/ui/scroll-area"

export function MyTable() {
  return (
    <ScrollArea className="h-120 w-100 border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-green-700 text-white">Hãng</TableHead>
            <TableHead className="bg-green-700 text-white">Dòng sản phẩm</TableHead>
            <TableHead className="bg-green-700 text-white">Khoảng giá (nghìn đồng)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 50 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell>{i}</TableCell>
              <TableCell>User {i}</TableCell>
              <TableCell>User {i}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}