export interface PlotDetail {
  plotNo: string;
  sizeSqFt: number;
  dimensions: string;
  facing: string;
  corner: boolean;
  note?: string;
}

export interface ReservedCategory {
  label: string;
  units: string;
  sizes: string;
  incomeLimit: string;
}

interface RawPlotDef {
  range: [number, number]; // [start, end] inclusive
  sizeSqFt: number;
  dimensions: string;
  facing: string;
  corner: boolean;
}

const rawPlotsDefs: RawPlotDef[] = [
  { range: [1, 1], sizeSqFt: 1481, dimensions: "25x59", facing: "North & West", corner: true },
  { range: [2, 2], sizeSqFt: 1481, dimensions: "25x59", facing: "North", corner: false },
  { range: [3, 6], sizeSqFt: 1772, dimensions: "30x59", facing: "North", corner: false },
  { range: [7, 7], sizeSqFt: 1728, dimensions: "36x59 (irreg)", facing: "North", corner: true },
  { range: [8, 8], sizeSqFt: 1643, dimensions: "36x50 (irreg)", facing: "West & South", corner: true },
  { range: [9, 15], sizeSqFt: 1501, dimensions: "30x50", facing: "West", corner: false },
  { range: [16, 16], sizeSqFt: 1898, dimensions: "30x50 (irreg)", facing: "West", corner: false },
  { range: [17, 20], sizeSqFt: 1501, dimensions: "30x50", facing: "West", corner: false },
  { range: [21, 21], sizeSqFt: 2059, dimensions: "45x50 (irreg)", facing: "West", corner: false },
  { range: [22, 22], sizeSqFt: 2401, dimensions: "30x80 avg", facing: "West", corner: false },
  { range: [23, 23], sizeSqFt: 2347, dimensions: "30x78 avg", facing: "West", corner: false },
  { range: [24, 24], sizeSqFt: 2188, dimensions: "30x73 avg", facing: "West", corner: false },
  { range: [25, 25], sizeSqFt: 2027, dimensions: "30x68 avg", facing: "West", corner: false },
  { range: [26, 26], sizeSqFt: 1888, dimensions: "30x63 avg", facing: "West", corner: false },
  { range: [27, 27], sizeSqFt: 1706, dimensions: "30x57 avg", facing: "West", corner: false },
  { range: [28, 28], sizeSqFt: 1545, dimensions: "30x51 avg", facing: "West", corner: false },
  { range: [29, 29], sizeSqFt: 1384, dimensions: "30x46 avg", facing: "West & North", corner: true },
  { range: [30, 30], sizeSqFt: 1501, dimensions: "30x50", facing: "East & South", corner: true },
  { range: [31, 36], sizeSqFt: 1501, dimensions: "30x50", facing: "East", corner: false },
  { range: [37, 37], sizeSqFt: 1501, dimensions: "30x50", facing: "East & North", corner: true },
  { range: [38, 38], sizeSqFt: 1501, dimensions: "30x50", facing: "West & North", corner: true },
  { range: [39, 44], sizeSqFt: 1501, dimensions: "30x50", facing: "West", corner: false },
  { range: [45, 45], sizeSqFt: 1501, dimensions: "30x50", facing: "West & South", corner: true },
  { range: [46, 46], sizeSqFt: 1501, dimensions: "30x50", facing: "East & North", corner: true },
  { range: [47, 51], sizeSqFt: 1501, dimensions: "30x50", facing: "East", corner: false },
  { range: [52, 52], sizeSqFt: 1501, dimensions: "30x50", facing: "East & South", corner: true },
  { range: [53, 53], sizeSqFt: 1501, dimensions: "30x50", facing: "West & South", corner: true },
  { range: [54, 58], sizeSqFt: 1501, dimensions: "30x50", facing: "West", corner: false },
  { range: [59, 59], sizeSqFt: 1501, dimensions: "30x50", facing: "West & North", corner: true },
  { range: [60, 60], sizeSqFt: 1201, dimensions: "30x40", facing: "East & South", corner: true },
  { range: [61, 67], sizeSqFt: 1201, dimensions: "30x40", facing: "East", corner: false },
  { range: [68, 68], sizeSqFt: 1628, dimensions: "40.7x40", facing: "East & North", corner: true },
  { range: [69, 69], sizeSqFt: 2629, dimensions: "50x60 (irreg)", facing: "East & South", corner: true },
  { range: [70, 79], sizeSqFt: 2107, dimensions: "35x60", facing: "East", corner: false },
  { range: [80, 80], sizeSqFt: 2107, dimensions: "35x60", facing: "East & North", corner: true },
  { range: [81, 81], sizeSqFt: 2107, dimensions: "35x60", facing: "West & North", corner: true },
  { range: [82, 91], sizeSqFt: 2107, dimensions: "35x60", facing: "West", corner: false },
  { range: [92, 92], sizeSqFt: 1850, dimensions: "25x60 (irreg)", facing: "West & South", corner: true },
  { range: [93, 93], sizeSqFt: 2291, dimensions: "54x50 (irreg)", facing: "East & South", corner: true },
  { range: [94, 95], sizeSqFt: 1501, dimensions: "30x50", facing: "East", corner: false },
  { range: [96, 96], sizeSqFt: 1501, dimensions: "30x50", facing: "East & North", corner: true },
  { range: [97, 97], sizeSqFt: 1501, dimensions: "30x50", facing: "West & North", corner: true },
  { range: [98, 99], sizeSqFt: 1501, dimensions: "30x50", facing: "West", corner: false },
  { range: [100, 100], sizeSqFt: 1655, dimensions: "30x50 (irreg)", facing: "West & South", corner: true },
  { range: [101, 101], sizeSqFt: 1501, dimensions: "30x50", facing: "East & North", corner: true },
  { range: [102, 103], sizeSqFt: 1501, dimensions: "30x50", facing: "East", corner: false },
  { range: [104, 104], sizeSqFt: 1501, dimensions: "30x50", facing: "East & South", corner: true },
  { range: [105, 105], sizeSqFt: 1501, dimensions: "30x50", facing: "West & South", corner: true },
  { range: [106, 107], sizeSqFt: 1501, dimensions: "30x50", facing: "West", corner: false },
  { range: [108, 108], sizeSqFt: 1501, dimensions: "30x50", facing: "West & North", corner: true },
  { range: [109, 109], sizeSqFt: 2001, dimensions: "46x54 (irreg)", facing: "East", corner: true },
  { range: [110, 118], sizeSqFt: 1876, dimensions: "35x54", facing: "East", corner: false },
  { range: [119, 119], sizeSqFt: 1876, dimensions: "35x54", facing: "East & North", corner: true },
  { range: [120, 120], sizeSqFt: 1554, dimensions: "45x35 (irreg)", facing: "South", corner: true },
  { range: [121, 121], sizeSqFt: 911, dimensions: "25x38 (irreg)", facing: "South", corner: false },
  { range: [122, 122], sizeSqFt: 951, dimensions: "25x40 (irreg)", facing: "South", corner: false },
  { range: [123, 123], sizeSqFt: 990, dimensions: "25x43 (irreg)", facing: "South", corner: false },
  { range: [124, 124], sizeSqFt: 1030, dimensions: "25x45 (irreg)", facing: "South", corner: false },
  { range: [125, 125], sizeSqFt: 1070, dimensions: "25x47 (irreg)", facing: "South", corner: false },
];

export const plotsList: PlotDetail[] = rawPlotsDefs.flatMap((def) => {
  const list: PlotDetail[] = [];
  for (let i = def.range[0]; i <= def.range[1]; i++) {
    const plotNoStr = i.toString().padStart(2, "0");
    list.push({
      plotNo: plotNoStr,
      sizeSqFt: def.sizeSqFt,
      dimensions: def.dimensions,
      facing: def.facing,
      corner: def.corner,
    });
  }
  return list;
});

export const reservedPlotsInfo: ReservedCategory[] = [
  {
    label: "LIG (Low Income Group) Reserved",
    units: "L1 – L11",
    sizes: "450 – 630 sq.ft.",
    incomeLimit: "Income < ₹6 Lakhs/annum",
  },
  {
    label: "EWS (Economically Weaker Section) Reserved",
    units: "E1 – E18",
    sizes: "300 – 440 sq.ft.",
    incomeLimit: "Income < ₹3 Lakhs/annum",
  },
];
