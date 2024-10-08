import { SVGProps } from "react";

export default function CordovaIcon(props: SVGProps<SVGSVGElement>) {
  const style = `.G{color-interpolation-filters:sRGB}
  .H{fill-rule:evenodd}
  .I{stroke:#d6d6d6}
  .J{stroke-linejoin:round}
  .K{stroke-width:.918}
  .L{stroke-width:.954}`;
  return (
    <svg
      className="cordova-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="16"
      style={{ width: "1em" }}
      {...props}
    >
      <style>{style}</style>
      <defs>
        <linearGradient id="cordovaA" xlinkHref="#cordovaL">
          <stop offset="0" stopColor="#24303a" />
          <stop offset="1" stopColor="#394958" />
        </linearGradient>
        <linearGradient
          id="cordovaB"
          x1="371.822"
          y1="391.787"
          x2="55.227"
          y2="187.815"
          xlinkHref="#cordovaL"
        >
          <stop offset="0" stopColor="#acacac" />
          <stop offset="1" stopColor="#e9e9e9" />
        </linearGradient>
        <filter
          id="cordovaC"
          x="-.201"
          width="1.402"
          y="-.054"
          height="1.107"
          className="cordovaG"
        >
          <feGaussianBlur stdDeviation="1.11" />
        </filter>
        <filter
          id="cordovaD"
          x="-.415"
          width="1.83"
          y="-.111"
          height="1.222"
          className="cordovaG"
        >
          <feGaussianBlur stdDeviation="2.293" />
        </filter>
        <radialGradient
          id="cordovaE"
          gradientTransform="matrix(0.92307901,-11.507692,-5.8964407,-0.47303508,-2165.6993,4248.2015)"
          cx="355.75"
          cy="-334.763"
          fx="355.75"
          fy="-334.763"
          r="16.25"
          xlinkHref="#cordovaL"
        >
          <stop offset="0" stopColor="#25303b" />
          <stop offset="1" stopColor="#25303b" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          xlinkHref="#cordovaA"
          id="cordovaF"
          x1="327.184"
          y1="311.239"
          x2="311.598"
          y2="126.1"
        />
        <linearGradient
          xlinkHref="#cordovaA"
          id="cordovaG"
          x1="135.705"
          y1="311.239"
          x2="151.291"
          y2="126.1"
        />
        <linearGradient
          id="cordovaH"
          x1="352.926"
          y1="107.19"
          x2="92.151"
          y2="133.35"
          xlinkHref="#cordovaL"
        >
          <stop offset="0" stopColor="#e5e5e5" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="cordovaI"
          x1="182.228"
          y1="190.194"
          x2="182.228"
          y2="317.94"
          xlinkHref="#cordovaL"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset=".5" stopColor="#fff" stopOpacity=".532" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="cordovaJ"
          x1="193.994"
          y1="190.194"
          x2="193.994"
          y2="126.35"
          xlinkHref="#cordovaL"
        >
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter
          id="cordovaK"
          x="-.131"
          width="1.262"
          y="-.358"
          height="1.715"
          className="cordovaG"
        >
          <feGaussianBlur stdDeviation="19.201" />
        </filter>
        <linearGradient id="cordovaL" gradientUnits="userSpaceOnUse" />
      </defs>
      <g transform="matrix(.347687 0 0 .347687 14.775537 5.277087)">
        <path
          transform="matrix(.180496 0 0 .15991 -38.18906 .215531)"
          d="M407.2 433.212l-80.56-128.86h-191.5L54.985 433.194z"
          fillOpacity=".57"
          filter="url(#cordovaK)"
          className="cordovaH"
        />
        <g transform="matrix(.232441 0 0 .232441 -50.19348 -29.321829)">
          <g className="cordovaH">
            <path
              d="M341.153 349.75l-23.105 48.268-15.9-60.104zm-212.746 0l15.73 48.268 15.9-60.104z"
              fill="#7f8082"
            />
            <path
              d="M54.985 190.194l-.012.018 32.8 207.807h56.373l-4.605-48.268h28.924l3.684 48.268h118.1l3.684-48.268h28.74l-4.605 48.268h56.74L407.2 190.194H54.985z"
              fill="url(#cordovaB)"
              className="cordovaI cordovaJ"
            />
            <path
              d="M135.558 317.94l16.956-63.528-1.192-128.3-31.8 64.093z"
              fill="url(#cordovaE)"
            />
            <path
              d="M257.328 113.532h70.27l-1.443 155.314H251.9zm-50.828.098l-68.445.042 1.622 154.622h69.684z"
              fill="#293441"
            />
            <path
              d="M145.14 254.4l-9.58 63.53h191.625l-11.4-63.076z"
              fill="#2d3948"
            />
            <path
              d="M327.184 317.94l-16.64-63.077.625-129.17 32.195 64.496z"
              fill="url(#cordovaF)"
            />
            <path
              d="M135.705 317.94l16.8-63.53-1.192-128.3-31.797 64.1z"
              fill="url(#cordovaG)"
            />
            <path
              d="M199.316 149.428l6.327 134.88h49.285l7.94-134.88z"
              fill="#2d3b48"
            />
            <path
              d="M407.2 190.194L326.65 61.35h-191.5L54.985 190.194h64.54l31.625-63.844h52l-3.835 23.077h63.55l-3.36-23.776H311.3l32.06 64.543z"
              fill="url(#cordovaH)"
              className="cordovaI cordovaJ"
            />
            <path
              d="M259.508 125.65l52.235.043 31.62 64.5-16.18 127.746h-121.54l62.822-127.746z"
              opacity=".45"
              fill="#363f49"
            />
            <path
              d="M268.465 190.194L205.643 317.94H135.56l-16.035-127.745z"
              opacity=".3"
              fill="url(#cordovaI)"
            />
            <path
              d="M151.15 126.35h52l-3.835 23.077h63.55l5.598 40.767H119.523z"
              opacity=".2"
              fill="url(#cordovaJ)"
            />
          </g>
          <g transform="translate(-14.849 -10.607)">
            <g transform="matrix(.899979 0 0 .977746 -1.495231 573.7235)">
              <ellipse
                ry="24.805"
                rx="6.63"
                cy="-325.399"
                cx="272.593"
                transform="matrix(1.499289 0 0 1.307739 -75.688852 99.470993)"
                opacity=".8"
                fill="#05f0ff"
                filter="url(#cordovaD)"
              />
              <g stroke="#06effe" filter="url(#cordovaC)">
                <ellipse
                  transform="matrix(1.165326 0 0 1.157833 -3.956438 51.930291)"
                  ry="24.805"
                  rx="6.63"
                  cy="-326.054"
                  cx="289.158"
                  opacity=".9"
                  fill="#fff"
                  className="cordovaK"
                />
                <ellipse
                  cx="289.158"
                  cy="-326.054"
                  rx="6.63"
                  ry="24.805"
                  transform="matrix(1.165326 0 0 1.070709 -3.956438 23.603105)"
                  opacity=".9"
                  fill="#feffff"
                  className="cordovaL"
                />
              </g>
            </g>
            <g transform="matrix(.899979 0 0 .977746 -102.68784 578.19963)">
              <ellipse
                transform="matrix(1.499289 0 0 1.307739 -75.688852 99.470993)"
                cx="272.593"
                cy="-325.399"
                rx="6.63"
                ry="24.805"
                opacity=".8"
                fill="#05f0ff"
                filter="url(#cordovaD)"
              />
              <g stroke="#06effe" filter="url(#cordovaC)">
                <ellipse
                  cx="289.158"
                  cy="-326.054"
                  rx="6.63"
                  ry="24.805"
                  transform="matrix(1.165326 0 0 1.157833 -3.956438 51.930291)"
                  opacity=".9"
                  fill="#fff"
                  className="cordovaK"
                />
                <ellipse
                  transform="matrix(1.165326 0 0 1.070709 -3.956438 23.603105)"
                  ry="24.805"
                  rx="6.63"
                  cy="-326.054"
                  cx="289.158"
                  opacity=".9"
                  fill="#feffff"
                  className="cordovaL"
                />
              </g>
            </g>
          </g>
          <path
            d="M151.15 126.35h52l-3.835 23.077h63.55l-3.36-23.776 52.235.043 31.62 64.5-16.18 127.746H135.558l-16.035-127.745z"
            fill="none"
            className="cordovaI cordovaJ"
          />
          <path
            d="M342.836 190.194h-223.47"
            opacity=".343"
            fill="#fff"
            stroke="#fff"
            className="cordovaH"
          />
        </g>
      </g>
    </svg>
  );
}
