import create from 'zustand';
import { persist } from 'zustand/middleware';
import shallow from 'zustand/shallow';
import { useMemo } from 'react';
import { pick } from 'lodash';

interface IUseLayoutStore {
  dashboard: 'client' | 'admin' | null;
  currentPage:  number | null;
  setCurrentPage: (n: number) => void;
  setDashboard  : (n: 'client' | 'admin') => void;
  sidebarWidth: number,
  showChildren: boolean,
  setShowChildren: (n: boolean) => void;
  setSidebarWidth: (n: number) => void;
}

export const useLayoutStore = create(
  persist<IUseLayoutStore>(
    (set) => ({
      dashboard: null,
      currentPage: null,
      sidebarWidth: 0,
      showChildren: false,
      setCurrentPage: (b: number) => {
        set({ currentPage: b });
      },
      setSidebarWidth: (b: number) => {
        set({ sidebarWidth: b });
      },
      setDashboard(d: 'client' | 'admin') {
        set({ dashboard: d });
      },
      setShowChildren: (v) => {
        set({ showChildren: v });
      }
    }),
    {
      name: 'layoutStorage',
      getStorage: () => window.sessionStorage,
    }
  )
);

const useLayout = (selector: Array<keyof IUseLayoutStore>) => {
  const memo = useMemo(() => selector, [selector]);
  return useLayoutStore((state) => pick(state, memo), shallow);
};
export default useLayout;