import type { CSSProperties } from "react"
import { range } from "@/components/punchCardPattern"

// A punch card drawn as a grid of dots: one CSS grid row per card row, one
// column per card column, and a round dot in the columns the row punches. The
// dots are sized by what the columns leave over rather than given a width, so
// the whole card scales with whatever box it is handed.
//
// Gaps come in as strings because every caller measures them off its own Figma
// frame in vw; they are never a scale step.
export default function DotGrid({
  rows,
  columnCount,
  columnGap,
  rowGap,
  color,
  className,
  style,
}: {
  rows: number[][]
  columnCount: number
  columnGap: string
  rowGap: string
  color: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      aria-hidden="true"
      className={`flex flex-col ${className ?? ""}`}
      style={{ ...style, rowGap }}
    >
      {rows.map((columns, rowIndex) => (
        <div
          key={rowIndex}
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
            columnGap,
          }}
        >
          {range(0, columnCount - 1).map((column) => (
            <div
              key={column}
              className="aspect-square"
              style={
                columns.includes(column)
                  ? { backgroundColor: color, borderRadius: "50%" }
                  : undefined
              }
            />
          ))}
        </div>
      ))}
    </div>
  )
}
