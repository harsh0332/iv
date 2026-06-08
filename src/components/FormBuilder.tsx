"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";
import { tracking } from "@/lib/tracking";

interface FormField {
  id: string;
  label: string;
  type: "text" | "tel" | "email" | "select" | "date";
  placeholder?: string;
  required: boolean;
  options?: string[];
}

interface FormBuilderProps {
  fields: FormField[];
  submitLabel?: string;
  onSuccess?: (data: Record<string, string>) => void;
  formType: "site-visit" | "lead" | "plot-inquiry" | "callback";
  extraData?: Record<string, unknown>;
}

export default function FormBuilder({
  fields,
  submitLabel = "Submit Details",
  onSuccess,
  formType,
  extraData = {},
}: FormBuilderProps) {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    fields.forEach((f) => {
      initial[f.id] = f.type === "select" && f.options ? f.options[0] : "";
    });
    return initial;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
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

    fields.forEach((field) => {
      const val = formData[field.id]?.trim();

      if (field.required && !val) {
        newErrors[field.id] = `${field.label} is required`;
      } else if (val) {
        if (field.type === "email" && !/\S+@\S+\.\S+/.test(val)) {
          newErrors[field.id] = "Please enter a valid email address";
        }
        if (field.type === "tel" && !/^[6-9]\d{9}$/.test(val.replace(/[^0-9]/g, ""))) {
          newErrors[field.id] = "Please enter a valid 10-digit mobile number";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const source = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_source") || "direct" : "direct";
      const pageUrl = typeof window !== "undefined" ? window.location.href : "/";

      // 1. Prepare Payload
      const payload = {
        name: formData.name || "",
        phone: formData.phone || "",
        leadType: formType,
        message: formData.message || "",
        visitDate: formData.visitDate || "",
        visitTime: formData.visitTimeSlot || formData.visitTime || "",
        budgetRange: formData.budgetRange || "",
        source,
        timestamp: new Date().toISOString(),
        pageUrl,
        honeypot,
        ...extraData,
      };

      // 2. Submit to Next.js API Route
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }

      // 3. Trigger Analytics Events
      tracking.formSubmitted(formType, { name: payload.name, phone: payload.phone });
      if (formType === "site-visit") {
        tracking.siteVisitSubmitted({ date: payload.visitDate, time: payload.visitTime });
      } else if (formType === "callback") {
        tracking.callbackRequested();
      }

      setIsSuccess(true);
      if (onSuccess) {
        onSuccess(formData);
      }
    } catch (err) {
      console.error("Submission failed:", err);
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrors({ global: message });
    } finally {
      setIsSubmitting(false);
    }
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
          Thank you for your interest! A dedicated Relationship Manager from our team will contact you at{" "}
          <strong className="text-primary-800">{formData.phone}</strong> shortly.
        </p>
        <div className="mt-6">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setIsSuccess(false)}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
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
      {errors.global && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-600 font-semibold">
          {errors.global}
        </div>
      )}

      {fields.map((field) => {
        const error = errors[field.id];
        const inputId = `field-${field.id}`;

        return (
          <div key={field.id} className="flex flex-col gap-1.5">
            <label
              htmlFor={inputId}
              className="text-xs font-semibold text-primary-800 flex items-center justify-between"
            >
              <span>{field.label}</span>
              {field.required && <span className="text-red-500 font-bold">*</span>}
            </label>

            {field.type === "select" ? (
              <select
                id={inputId}
                name={field.id}
                value={formData[field.id]}
                onChange={handleInputChange}
                className={`w-full rounded-lg border border-border-soft bg-accent/25 px-4 py-3 min-h-[48px] text-text-main outline-none focus:border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all cursor-pointer ${
                  error ? "border-red-400 focus:ring-red-400 focus:border-red-400" : ""
                }`}
              >
                {field.options?.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={inputId}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.id]}
                onChange={handleInputChange}
                className={`w-full rounded-lg border border-border-soft bg-accent/25 px-4 py-3 min-h-[48px] text-text-main outline-none focus:border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all ${
                  error ? "border-red-400 focus:ring-red-400 focus:border-red-400" : ""
                }`}
              />
            )}

            {error && (
              <span className="text-[11px] font-semibold text-red-600 animate-fadeIn" id={`error-${field.id}`}>
                {error}
              </span>
            )}
          </div>
        );
      })}

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full text-center py-4"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}
