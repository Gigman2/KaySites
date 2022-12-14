import useEventListener from 'hooks/useEventListener';
import { pick } from 'lodash';
import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useTransition as useT,
} from 'react';
import { LoadingBarRef } from 'react-top-loading-bar';
import create from 'zustand';
import shallow from 'zustand/shallow';

interface IHandleClick {
  name?: string;
  title?: string;
  data?: string | Record<string, any>;
  func?: () => void;
  id?: string;
  [x: string]: unknown;
  blockId?: string;
}

interface IComponentsState {
  marketPlaceBarPosition: number;
  setMarketPlaceBarPosition: (arg: number) => void;
  isOnline: boolean;
  setIsOnline: (arg: boolean) => void;
  modal: string;
  title: string;
  mode: string;
  getId: string;
  modalData: unknown;
  func: () => void | null;
  onClose: () => void;
  onOpen: () => void;
  isSubmitting: boolean;
  isOpen: boolean;
  savedCoordinates: unknown;
  setComponentLoading: (arg: boolean) => void;
  setSavedCoordinates: (arg: unknown) => void;
  handleClick: (arg: IHandleClick) => void;
  setModalData: (arg: IHandleClick) => void;
  isSideBarOpen: boolean;
  setIsSideBarOpen: (arg?: boolean) => void;
  sideBarHovered: boolean;
  blockId?: string;
  useSideBarHover: <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>
  ) => boolean;
  useLoading: () => RefObject<LoadingBarRef>;
  isLoading: boolean;
  setIsLoading: (arg: boolean) => void;
  loadingRef: RefObject<LoadingBarRef> | null;
  loadingButtonRef: RefObject<HTMLButtonElement> | null;
  setLoadingRef: (a: RefObject<LoadingBarRef>) => void;
  useTransition: () => React.TransitionStartFunction;
  useButtonRef: (ref: RefObject<HTMLButtonElement> | null) => void;
  isPending: boolean;
  clicked: boolean;
  setClicked: (a: boolean) => void;
}

/**
 * @author Whitson Dzimah
 * @description State object for controlling main application components
 */

