import { SVGProps } from "react";

export default function DuskIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "1em" }}
      {...props}
    >
      <g clipPath="url(#clip0_780_45)">
        <mask
          id="mask0_780_45"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="512"
          height="512"
        >
          <rect width="512" height="512" fill="url(#paint0_linear_780_45)" />
        </mask>
        <g mask="url(#mask0_780_45)">
          <rect width="512" height="512" fill="url(#paint1_radial_780_45)" />
          <path
            d="M247.492 97.6656C248.207 96.8133 248.932 95.9747 249.668 95.1498C252.132 92.3859 250.421 87.8383 246.718 87.8179C199.716 87.559 154.023 106.525 122.587 143.989C75.9204 199.604 74.8541 279.081 114.375 340.293C115.627 342.232 118.218 342.733 120.242 341.622C138.761 331.458 162.39 333.067 179.546 347.462C196.691 361.848 202.382 384.818 195.61 404.811C194.869 406.998 195.813 409.462 197.942 410.356C265.055 438.57 343.065 423.701 389.7 368.124C420.876 330.97 431.7 283.167 423.668 237.274C423.03 233.626 418.259 232.699 415.946 235.591C415.402 236.272 414.847 236.949 414.284 237.621C381.347 276.873 326.606 287.037 282.638 265.261L285.124 259.007L292.914 248.251C295.212 245.078 292.33 240.758 288.518 241.661L275.613 244.72L260.474 232.017L261.324 219.039C261.581 215.116 256.809 213 254.073 215.824L244.921 225.273L240.324 228.109C214.121 188.902 215.652 135.611 247.492 97.6656Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_780_45"
          x1="-46.674"
          y1="-93.3481"
          x2="512"
          y2="575.646"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.183169" stopColor="#4613CF" />
          <stop offset="0.766576" stopColor="#A42CEA" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_780_45"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(321.422 73.9555) rotate(64.9445) scale(769.98 1354.18)"
        >
          <stop offset="0.265" />
          <stop offset="0.47" stopColor="#572ECE" />
          <stop offset="0.635" stopColor="#A52DEB" />
          <stop offset="1" stopColor="#4714D0" />
        </radialGradient>
        <clipPath id="clip0_780_45">
          <rect width="512" height="512" rx="256" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
