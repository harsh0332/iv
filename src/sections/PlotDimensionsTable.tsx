"use client";
import React, { useState, useMemo } from "react";
import { Container, Section } from "@/components/SectionWrapper";
import { plotsList, reservedPlotsInfo } from "@/data/plots-list";
import { projectData } from "@/data/project-data";
import Button from "@/components/Button";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";

export default function PlotDimensionsTable() {
  // Search, filter, sort states
  const [searchQuery, setSearchQuery] = useState("");
  const [facingFilter, setFacingFilter] = useState("All");
  const [cornerOnly, setCornerOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"plotNo" | "sizeSqFt">("plotNo");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Dynamic facing options extracted from the real data
  const facingOptions = useMemo(() => {
    const facings = new Set<string>();
    plotsList.forEach((plot) => {
      if (plot.facing) {
        facings.add(plot.facing);
      }
    });
    return Array.from(facings).sort();
  }, []);

  // WhatsApp link generator
  const getWhatsAppLink = (plotNo: string, sizeSqFt: number) => {
    const rawNumber = projectData.contact.whatsappUrl.includes("wa.me")
      ? projectData.contact.whatsappUrl.split("wa.me/")[1]?.split("?")[0]
      : "919893223331";
    const cleanNumber = (rawNumber || "919893223331").replace(/[^0-9]/g, "");
    const text = `Hi, I am interested in Plot #${plotNo} (${sizeSqFt.toLocaleString()} Sq. Ft.) at Ivy Estate Bhopal. Please share availability and pricing details.`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setFacingFilter("All");
    setCornerOnly(false);
    setSortBy("plotNo");
    setSortOrder("asc");
  };

  // Filtered and sorted plots
  const processedPlots = useMemo(() => {
    let result = [...plotsList];

    // Search (by plot no)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((plot) => plot.plotNo.toLowerCase().includes(query));
    }

    // Facing Filter
    if (facingFilter !== "All") {
      result = result.filter((plot) => plot.facing === facingFilter);
    }

    // Corner Only Filter
    if (cornerOnly) {
      result = result.filter((plot) => plot.corner);
    }

    // Sort
    result.sort((a, b) => {
      let valA: number = 0;
      let valB: number = 0;

      if (sortBy === "plotNo") {
        valA = parseInt(a.plotNo, 10);
        valB = parseInt(b.plotNo, 10);
      } else if (sortBy === "sizeSqFt") {
        valA = a.sizeSqFt;
        valB = b.sizeSqFt;
      }

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }, [searchQuery, facingFilter, cornerOnly, sortBy, sortOrder]);

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

              {/* Facing Filter */}
              <select
                value={facingFilter}
                onChange={(e) => setFacingFilter(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 bg-accent/20 border border-border-soft rounded-xl text-text-main focus:outline-none focus:border-secondary-400 focus:bg-white text-xs font-semibold"
              >
                <option value="All">All Facings</option>
                {facingOptions.map((facing) => (
                  <option key={facing} value={facing}>
                    {facing} Facing
                  </option>
                ))}
              </select>

              {/* Corner Toggle */}
              <label className="flex items-center gap-2 cursor-pointer select-none px-3.5 py-2.5 bg-accent/20 border border-border-soft rounded-xl text-xs font-semibold text-text-main hover:bg-accent/30 transition-colors shrink-0">
                <input
                  type="checkbox"
                  checked={cornerOnly}
                  onChange={(e) => setCornerOnly(e.target.checked)}
                  className="w-3.5 h-3.5 rounded border-border-soft text-secondary-500 focus:ring-secondary-500 accent-secondary-500 cursor-pointer"
                />
                <span>Corner Plots Only</span>
              </label>

              {/* Reset Button */}
              {(searchQuery || facingFilter !== "All" || cornerOnly || sortBy !== "plotNo") && (
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
                <th className="p-4">
                  <button
                    onClick={() => toggleSort("sizeSqFt")}
                    className="flex items-center gap-1 hover:text-secondary-600 transition-colors uppercase tracking-wider"
                  >
                    Area (Sq. Ft.)
                    <ArrowUpDown className="w-3.5 h-3.5" />
                  </button>
                </th>
                <th className="p-4 uppercase tracking-wider">Dimensions</th>
                <th className="p-4 uppercase tracking-wider">Facing</th>
                <th className="p-4 uppercase tracking-wider">Corner</th>
                <th className="p-4 uppercase tracking-wider text-right pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-soft/40 text-xs text-text-main/80">
              {processedPlots.length > 0 ? (
                processedPlots.map((plot) => (
                  <tr key={plot.plotNo} className="hover:bg-accent/10 transition-colors">
                    <td className="p-4 pl-6 font-bold text-primary-800">Plot #{plot.plotNo}</td>
                    <td className="p-4 font-semibold">{plot.sizeSqFt.toLocaleString()} Sq. Ft.</td>
                    <td className="p-4">{plot.dimensions}</td>
                    <td className="p-4 font-medium">{plot.facing}</td>
                    <td className="p-4">
                      {plot.corner ? (
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-[10px] font-semibold text-secondary-600">
                          Yes
                        </span>
                      ) : (
                        <span className="text-text-main/40 font-medium">—</span>
                      )}
                    </td>
                    <td className="p-4 text-right pr-6">
                      <a
                        href={getWhatsAppLink(plot.plotNo, plot.sizeSqFt)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-xs font-semibold text-secondary-500 hover:text-secondary-600 transition-colors py-1.5 px-3 border border-secondary-300 hover:border-secondary-500 rounded-lg bg-white"
                      >
                        Enquire
                      </a>
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

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-4 font-sans text-xs">
          {processedPlots.length > 0 ? (
            processedPlots.map((plot) => (
              <div
                key={plot.plotNo}
                className="bg-white border border-border-soft/80 rounded-2xl p-5 shadow-sm text-left flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-border-soft pb-2.5 mb-3">
                  <span className="text-sm font-bold text-primary-800">Plot #{plot.plotNo}</span>
                  {plot.corner && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-600">
                      Corner Plot
                    </span>
                  )}
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
                    window.open(getWhatsAppLink(plot.plotNo, plot.sizeSqFt), "_blank")
                  }
                  className="w-full text-xs py-2 justify-center"
                >
                  Enquire Plot #{plot.plotNo}
                </Button>
              </div>
            ))
          ) : (
            <div className="bg-white border border-border-soft rounded-2xl p-8 text-center text-text-main/50">
              No plots match the selected search or filter criteria.
            </div>
          )}
        </div>

        {/* Footnote about EWS/LIG reserved plots */}
        <div className="mt-6 p-4 bg-accent/20 border border-border-soft rounded-2xl font-sans text-xs text-text-main/70">
          <p className="font-bold text-primary-800 mb-2">Note on Reserved Plots:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reservedPlotsInfo.map((category, idx) => (
              <div key={idx} className="bg-white/50 p-3 rounded-xl border border-border-soft/40">
                <span className="font-semibold text-primary-800 block text-xs mb-1">{category.label}</span>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-text-main/80">
                  <span><strong>Units:</strong> {category.units}</span>
                  <span><strong>Sizes:</strong> {category.sizes}</span>
                  <span><strong>Eligibility:</strong> {category.incomeLimit}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] text-text-main/50 leading-relaxed">
            * EWS (Economically Weaker Section) and LIG (Low Income Group) plots are strictly reserved under local developmental compliance policies and are not part of the active sellable residential inventory.
          </p>
        </div>
      </Container>
    </Section>
  );
}
