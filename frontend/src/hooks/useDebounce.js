import { useRef, useCallback } from 'react';

/**
 * Returns a function that delays invoking callback until after 'delay' milliseconds 
 * have elapsed since the last time the debounced function was invoked.
 * @param {function} callback - The function to be debounced.
 * @param {number} delay - The delay in milliseconds.
 * @returns {function} The debounced function.
 */
export function useDebounce(callback, delay) {
    // 1. We use a ref to store the timeout ID across re-renders.
    const timerRef = useRef();

    // 2. We return a stable function (via useCallback) that handles the logic.
    const debouncedCallback = useCallback((...args) => {
        // Clear any previous timer set by this debounce function
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        // Set a new timer
        timerRef.current = setTimeout(() => {
            // Execute the original callback function with the current arguments
            callback(...args);
        }, delay);

    // CRITICAL: The dependency array must include the 'callback' and 'delay'.
    // Including 'callback' ensures that if the function passed to useDebounce changes
    // (e.g., if it relies on component props/state that change), the debounced
    // function definition is also refreshed to point to the latest 'callback'.
    }, [callback, delay]); 

    return debouncedCallback;
}