'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface LinkItem {
  name: string;
  href: string;
}

interface SidebarProps {
  links?: LinkItem[];
  isOpen?: boolean;
  onClose?: () => void, 
}

const ModalSidebar: React.FC<SidebarProps> = ({ links, isOpen, onClose }) => {

  return (
    <>
      {/* Sidebar */}
      <motion.div
        className="fixed top-0 overflow-scroll right-0 h-full bg-background-dark shadow-lg w-64 z-50"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center p-2">
            <h1 className="text-xl text-secondary-dark">Components</h1>
          <button
            className="text-indigo-600 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <ul className="space-y-4 p-4">
          {links?.map((link) => (
            <li key={link.name}>
              <Link onClick={onClose} className="text-lg  hover:p-2 hover:shadow-md hover:shadow-secondary-dark hover:border-b-4 hover:bg-primary-dark text-indigo-600 hover:text-secondary-light hover:border hover:border-r-4 hover:border-background-dark" href={link.href}>
                  {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Background overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default ModalSidebar;
