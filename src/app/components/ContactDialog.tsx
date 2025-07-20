"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
interface ContactDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        console.log("Sending form data:", form);
        try {
            await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setStatus("sent");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-black font-mono font-light">
            <div
                className="relative md:w-lg w-11/12 max-w-md mx-auto p-8 bg-white border-4 border-black rounded-lg shadow-[8px_8px_0_0_#000] flex flex-col gap-4"
                style={{
                    fontFamily: "monospace",
                    boxShadow: "8px 8px 0 0 #000",
                }}
            >
                <div className="justify-between items-center align-middle flex flex-row border-b-4 border-black pb-2 mb-4">
                    <h2 className="text-2xl font-bold">Contact Me</h2>
                    <button
                    onClick={()=> {
                        onClose();
                        setStatus("idle");
                        setForm({ name: "", email: "", message: "" });
                    }}
                    className=" text-black font-bold text-xl hover:text-red-600"
                    aria-label="Close"
                    type="button"
                >
                    <X />
                </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border-2 border-black rounded bg-gray-100 focus:outline-none focus:bg-white"
                        />
                    </label>
                    <label className="font-semibold">
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 p-2 border-2 border-black rounded bg-gray-100 focus:outline-none focus:bg-white"
                        />
                    </label>
                    <label className="font-semibold">
                        Message
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full mt-1 p-2 border-2 border-black rounded bg-gray-100 focus:outline-none focus:bg-white resize-none"
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="bg-yellow-300 border-2 border-black rounded px-4 py-2 font-bold shadow-[4px_4px_0_0_#000] hover:bg-yellow-400 transition"
                    >
                        {status === "sending" ? "Sending..." : "Send"}
                    </button>
                    {status === "sent" && (
                        <div className="text-green-700 font-bold mt-2">Message sent!</div>
                    )}
                    {status === "error" && (
                        <div className="text-red-700 font-bold mt-2">Error sending message.</div>
                    )}
                </form>
            </div>
        </div>
    );
}