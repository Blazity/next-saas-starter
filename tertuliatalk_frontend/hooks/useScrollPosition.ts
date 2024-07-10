import { useScrollPosition as originalUseScrollPosition } from '@n8tb1t/use-scroll-position';

declare type ElementRef = React.MutableRefObject<HTMLElement | undefined>;

type Axis = { x: number; y: number };
export type ScrollPositionEffectProps = { prevPos: Axis; currPos: Axis };

export function useScrollPosition(
  effect: (props: ScrollPositionEffectProps) => void,
  deps?: React.DependencyList | undefined,
  element?: ElementRef | undefined,
  useWindow?: boolean | undefined,
  wait?: number | undefined,
  boundingElement?: ElementRef | undefined,
) {
  return originalUseScrollPosition(effect, deps, element, useWindow, wait, boundingElement);
}
