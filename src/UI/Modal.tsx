import React from "react";
import Button from "./Button";
import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutSideClick";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ open, onClose, title, children }: ModalProps) {
  const ref = useOutsideClick(onClose)
  return (
    open && (
      <div className="backdrop-blur-sm fixed  top-0 left-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
        <div ref={ref} className="md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto w-[calc(100vw-1rem)]fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out">
          <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
            <p className="text-secondary-700 font-bold text-base">{title}</p>
            <Button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </Button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
