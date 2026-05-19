export default function PrimaryButton({ children, className = '', disabled, ...props }) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-500/20 disabled:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
}
