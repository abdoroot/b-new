export default function PrimaryButton({ children, className = '', disabled, ...props }) {
    return (
        <button
            {...props}
            disabled={disabled}
            className={`inline-flex items-center justify-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 disabled:opacity-50 ${className}`}
        >
            {children}
        </button>
    );
}
