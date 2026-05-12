export default function SecondaryButton({ children, className = '', ...props }) {
    return (
        <button
            type="button"
            className={`inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
