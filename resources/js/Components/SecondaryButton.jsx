export default function SecondaryButton({ children, className = '', disabled, ...props }) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-300 disabled:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
}
