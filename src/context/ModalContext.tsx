"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ModalType = "site-visit" | "lead" | "plot-inquiry" | "callback" | null;

interface ModalContextType {
  isOpen: boolean;
  activeModal: ModalType;
  modalData: unknown;
  openModal: (type: ModalType, data?: unknown) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalData, setModalData] = useState<unknown>(null);

  const openModal = (type: ModalType, data: unknown = null) => {
    setActiveModal(type);
    setModalData(data);
    setIsOpen(true);
    // Add overflow hidden to prevent body scroll under the modal
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    // Wait briefly for exit animations to complete before resetting active state
    setTimeout(() => {
      setActiveModal(null);
      setModalData(null);
    }, 300);
    
    if (typeof window !== "undefined") {
      document.body.style.overflow = "";
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        activeModal,
        modalData,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
