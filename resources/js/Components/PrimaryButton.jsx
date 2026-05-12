export default function PrimaryButton({ children, className = '', ...props }) {
    return (
        <button
            type="button"
            className={`inline-flex items-center justify-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
