import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
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

    return (
        <input
            {...props}
            type={type}
            className={
                'rounded-xl border-amber-500/20 bg-neutral-900/50 px-4 py-3.5 text-stone-100 shadow-sm transition focus:border-amber-500/40 focus:ring-4 focus:ring-amber-500/10 ' +
                className
            }
            ref={localRef}
        />
    );
});
