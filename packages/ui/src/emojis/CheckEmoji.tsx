import * as React from "react";
import { EmojiProps } from "./types";

const CheckMarkButtonEmoji = React.forwardRef<SVGSVGElement, EmojiProps>(({ size = 20, ...props }, ref) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <rect width="72" height="72" fill="url(#CheckMarkButtonEmojiPattern)" />
      <defs>
        <pattern id="CheckMarkButtonEmojiPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#CheckMarkButtonEmojiImage" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="CheckMarkButtonEmojiImage"
          width="72"
          height="72"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC3FBMVEUAAAAAhRcAmwAAkQAAhgsAlAEAjQAAlw8AlgsAlQYAmAAAkAAAjAAAjQAAghUAkwAAiRYAihUAmQAAiRUAlQAAlQoAhBYAixQAlwAAhQwAiwsAhBQAkAAAhRUAiQoAjwAAhgsAkBUAkBQAlREAlBEAiwABgxYAigAAlQAAjxIAjBMAlQAAlAAAiwAAlAAAgBQAiwABghYBghb///8AsgAAtAAAwAAAuQAAtwAAvQAAuwAAtgAAwwsAwggAxA8ArwAAqwBa2Wdm3HJO11wAwQRx331D1FEApAAszzsYyigPyCABxRKE4pB74YcHxhmN45g40kUizDGY46MAoBgAkRhRxmAApwAArQAAqQAAnwAAnAAAowD//f7q+usAmAAAqRgAnxcAmxcAlBYAsBQAvw0CvQb9//3C7sIAjhcApBAAug4AuAkAoQEAmgD69vr4/fhMy1fT9NMApRgAsA8ArwsAowsAogcGugYArgbu6e6yxLTM2cxx3n0nyDcCuxQFvwYGtQYAngDz8PPq6eqH3IdlvmVdsl1KzUpKyUoSuRL8+fzr6uzg4+C/1cC06bSpzqqR4ZyQ45CP3494xHhfwWAquT4VtyonxyclwScIth4cvhwEuhgCthcAlxYTvxQAohIRvBECwg0AlQDR3NKdyJ2H34dey2tp12lp02lM0lpJwkxFzEU1xD4zujMdyC0euh4MxR0cwhwIwxgSxBQDwhL4+Pjj6ePW9Ne17be17LWH4JKRyJKF4ZGF3ZGB2o5+3ol74Id734dk03Jl2HFh029p2mtc12hiuGNRymFdsV1P1VxMzVtJzlZDwVVHvUdF0EY50EZFyUU20kQpwjsyvzQzvDMiyzEawC0WrysRsiYVxSUhvSEArBUAnhPg2+DS3NPB1sO6zry067Sx0bOsv66cyJ2RypWRyZOI4Yh8x4Nux3Zr1HVq3HJSsVJF0kpHx0c3y0Qnyy0UwRwKwA/BbPdoAAAAM3RSTlMA6+vrFOvr6+vr9uzru0b7+vXq5+fbu7u5hH9xcWRIRgn57Ovo6NvavLmEg2RkRwoKubggC7oDAAAFN0lEQVRYw6WY91fTUBiGo+JW3JPh3ltb26ZoqqK4F5o2LdKmBa2AVesojgLixIE4UFFQwb333nvvvffe+g9409ybpjVt0/r8xs2X59z3/c7pOQTjCAqu0bZhIT9o2KZGcBDmTlBY1ULlzWbzINGA4fKFqoa5qYKrljcb82jaYIgWicFA03lGc/mqwTxNq5BKZiMdbX2YfW2waK5lP7RG00ZzpZBWyFO7ZoVBdLQ+e/3xrIF+kHV8fbY+mh5UoWZtKAqpYDRYH108ltXPT7KOXXxkNRgrhMB+KhkN+iWnDx/t7TdHD59eojcYKwU79lWN8Zw9cepkH785eerEWcZUjdldWB1an3Nl8uTJXQMAvHYlR0/XCWMulGc13TnTOWDO3DFZ88CVwusa9DlXz3cKmPNXc/SGuuFYU6PV9GDT5S4Bc3nTA5PV2BRrQutz7d38YRRiEzyw5+rpJliVZ09z7Tf7i+b2+rcTWV59ue04uWnPffqsClZ/lWmFvbt4fr6xxLAM6w+P7CtMq+pj9YBo+/0Bovk8tR3LkE7b2ZP724GoHlZ8uCnlcQ/RbH0ZA0UDubPHKabhxR2inT1F8ykdeg50597aCUVjUnb3FcvWF9Az8msv7nB3yhhWlLC3l0h2v7dA0cGeztO9CUgU11Ekm+eipr9HOE/jHKIS48SLfs+fDUUL9nZ0EY0rAURjE+LyRXkiFs+BntG/eBfKj0sYi0QRolg2LwY2fa4D/5wTJYoT5S9KR03vcRUlMqKS40WKOtxdg5q+ERnhJhpfEoiSE+M7iODPBwtqOt/1SXxish+iSG71o5dGehRF+vasBKuHTbtNR7KioknJ8vhI33CrP7TH/VG8PDmpKBCplXh7nzyZF4Oa/ucZrlSLFqVyq1+Q6lOUuvnCpRkMl76tdp8Fq0dNt/ckopBIMXP/BJbn090vdMQCm96gEBRRjEiFoqV+HMqOx0y65zp6fS7XdHshkYoVSXEFe6Vdw+C85Z1LOG71Q7YIXEiBSxlRESCSKSAzh0DT1OkKHmj1QxemKgSQAVERV1H8Oi7cNucgWD1qWuFFNEXjFOHOcGtXc/ZF6ahp3INIMwWJOBMvHHrrHlr965UK7yKJDFd4Dmc7YkFNC18Il0kcIi0j4uCHy8AZuNUvsOHCAJGWFcn5p/xwgAywetg07gG5oAi38cKBP8HqYdMyP0Wy5fxwO9DqM1fivkSkRC7j4RLOtigdNS3ziFxCAlFpIFK6PrBN48JdmASdC22eRUogKo2VHkESbiJnuH3798Gml8m8iAhyRGmsGBBJ3e86C4ZDjNwo9yKSAlExViSXCYdDZK72IpLzRe6gcLDpW3JvIFGU+l+REoZDTXsXqaMYUayQSJ7mCIeaVvoSxXoUKUE4rmng8S0qA0QS5T/IpVy4zAyldyRAVAaKBADhYNNSsSKVRGhUuoMNtzDNh0cqUTGiBrE6IBIEhGOalvoAiHSxDbBGBR5FIBxoWiJGVNAIK1tAaQiJ8AAIl5nh20NoqIKyWI1yFAlEwiOzDvyQiBCRVLkaWDj4HVF7mk7bmib1LVKDX5FwLKgsaJuQ/AcE6Los+H+9Bcim/h+RGiRrgWGOK4G6A4bQOC4EqFVZG6UiAg8Wpa1cC3MQWooiVQQRkIZQkVSpUO6zD2NSEwF41IyH++yDtQ6trNWRGuDyB2DRkDpt5dDWmJNajUtROpLUaFSi0WhIUkeVagz7QQQ1r15YSyXpdLooUYDBJEpbuHpzge9+LZtVr1KxYmGRVKxYpXqzlk7NX3qhRI48/pTEAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
});

export { CheckMarkButtonEmoji };