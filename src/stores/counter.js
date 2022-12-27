// Import si create
import create from 'zustand';

// "slice"
const sliceCounter = (set) => ({
    // state awalnya mau seperti apa

    // state di dalam zustand sifatnya adalah IMMUTABLE
    counter: 1000,

    // action
    incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
});

// "hooks"
const useCounterStore = create(sliceCounter);

// "selector"
export const selectCounter = (state) => state.counter;
export const selectIncrementCounter = (state) => state.incrementCounter;

// export si hooks
export default useCounterStore;