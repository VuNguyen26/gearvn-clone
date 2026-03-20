"use client";

import { useState } from "react";
import {
  tradeInTables,
  type TradeInCategoryKey,
} from "@/data/tradeInPriceData";

const tabs: { key: TradeInCategoryKey; label: string }[] = [
  { key: "vga", label: "VGA" },
  { key: "mainboard", label: "Mainboard" },
  { key: "cpu", label: "CPU" },
];

export default function TradeInPriceTabs() {
  const [activeTab, setActiveTab] = useState<TradeInCategoryKey>("vga");
  const table = tradeInTables[activeTab];

  return (
    <div className="mt-6 overflow-hidden rounded-lg border border-gray-300 bg-white">
      <div className="border-b border-gray-300 bg-gray-50 px-4 py-3 text-[18px] font-semibold text-black">
        {table.title}
      </div>

      <div className="flex flex-wrap gap-2 border-b border-gray-200 bg-white px-4 py-3">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`rounded border px-4 py-2 text-[14px] font-medium transition ${
                isActive
                  ? "border-[#1f5d4d] bg-[#1f5d4d] text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="max-h-[520px] overflow-auto">
        <table className="min-w-full border-collapse text-left text-[15px]">
          <thead className="sticky top-0 z-10 bg-[#1f5d4d] text-white">
            <tr>
              {table.columns.map((col) => (
                <th
                  key={col}
                  className="border border-gray-300 px-4 py-3 font-semibold"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${rowIndex}-${cellIndex}`}
                    className="border border-gray-300 px-4 py-3 text-gray-800"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}