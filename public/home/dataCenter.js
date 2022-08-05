const dataCenter = {}

function ChartConfig() {
  const skipped = (ctx, value) =>
    ctx.p0.skip || ctx.p1.skip ? value : undefined
  const down = (ctx, value) =>
    ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined
  const dataSet = {
    label: "فالور ها",
    data: [65, 59, 50, 48, 56, 57, 80],
    borderColor: "green",
    segment: {
      borderColor: ctx => skipped(ctx, "rgb(0,0,0,0.2)") || down(ctx, "red"),
      borderDash: ctx => skipped(ctx, [6, 6]),
    },
    spanGaps: true,
    pointStyle: "circle",
    pointRadius: 4,
    pointHoverRadius: 10,
  }
  const chartConfig = {
    type: "line",
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7],
      datasets: [dataSet],
    },
    options: {
      fill: false,
      interaction: {
        intersect: false,
      },
      radius: 0,
    },
  }
  const setChartConfig = (data, labels) => {
    chartConfig.data.labels = labels
    chartConfig.data.datasets[0].data = data
  }
  return {
    config: chartConfig,
    setChartConfig,
  }
}
export const chartConfig = ChartConfig()
