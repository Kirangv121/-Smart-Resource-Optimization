"use client"

import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Pie,
  Area,
  Line,
  Scatter,
} from "recharts"

export function Chart({ height, children, data, series, colors, margin }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ComposedChart data={data} margin={margin}>
        {children}
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export function ChartBars({ dataKey, barSize, onMouseEnter, onMouseLeave, radius, fill, grouping }) {
  return (
    <Bar
      dataKey={dataKey}
      barSize={barSize}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      radius={radius}
      fill={fill}
      type="number"
      stackId={grouping ? "a" : undefined}
    />
  )
}

export function ChartGrid({ vertical, horizontal }) {
  return <CartesianGrid stroke="#f5f5f5" vertical={vertical} horizontal={horizontal} />
}

export function ChartXAxis({ dataKey, tickLine, axisLine, tickFormatter, label, tickLabelProps, domain, ticks }) {
  return (
    <XAxis
      dataKey={dataKey}
      tickLine={tickLine}
      axisLine={axisLine}
      tickFormatter={tickFormatter}
      label={label}
      angle={tickLabelProps?.angle}
      textAnchor={tickLabelProps?.textAnchor}
      fontSize={tickLabelProps?.fontSize}
      domain={domain}
      ticks={ticks}
    />
  )
}

export function ChartYAxis({ tickLine, axisLine, tickFormatter, label, dataKey, type, domain, ticks }) {
  return (
    <YAxis
      tickLine={tickLine}
      axisLine={axisLine}
      tickFormatter={tickFormatter}
      label={label}
      dataKey={dataKey}
      type={type}
      domain={domain}
      ticks={ticks}
    />
  )
}

export function ChartPie({ dataKey, nameKey, innerRadius, paddingAngle, cornerRadius, label, labelLine }) {
  return (
    <Pie
      dataKey={dataKey}
      nameKey={nameKey}
      innerRadius={innerRadius}
      paddingAngle={paddingAngle}
      cornerRadius={cornerRadius}
      label={label}
      labelLine={labelLine}
    />
  )
}

export function ChartArea({ dataKey }) {
  return <Area type="monotone" dataKey={dataKey} stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.3)" />
}

export function ChartAxisOptions() {
  return null
}

export function ChartLine({ dataKey }) {
  return <Line type="monotone" dataKey={dataKey} stroke="hsl(var(--primary))" />
}

export function ChartScatter({ dataKey, fill, size, onMouseEnter, onMouseLeave, data }) {
  return (
    <Scatter
      dataKey={dataKey}
      fill={fill}
      stroke="hsl(var(--primary))"
      radius={size}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data={data}
    />
  )
}

export function ChartLegend() {
  return <Legend />
}

export function ChartTooltip({ content }) {
  return <Tooltip content={content} />
}

export function ChartTooltipContent() {
  return null
}

