import AsyncStorage from '@react-native-async-storage/async-storage';
import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export type ThemeState = {
    theme: boolean;
    setTheme: (theme: boolean) => void;
};

type ThemePersist = (
    config: StateCreator<ThemeState>,
    options: PersistOptions<ThemeState>,
) => StateCreator<ThemeState>;

const initialState: any = {
    theme: false,
}
export const themeStore = create<ThemeState>(
    (persist as unknown as ThemePersist)(
        set => ({
            ...initialState,
            setTheme: (theme: boolean) => set({ theme }),
        }),
        {
            name: 'theme-storage',
            getStorage: () => AsyncStorage,
        },

    ),
);

export default themeStore;