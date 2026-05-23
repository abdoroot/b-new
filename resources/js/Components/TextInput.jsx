import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, isDark = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    const baseClasses = isDark
        ? 'border-amber-500/20 bg-neutral-900/50 text-stone-100 placeholder:text-stone-500 focus:border-amber-500/40 focus:ring-amber-500/10'
        : 'border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:border-amber-500 focus:ring-amber-500';

    return (
        <input
            {...props}
            type={type}
            className={
                `rounded-xl px-4 py-3 shadow-sm transition focus:ring-4 ` +
                baseClasses +
                ' ' +
                className
            }
            ref={localRef}
        />
    );
});
