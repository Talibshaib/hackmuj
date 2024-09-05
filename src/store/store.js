// src/store/store.js
import { create } from 'zustand';

const useAdminStore = create((set) => ({
    filters: {
        country: '',
        disaster: '',
    },
    sosMessages: [], // List of SOS messages
    addSosMessage: (message) =>
        set((state) => ({
            sosMessages: [...state.sosMessages, message],
        })),
    setFilter: (field, value) =>
        set((state) => ({
            filters: {
                ...state.filters,
                [field]: value,
            },
        })),
}));

export default useAdminStore;
