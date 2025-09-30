    "use client";

    import Link from "next/link";
    import clsx from "clsx";

    export default function GradientButton({
    href,
    children,
    className,
    showArrow = true, 
    ...props 
    }) {
    return (
        <Link href={href} {...props}>
        <div
            className={clsx(
            "relative inline-block text-sm bg-gradient-to-r from-[#ffb87a] to-[#ff9a56] \
            hover:from-[#ff9a56] hover:to-[#e6935a] text-white font-medium \
            rounded-md px-8 py-2 transform hover:scale-105 transition-all duration-300 \
            shadow-lg shadow-orange-200/40 hover:shadow-xl hover:shadow-orange-200/50 \
            before:absolute before:inset-0 before:rounded-md before:bg-white/20 before:opacity-0 \
            hover:before:opacity-100 before:transition-all before:duration-300 \
            overflow-hidden group",
            className
            )}
        >
            <span className="relative z-10 flex items-center gap-2">
            {children}
            {showArrow && (
                <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
                </svg>
            )}
            </span>
        </div>
        </Link>
    );
    }
