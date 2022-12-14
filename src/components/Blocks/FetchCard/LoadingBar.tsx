import { Button } from '@chakra-ui/react';
import useIsomorphicLayoutEffect from 'hooks/useIsomorphicLayoutEffect';
import React, { useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import useComponentsStoreSelector from 'stores/component';

/**
 * Transition indicator
 * @author Whitson Dzimah
 * @returns
 */
const LoadingTopBar = () => {
  const refButton = useRef<HTMLButtonElement>(null);
  const { useLoading, setLoadingRef, useButtonRef, setClicked } =
    useComponentsStoreSelector([
      'isPending',
      'useLoading',
      'setLoadingRef',
      'useButtonRef',
      'isPending',
      'setClicked',
    ]);

  useButtonRef(refButton);
  const ref = useLoading();
  useIsomorphicLayoutEffect(() => {
    setLoadingRef(ref);
  }, [ref]);
  return (
    <>
      <LoadingBar color="#31BC2E" ref={ref} />
      <Button
        display="none"
        ref={refButton}
        onClick={() => {
          setClicked(false);
          ref?.current?.complete();
        }}
      />
    </>
  );
};

export default LoadingTopBar;
