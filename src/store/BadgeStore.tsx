import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export type BadgeState = {
    badge: number;
    setBadge: (badge: number) => void;
};

type BadgePersist = (
    config: StateCreator<BadgeState>,
    options: PersistOptions<BadgeState>,
) => StateCreator<BadgeState>;

const initialState: any = {
    badge: 0,
}
export const badgeStore = create<BadgeState>(
    (persist as unknown as BadgePersist)(
        set => ({
            ...initialState,
            setBadge: (badge: any) => set({ badge }),
            reset: () => set(initialState)
        }),
        {
            name: 'badge-storage',
            getStorage: () => AsyncStorage,
        },

    ),
);

export default badgeStore;