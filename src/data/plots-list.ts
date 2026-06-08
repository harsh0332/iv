export interface PlotDetail {
  plotNo: string;
  sizeSqFt: number;
  dimensions: string;
  category: "Boulevard Front" | "Garden Facing" | "Corner Plot" | "Standard Plot";
  facing: "North" | "East" | "West" | "South";
}

export const plotsList: PlotDetail[] = [
  { plotNo: "01", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Corner Plot", facing: "East" },
  { plotNo: "02", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Boulevard Front", facing: "East" },
  { plotNo: "03", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Boulevard Front", facing: "East" },
  { plotNo: "04", sizeSqFt: 1800, dimensions: "30 x 60 ft", category: "Standard Plot", facing: "East" },
  { plotNo: "05", sizeSqFt: 1800, dimensions: "30 x 60 ft", category: "Standard Plot", facing: "East" },
  { plotNo: "06", sizeSqFt: 1800, dimensions: "30 x 60 ft", category: "Standard Plot", facing: "East" },
  { plotNo: "07", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Garden Facing", facing: "North" },
  { plotNo: "08", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Garden Facing", facing: "North" },
  { plotNo: "09", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Garden Facing", facing: "North" },
  { plotNo: "10", sizeSqFt: 2400, dimensions: "40 x 60 ft", category: "Corner Plot", facing: "North" },
  { plotNo: "11", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "South" },
  { plotNo: "12", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "South" },
  { plotNo: "13", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "South" },
  { plotNo: "14", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "South" },
  { plotNo: "15", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "South" },
  { plotNo: "16", sizeSqFt: 1800, dimensions: "30 x 60 ft", category: "Corner Plot", facing: "West" },
  { plotNo: "17", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "West" },
  { plotNo: "18", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "West" },
  { plotNo: "19", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Garden Facing", facing: "East" },
  { plotNo: "20", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Garden Facing", facing: "East" },
  { plotNo: "21", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Garden Facing", facing: "East" },
  { plotNo: "22", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Garden Facing", facing: "East" },
  { plotNo: "23", sizeSqFt: 1800, dimensions: "30 x 60 ft", category: "Corner Plot", facing: "North" },
  { plotNo: "24", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Boulevard Front", facing: "South" },
  { plotNo: "25", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Boulevard Front", facing: "South" },
  { plotNo: "26", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Boulevard Front", facing: "South" },
  { plotNo: "27", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Boulevard Front", facing: "South" },
  { plotNo: "28", sizeSqFt: 2400, dimensions: "40 x 60 ft", category: "Corner Plot", facing: "South" },
  { plotNo: "29", sizeSqFt: 1200, dimensions: "30 x 40 ft", category: "Standard Plot", facing: "East" },
  { plotNo: "30", sizeSqFt: 1200, dimensions: "30 x 40 ft", category: "Standard Plot", facing: "East" },
  { plotNo: "31", sizeSqFt: 1200, dimensions: "30 x 40 ft", category: "Standard Plot", facing: "East" },
  { plotNo: "32", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "West" },
  { plotNo: "33", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "West" },
  { plotNo: "34", sizeSqFt: 1500, dimensions: "30 x 50 ft", category: "Standard Plot", facing: "West" },
  { plotNo: "35", sizeSqFt: 1800, dimensions: "30 x 60 ft", category: "Corner Plot", facing: "North" },
  { plotNo: "36", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Garden Facing", facing: "West" },
  { plotNo: "37", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Garden Facing", facing: "West" },
  { plotNo: "38", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Garden Facing", facing: "West" },
  { plotNo: "39", sizeSqFt: 2100, dimensions: "35 x 60 ft", category: "Garden Facing", facing: "West" },
  { plotNo: "40", sizeSqFt: 2600, dimensions: "40 x 65 ft", category: "Corner Plot", facing: "East" },
];
