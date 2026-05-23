export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-stone-300 text-amber-500 shadow-sm focus:ring-amber-500 focus:ring-offset-0 ' +
                className
            }
        />
    );
}
