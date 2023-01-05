import { useEffect, useRef } from "react";
import * as d3 from "d3";

const SkillsBubbleChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // init the chart
    createChart(svgRef?.current, skillsChartData, {});
  }, []);

  return <svg ref={svgRef} />;
};

//#region helpers
/**
 * chart data type
 */
type ChartData = {
  label: string;
  value: number;
  title?: string;
  link?: string;
};

// skills
const skillsChartData: ChartData[] = [
  { label: ".NET", value: 10 },
  { label: "ReactJS", value: 6 },
  { label: "C#", value: 10 },
  { label: "JavaScript", value: 8 },
  { label: "TypeScript", value: 6 },
  { label: "SQL", value: 10 },
  { label: "Algorithms and Data Structures", value: 8 },
  { label: "TDD", value: 6 },
  { label: "BDD", value: 4 },
  { label: "DDD", value: 4 },
  { label: "Microservices", value: 7 },
  { label: "SOLID", value: 10 },
  { label: "Design Patterns", value: 10 },
  { label: "Agile", value: 8 },
  { label: "Scrum", value: 7 },
  { label: "Kanban", value: 3 },
  { label: "PostgreSQL", value: 5 },
  { label: "SQL Server", value: 10 },
  { label: "Oracle", value: 3 },
  { label: "Azure", value: 2 },
  { label: "AWS", value: 3 },
  { label: "ML", value: 1 },
];

const createChart = (
  ref: SVGSVGElement | null,
  data: ChartData[],
  {
    value = (c: any) => c.value,
    title = (c: any) => c.label,
    label = (c: any) => c.label,
    width = 500,
    height = 500,
    marginLeft = 0,
    marginRight = 0,
    marginTop = 0,
    marginBottom = 0,
    padding = 0,
  }
) => {
  // skip if the svg ref is not available
  if (ref === null) return;
  // remove existing children
  ref.replaceChildren();

  // values
  const values = d3.map(data, value);
  const indexes = d3.range(values.length).filter((i) => values[i] > 0);
  const labels = d3.map(data, label);
  const titles = d3.map(data, title);

  const svg = d3
    .select(ref)
    .attr("viewBox", [-marginLeft, -marginTop, width, height])
    // .attr("preserveAspectRatio", ["xMinYMin", "meet"])
    .attr("style", "max-width: 100%; height: auto;")
    .attr("fill", "currentColor")
    // .attr("font-size", 10)
    // .attr("font-family", "sans-serif")
    .attr("text-anchor", "middle");

  const root = d3
    .pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .padding(padding)(
    d3
      .hierarchy({ children: indexes })
      //@ts-ignore
      .sum((i) => values[i])
  );

  const leaf = svg
    .selectAll("a")
    .data(root.leaves())
    .join("a")
    .attr("transform", (d) => `translate(${d.x},${d.y})`);

  leaf.append("circle").attr("r", (d) => d.r);
  // .attr("id", (d) => `${uid}-clip-${d.data}`)

  if (titles) {
    //@ts-ignore
    leaf.append("title").text((c) => titles[c.data]);
  }

  if (labels) {
    // A unique identifier for clip paths (to avoid conflicts).
    const uid = `O-${Math.random().toString(16).slice(2)}`;

    leaf
      .append("clipPath")
      .attr("id", (d) => `${uid}-clip-${d.data}`)
      .append("circle")
      .attr("r", (d) => d.r);

    leaf
      .append("text")
      .attr("clip-path", (d) => `url(${new URL(`#${uid}-clip-${d.data}`, window.location.href)})`)
      .selectAll("tspan")
      //@ts-ignore
      .data((d) => `${labels[d.data]}`.split(/\n/g))
      .join("tspan")
      .attr("x", 0)
      .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
      .attr("fill-opacity", (d, i, D) => (i === D.length - 1 ? 0.7 : null))
      .text((d) => d);
  }
};
//#endregion

export default SkillsBubbleChart;
