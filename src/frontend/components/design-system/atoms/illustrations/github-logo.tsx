import React from 'react'
import { Props } from './props.type'

export const GithubLogo: React.FC<Props> = ({ width, height }) => {
  const svgWidth = width || '72px'
  const svgHeight = height || '71px'
  return (
    <svg width={svgWidth} height={svgHeight} viewBox="0 0 72 71" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Atoms/Logotype/Github" transform="translate(0.000000, 1.000000)" fill="#1C1C38" fillRule="nonzero">
          <path d="M67.1013759,17.4238423 C63.8854852,11.9137922 59.5233349,7.55147781 54.0137768,4.33591517 C48.5033986,1.12018851 42.4877084,-0.487264789 35.9624419,-0.487264789 C29.4379954,-0.487264789 23.4203371,1.12068054 17.9111071,4.33591517 C12.4010569,7.5513138 8.03907062,11.9137922 4.82317995,17.4238423 C1.60778132,22.9337284 -4.26325641e-14,28.9505666 -4.26325641e-14,35.4741931 C-4.26325641e-14,43.3105484 2.28628702,50.3571999 6.86000911,56.6159516 C11.4332392,62.8751953 17.3411754,67.206348 24.5833257,69.6099015 C25.4263326,69.7663662 26.0503872,69.6563161 26.4561458,69.2825393 C26.8620683,68.9082705 27.0647836,68.4395325 27.0647836,67.8782933 C27.0647836,67.7846441 27.0567472,66.9421293 27.0411663,65.3497648 C27.0250934,63.7574004 27.017549,62.3682432 27.017549,61.1829493 L25.9405011,61.3692637 C25.253795,61.4950587 24.3874989,61.5483616 23.3416128,61.5332728 C22.2962187,61.518676 21.2109704,61.4091179 20.087344,61.2054186 C18.9632255,61.0035234 17.9176674,60.5352774 16.9498497,59.8016646 C15.9825239,59.0680518 15.2958178,58.1077785 14.8898952,56.9223206 L14.4216492,55.8447808 C14.1095399,55.1274049 13.6181686,54.3304846 12.9468793,53.4569721 C12.27559,52.5826395 11.5967563,51.9899106 10.9100501,51.6778013 L10.5821959,51.4431042 C10.3637358,51.2871316 10.1610205,51.0990131 9.97355809,50.880717 C9.78625968,50.6624209 9.64603189,50.4439607 9.55238269,50.2251726 C9.45856948,50.0062204 9.53630979,49.8266304 9.78642369,49.6857466 C10.0365376,49.5448628 10.4885467,49.476471 11.1444191,49.476471 L12.0805831,49.6163707 C12.7049658,49.7415097 13.4772847,50.1152865 14.3985239,50.7399972 C15.3192711,51.3642158 16.0761731,52.1757329 16.6693941,53.1742204 C17.387754,54.4544755 18.2532301,55.4300017 19.2682825,56.101291 C20.2825148,56.7725803 21.3051116,57.1076509 22.3350888,57.1076509 C23.3650661,57.1076509 24.2546515,57.0295826 25.0041731,56.874266 C25.7528747,56.7181293 26.4553257,56.4834322 27.1111982,56.1714869 C27.3921458,54.0790587 28.1570843,52.4716054 29.4053576,51.3479789 C27.6261868,51.1610086 26.0266059,50.8794049 24.605795,50.5049721 C23.1858041,50.1300473 21.7184146,49.5215735 20.2046105,48.6779106 C18.6899863,47.8353958 17.4335125,46.7891817 16.434861,45.5410723 C15.4360456,44.292307 14.616328,42.6528719 13.9768565,40.6242432 C13.3370569,38.5947944 13.0170752,36.2537284 13.0170752,33.600389 C13.0170752,29.8224391 14.2504237,26.6075325 16.7166287,23.9538651 C15.5613485,21.1135553 15.6704146,17.9294824 17.0441549,14.4019744 C17.9494852,14.1206988 19.2920638,14.3317785 21.0712346,15.0339015 C22.8507335,15.7363525 24.1536219,16.338102 24.9812118,16.8370177 C25.8088018,17.3357694 26.4718907,17.7584209 26.9714624,18.1011999 C29.8752437,17.2898468 32.8718542,16.8840883 35.9621139,16.8840883 C39.0523736,16.8840883 42.0496401,17.2898468 44.9535854,18.1011999 L46.7329203,16.9779015 C47.9497039,16.2283799 49.3865877,15.5415097 51.0401276,14.917127 C52.6946515,14.2930723 53.9598178,14.1211908 54.8343144,14.4024664 C56.2385604,17.9301384 56.3636993,21.1140473 55.2080911,23.9543571 C57.6741321,26.6080245 58.9079727,29.8237512 58.9079727,33.600881 C58.9079727,36.2542204 58.5868428,38.6026669 57.9480273,40.6476965 C57.3083918,42.6930541 56.4816219,44.3308491 55.4673895,45.5645256 C54.4520091,46.7980382 53.1874989,47.8360518 51.6736948,48.6784026 C50.1595626,49.5214095 48.6916811,50.1298833 47.2716902,50.5048081 C45.8510433,50.8797329 44.2514624,51.1615006 42.4722916,51.348799 C44.0949977,52.753045 44.9065148,54.9696281 44.9065148,57.9975644 L44.9065148,67.8769812 C44.9065148,68.4382204 45.1016856,68.9067944 45.4923554,69.2812272 C45.882533,69.655004 46.4987153,69.7650541 47.3417221,69.6084254 C54.5848565,67.2051999 60.4927927,62.8738833 65.0658588,56.6146395 C69.6384328,50.3558878 71.9255399,43.3092364 71.9255399,35.472881 C71.9238998,28.9500746 70.3152984,22.9337284 67.1013759,17.4238423 Z" id="Path" />
        </g>
      </g>
    </svg>
  )
}

export default GithubLogo