export const useComponentsStore = create<IComponentsState>((set, get) => ({
  marketPlaceBarPosition: 0,
  setMarketPlaceBarPosition(arg) {
    set({ marketPlaceBarPosition: arg });
  },
  /**
   * loading button ref
   */
  loadingButtonRef: null,

  /**
   * transitioning indicator
   */
  isPending: false,

  /**
   *
   * @param ref updates ref object for loading ref button
   */
  useButtonRef: (ref: RefObject<HTMLButtonElement> | null) => {
    useEffect(() => {
      set({
        loadingButtonRef: ref,
      });
    }, [ref]);
  },

  /**
   * indicates when the loading ref button has been clicked
   */
  clicked: false,

  /**
   * updates clicked state
   * @param a clicked state
   */
  setClicked: (a: boolean) => {
    set({ clicked: a });
  },

  /**
   *
   * @description returns a function that defers state updates
   */
  useTransition: () => {
    // eslint-disable-next-line no-shadow
    const [isPending, startTransition] = useT();
    const ref = get().loadingButtonRef;
    const ref2 = get().loadingRef;
    const { clicked } = get();
    const { setClicked } = get();
    useEffect(() => {
      set({
        isPending,
      });
    }, [isPending]);
    useEffect(() => {
      if (clicked) {
        ref?.current?.click();
      }
    }, [clicked, isPending, ref]);
    return useCallback(
      (callback) => {
        setClicked(true);
        ref2?.current?.continuousStart();
        startTransition(callback);
      },
      [ref2, setClicked, startTransition]
    );
  },

  /**
   *
   * @description hook returns a ref object to control loading bar when transitioning
   */
  useLoading: () => {
    const { isLoading } = get();
    const ref = useRef<LoadingBarRef>(null);
    const current = ref?.current?.continuousStart;
    useEffect(() => {
      if (isLoading && current) {
        ref?.current?.continuousStart();
      }
    }, [current, isLoading]);

    return ref;
  },
  setLoadingRef: (a: RefObject<LoadingBarRef>) => {
    set({
      loadingRef: a,
    });
  },

  /**
   * loading bar ref object
   */
  loadingRef: null,

  /**
   * shows whether a component is loading or not
   */
  isLoading: false,

  /**
   * @description
   * @param loading component isLoading state
   */
  setIsLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
  modal: '',
  title: '',
  mode: '',
  getId: '',
  modalData: undefined,
  func: () => {},
  setIsOnline: (arg: boolean) => {
    set({ isOnline: arg });
  },
  isOnline: true,

  /**
   * @description Sets isOpen to false
   */
  onClose() {
    set({
      isOpen: false,
    });
  },

  /**
   * @description Sets isOpen to true
   */
  onOpen() {
    set({
      isOpen: true,
    });
  },
  isSubmitting: false,
  isOpen: false,
  savedCoordinates: null,

  /**
   * @description Updates state for componentLoading state variable in store
   *
   */
  setComponentLoading(componentLoading: boolean) {
    set({ isSubmitting: componentLoading });
  },

  setModalData(data) {
    set({ modalData: data });
  },
  /**
   * @description Updates state for savedCoordinates state variable in store
   *
   */
  setSavedCoordinates(value: unknown) {
    set({
      savedCoordinates: value,
    });
  },

  selectedData: null,
  componentLoading: false,
  formFieldTitle: '',

  /**
   * @description Function updates various states for main modal Component consumables at a given time
   *
   */
  handleClick({ name, title, data, func, id, formFieldTitle, ...rest }) {
    set({
      modal: name,
      title,
      modalData: data,
      func,
      getId: id,
      ...rest,
    });
    get().onOpen();
  },

  isSideBarOpen: true,
  sideBarHovered: false,
  /**
   * @description This controls when to show the button for collapsing the side bar or expanding the side bar
   * @param ref side bar ref object
   * @returns
   */
  useSideBarHover: <T extends HTMLElement = HTMLElement>(ref: RefObject<T>) => {
    const handleMouseOver = () => set({ sideBarHovered: true });
    const handleMouseOut = () => set({ sideBarHovered: false });
    useEventListener('mouseenter', handleMouseOver, ref);
    useEventListener('mouseleave', handleMouseOut, ref);
    return get().sideBarHovered;
  },
  setIsSideBarOpen(arg) {
    if (typeof arg === 'boolean') {
      return set({ isSideBarOpen: arg });
    }
    return set({ isSideBarOpen: !get().isSideBarOpen });
  },
}));

/**
 *
 * @param arg loading state for loading bar
 */
export const useLoadingBar = (arg: boolean) =>
  useComponentsStore((s) => s.setIsLoading)(arg);

/**
 * @description ref object for loading bar
 */
export const { loadingRef, isPending } = useComponentsStore.getState();

/**
 * @description returns a function that defers state update built using React useTransition, this comes with a default loading bar at the top of the application to indicate when transitioning is happening
 */
export const useTransition = () => useComponentsStore((s) => s.useTransition)();

/**
 * @description useComponentsStoreSelector returns useComponent store state by default but can be subtly told to return specific members of state
 */

type KeysOfIComponentsState = Array<keyof IComponentsState>;

/**
 * @author Whitson Dzimah
 * @description Returns shallowly deferred component state object given keys
 * @param selector keys to return from component state
 */
const useComponentsStoreSelector = (selector: KeysOfIComponentsState) => {
  const memo = useMemo(() => selector, [selector]);
  /**
   * constructing a single object with multiple state-picks inside, similar to redux's mapStateToProps,
   * you can tell zustand that you want the object to be diffed shallowly by passing the shallow equality function.
   *
   * DEFAULTs returns the entire state object
   */
  return useComponentsStore((s) => pick(s, memo), shallow) as IComponentsState;
};

export default useComponentsStoreSelector;
