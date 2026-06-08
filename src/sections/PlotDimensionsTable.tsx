"use client";
import React, { useState, useMemo } from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { plotsList } from "@/data/plots-list";
import { useModal } from "@/context/ModalContext";
import Button from "@/components/Button";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";

export default function PlotDimensionsTable() {
  const { openModal } = useModal();
  
  // Search, filter, sort states
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sizeFilter, setSizeFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"plotNo" | "sizeSqFt">("plotNo");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All");
    setSizeFilter("All");
    setSortBy("plotNo");
    setSortOrder("asc");
  };

  // Filtered and sorted plots
  const processedPlots = useMemo(() => {
    let result = [...plotsList];

    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((plot) => plot.plotNo.toLowerCase().includes(query));
    }

    // Category Filter
    if (categoryFilter !== "All") {
      result = result.filter((plot) => plot.category === categoryFilter);
    }

    // Size Filter
    if (sizeFilter !== "All") {
      if (sizeFilter === "1500") {
        result = result.filter((plot) => plot.sizeSqFt === 1500);
      } else if (sizeFilter === "2100") {
        result = result.filter((plot) => plot.sizeSqFt === 2100);
      } else if (sizeFilter === "other") {
        result = result.filter((plot) => plot.sizeSqFt !== 1500 && plot.sizeSqFt !== 2100);
      }
    }

    // Sort
    result.sort((a, b) => {
      let valA: string | number = a[sortBy];
      let valB: string | number = b[sortBy];

      if (sortBy === "plotNo") {
        valA = parseInt(a.plotNo, 10);
        valB = parseInt(b.plotNo, 10);
      }

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }, [searchQuery, categoryFilter, sizeFilter, sortBy, sortOrder]);

  const toggleSort = (field: "plotNo" | "sizeSqFt") => {
    if (sortBy === field) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <Section id="plot-dimensions-table" bg="ivory" py="md" className="scroll-mt-24 pt-0">
      <Container>
        {/* Controls Panel */}
        <div className="bg-white border border-border-soft rounded-2xl p-4 md:p-6 mb-6 shadow-sm font-sans text-xs">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-text-main/40" />
              </span>
              <input
                type="text"
                placeholder="Search plot number (e.g. 05)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-accent/20 border border-border-soft rounded-xl text-text-main placeholder-text-main/40 focus:outline-none focus:border-secondary-400 focus:bg-white transition-all text-xs"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center">
              <div className="flex items-center gap-1.5 shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-secondary-500" />
                <span className="font-semibold text-primary-800">Filter By:</span>
              </div>

              {/* Category Filter */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 bg-accent/20 border border-border-soft rounded-xl text-text-main focus:outline-none focus:border-secondary-400 focus:bg-white text-xs"
              >
                <option value="All">All Categories</option>
                <option value="Standard Plot">Standard Plots</option>
                <option value="Garden Facing">Garden Facing</option>
                <option value="Corner Plot">Corner Plots</option>
                <option value="Boulevard Front">Boulevard Front</option>
              </select>

              {/* Size Filter */}
              <select
                value={sizeFilter}
                onChange={(e) => setSizeFilter(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 bg-accent/20 border border-border-soft rounded-xl text-text-main focus:outline-none focus:border-secondary-400 focus:bg-white text-xs"
              >
                <option value="All">All Sizes</option>
                <option value="1500">1,500 Sq. Ft.</option>
                <option value="2100">2,100 Sq. Ft.</option>
                <option value="other">Custom Sizes (Other)</option>
              </select>

              {/* Reset Button */}
              {(searchQuery || categoryFilter !== "All" || sizeFilter !== "All" || sortBy !== "plotNo") && (
                <button
                  onClick={handleResetFilters}
                  className="px-3.5 py-2 text-secondary-600 hover:text-secondary-700 font-semibold transition-colors shrink-0"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-border-soft/60 bg-white shadow-sm font-sans">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-accent/40 border-b border-border-soft/60 text-xs font-semibold text-primary-800">
                <th className="p-4 pl-6">
                  <button
                    onClick={() => toggleSort("plotNo")}
                    className="flex items-center gap-1 hover:text-secondary-600 transition-colors uppercase tracking-wider"
                  >
                    Plot No.
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </button>
                </th>
                <th className="p-4 uppercase tracking-wider">Dimensions</th>
                <th className="p-4">
                  <button
                    onClick={() => toggleSort("sizeSqFt")}
                    className="flex items-center gap-1 hover:text-secondary-600 transition-colors uppercase tracking-wider"
                  >
                    Size (Sq. Ft.)
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </button>
                </th>
                <th className="p-4 uppercase tracking-wider">Category</th>
                <th className="p-4 uppercase tracking-wider">Facing</th>
                <th className="p-4 uppercase tracking-wider text-right pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft/40 text-xs text-text-main/80">
              {processedPlots.length > 0 ? (
                processedPlots.map((plot) => (
                  <tr key={plot.plotNo} className="hover:bg-accent/10 transition-colors">
                    <td className="p-4 pl-6 font-bold text-primary-800">Plot #{plot.plotNo}</td>
                    <td className="p-4">{plot.dimensions}</td>
                    <td className="p-4 font-semibold">{plot.sizeSqFt.toLocaleString()} Sq. Ft.</td>
                    <td className="p-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/40 border border-border-soft/50 text-[10px] font-semibold text-text-main/70">
                        {plot.category}
                      </span>
                    </td>
                    <td className="p-4 font-medium">{plot.facing}</td>
                    <td className="p-4 text-right pr-6">
                      <button
                        onClick={() =>
                          openModal("plot-inquiry", {
                            plotSize: `Plot ${plot.plotNo} (${plot.sizeSqFt.toLocaleString()} Sq. Ft.)`,
                          })
                        }
                        className="text-xs font-semibold text-secondary-500 hover:text-secondary-600 transition-colors py-1.5 px-3 border border-secondary-300 hover:border-secondary-500 rounded-lg bg-white"
                      >
                        Inquire Plot
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-sm text-text-main/50 font-medium">
                    No plots match the selected search or filter criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View (eliminates horizontal scrolling issues entirely!) */}
        <div className="md:hidden space-y-4 font-sans text-xs">
          {processedPlots.length > 0 ? (
            processedPlots.map((plot) => (
              <div
                key={plot.plotNo}
                className="bg-white border border-border-soft/80 rounded-2xl p-5 shadow-sm text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-border-soft pb-2.5 mb-3">
                  <span className="text-sm font-bold text-primary-800">Plot #{plot.plotNo}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/40 border border-border-soft/40 text-text-main/70">
                    {plot.category}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-main/50 block">Dimensions</span>
                    <span className="font-semibold text-primary-800">{plot.dimensions}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-main/50 block">Area</span>
                    <span className="font-semibold text-primary-800">{plot.sizeSqFt.toLocaleString()} Sq. Ft.</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-text-main/50 block">Facing</span>
                    <span className="font-semibold text-primary-800">{plot.facing}</span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    openModal("plot-inquiry", {
                      plotSize: `Plot ${plot.plotNo} (${plot.sizeSqFt.toLocaleString()} Sq. Ft.)`,
                    })
                  }
                  className="w-full text-xs py-2 justify-center"
                >
                  Inquire Plot #{plot.plotNo}
                </Button>
              </div>
            ))
          ) : (
            <div className="bg-white border border-border-soft rounded-2xl p-8 text-center text-text-main/50">
              No plots match the selected search or filter criteria.
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
