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

type Props = {
  data: TradeInTable;
}

import { ScrollArea } from "@/components/ui/scroll-area"
import { TradeInTable } from "@/data/tradeInPriceData"

export function MyTable({data} : Props) {
  return (
    <ScrollArea className="h-120 w-100 border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            {data.columns.map((col, index) => (
              <TableHead key={index} className="bg-green-700 text-white">
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}