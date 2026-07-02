import { useEffect, useRef } from 'react';

const useClickOutside = (refs, handler) => {
    const handlerRef = useRef(handler);

    useEffect(() => {
        handlerRef.current = handler;
    });

    useEffect(() => {
        const listener = (event) => {
            const isInside = refs.some((ref) => ref.current?.contains(event.target));
            if (isInside) return;
            handlerRef.current(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener, { passive: true });

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useClickOutside;
