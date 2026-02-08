"use client";

import { createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const DialogContext = createContext({});

export function Dialog({ children, open, onOpenChange }) {
    return (
        <DialogContext.Provider value={{ open, onOpenChange }}>
            {children}
        </DialogContext.Provider>
    );
}

export function DialogTrigger({ children, asChild, ...props }) {
    const { onOpenChange } = useContext(DialogContext);

    if (asChild) {
        return (
            <div onClick={() => onOpenChange(true)} {...props}>
                {children}
            </div>
        );
    }

    return (
        <button onClick={() => onOpenChange(true)} {...props}>
            {children}
        </button>
    );
}

export function DialogContent({ children, className, ...props }) {
    const { open, onOpenChange } = useContext(DialogContext);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onOpenChange(false)}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200]"
                    />


                    {/* Dialog */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                            "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[201]",
                            "w-[92vw] max-w-2xl max-h-[85vh] overflow-y-auto",
                            "bg-[var(--color-background)] border border-[var(--color-glass-border)] rounded-2xl shadow-2xl p-8",
                            className
                        )}
                        {...props}
                    >
                        <button
                            onClick={() => onOpenChange(false)}
                            className="absolute right-4 top-4 p-1 rounded-lg hover:bg-[var(--color-glass-bg)] transition-colors"
                        >
                            <X size={20} className="theme-text-muted" />
                        </button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export function DialogHeader({ className, ...props }) {
    return <div className={cn("mb-4", className)} {...props} />;
}

export function DialogTitle({ className, ...props }) {
    return (
        <h2
            className={cn("text-2xl font-bold heading-font theme-text-primary", className)}
            {...props}
        />
    );
}

export function DialogDescription({ className, ...props }) {
    return (
        <p className={cn("theme-text-muted mt-2", className)} {...props} />
    );
}

