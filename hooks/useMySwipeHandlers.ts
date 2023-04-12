import { useSwipeable } from "react-swipeable";
import { Link as ScrollLink, scroller } from "react-scroll";
/*
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= windowHeight && rect.right <= windowWidth;
}*/

export default function useMySwipeHandlers(sec: string, dec: string, prevscroll: boolean) {
  return useSwipeable({
    onSwipedUp: (e) => {
      scroller.scrollTo(sec, { smooth: true, offset: -60, duration: 200 });
      //console.log(sec, e);
  
    },
    onSwipedDown: (e) => scroller.scrollTo(dec, { smooth: true, offset: -60, duration: 200 }),
    preventScrollOnSwipe: prevscroll,
    trackMouse: true
  });
}