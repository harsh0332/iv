"use client";

import React, { useState, FormEvent } from "react";
import Button from "./Button";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { projectData } from "@/data/project-data";

export default function FormBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    plotSize: "1,500 Sq. Ft.",
    visitDay: "Any Day",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionFailed, setSubmissionFailed] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile Number is required";
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number (starting with 6-9)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getWhatsAppFallbackUrl = () => {
    const whatsappUrl = projectData.contact.whatsappUrl;
    const rawNumber = whatsappUrl.includes("wa.me")
      ? whatsappUrl.split("wa.me/")[1]?.split("?")[0]
      : "919893223331";
    const cleanNumber = (rawNumber || "919893223331").replace(/[^0-9]/g, "");
    
    const text = `Hi, I tried to submit a request on the site but encountered an issue. Here are my details:\nName: ${formData.name}\nPhone: ${formData.phone}\nPlot Size Interest: ${formData.plotSize}\nPreferred Visit Day: ${formData.visitDay}\nMessage: ${formData.message || "None"}`;
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionFailed(false);

    // Spam Honeypot Check
    if (honeypot.trim()) {
      // Simulate success for bots to prevent spam notifications
      setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
      }, 500);
      return;
    }

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL || "/api/leads";
      const source = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_source") || "direct" : "direct";
      const pageUrl = typeof window !== "undefined" ? window.location.href : "/";

      const payload = {
        name: formData.name,
        phone: formData.phone,
        plotSize: formData.plotSize,
        visitDay: formData.visitDay,
        message: formData.message,
        source,
        pageUrl,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Server returned non-ok status");
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setSubmissionFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      plotSize: "1,500 Sq. Ft.",
      visitDay: "Any Day",
      message: "",
    });
    setIsSuccess(false);
    setSubmissionFailed(false);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center text-center py-6 px-4 font-sans animate-fadeIn">
        <div className="rounded-full bg-success-muted/10 p-3.5 text-success-muted mb-4 animate-scaleIn">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-serif font-medium text-primary-800 mb-2">
          Request Submitted Successfully
        </h3>
        <p className="text-sm text-text-main/70 leading-relaxed max-w-sm">
          Thanks! Our team will call you shortly at{" "}
          <strong className="text-primary-800">{formData.phone}</strong> to confirm layout plans.
        </p>
        <div className="mt-6">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleReset}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm text-left">
      {/* Honeypot field (hidden from users, filled by bots) */}
      <input
        type="text"
        name="email_confirm"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      {/* Name Field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="form-name" className="text-xs font-semibold text-primary-800 flex items-center justify-between">
          <span>Full Name</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <input
          id="form-name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full rounded-lg border border-border-soft bg-accent/25 px-4 py-3 min-h-[48px] text-text-main outline-none focus:border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all ${
            errors.name ? "border-red-400 focus:ring-red-400 focus:border-red-400" : ""
          }`}
        />
        {errors.name && (
          <span className="text-[11px] font-semibold text-red-600 animate-fadeIn">
            {errors.name}
          </span>
        )}
      </div>

      {/* Phone Field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="form-phone" className="text-xs font-semibold text-primary-800 flex items-center justify-between">
          <span>Mobile Number</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <input
          id="form-phone"
          name="phone"
          type="tel"
          placeholder="Enter 10-digit mobile number"
          value={formData.phone}
          onChange={handleInputChange}
          className={`w-full rounded-lg border border-border-soft bg-accent/25 px-4 py-3 min-h-[48px] text-text-main outline-none focus:border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all ${
            errors.phone ? "border-red-400 focus:ring-red-400 focus:border-red-400" : ""
          }`}
        />
        {errors.phone && (
          <span className="text-[11px] font-semibold text-red-600 animate-fadeIn">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Plot Size Interest Select */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="form-plotsize" className="text-xs font-semibold text-primary-800">
          <span>Plot Size Interest</span>
        </label>
        <select
          id="form-plotsize"
          name="plotSize"
          value={formData.plotSize}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-border-soft bg-accent/25 px-4 py-3 min-h-[48px] text-text-main outline-none focus:border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all cursor-pointer"
        >
          <option value="1,500 Sq. Ft.">1,500 Sq. Ft.</option>
          <option value="2,100 Sq. Ft.">2,100 Sq. Ft.</option>
          <option value="Not sure">Not sure</option>
        </select>
      </div>

      {/* Preferred Visit Day Select */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="form-visitday" className="text-xs font-semibold text-primary-800">
          <span>Preferred Visit Day (Optional)</span>
        </label>
        <select
          id="form-visitday"
          name="visitDay"
          value={formData.visitDay}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-border-soft bg-accent/25 px-4 py-3 min-h-[48px] text-text-main outline-none focus:border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all cursor-pointer"
        >
          <option value="Any Day">Any Day</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
          <option value="Weekday">Weekday</option>
        </select>
      </div>

      {/* Message Text Field */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="form-message" className="text-xs font-semibold text-primary-800">
          <span>Message / Special Requests (Optional)</span>
        </label>
        <input
          id="form-message"
          name="message"
          type="text"
          placeholder="e.g. requesting corner plot, pick-up from railway station"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full rounded-lg border border-border-soft bg-accent/25 px-4 py-3 min-h-[48px] text-text-main outline-none focus:border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all"
        />
      </div>

      {submissionFailed && (
        <div className="flex flex-col gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-center font-sans">
          <p className="text-xs text-red-700 font-semibold leading-relaxed">
            Network issue. Please submit details via WhatsApp.
          </p>
          <a
            href={getWhatsAppFallbackUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-success-muted text-white text-xs font-semibold rounded-xl hover:opacity-95 transition-opacity"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Submit via WhatsApp</span>
          </a>
        </div>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full text-center py-4 justify-center"
        >
          Schedule Private Site Visit
        </Button>
      </div>
    </form>
  );
}
