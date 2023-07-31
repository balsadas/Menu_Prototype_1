import img_1 from '../images/erzurum.png'

export default function Logo({ width = '255px', height = '289px' }) {
  return (
    <img src={img_1} style={{width:{width},height:{height}}}/>
    // <svg
    //   width={width}
    //   height={height}
    //   viewBox="0 0 199 77"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >

    //   <path
    //     d="M14.8166 25.8183C13.9378 34.67 9.91264 56.4867 9.91264 56.4867H0L11.7749 0L30.3702 37.4474L49.0576 0.0237744L60.829 56.4866H50.9141L45.295 26.0227C40.937 36.3159 30.3644 56.7291 30.3644 56.7291L14.8166 25.8183Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M73.8279 42.0884L67.8898 56.4866H57.2573L83.2177 0.257935L108.465 56.4866H97.7555L91.9659 42.0907L73.8279 42.0884ZM83.0265 20.0126L77.4822 33.4815H88.1999L83.0265 20.0126Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M105.196 1.45715H116.531C120.149 1.3824 123.761 1.79431 127.275 2.68246C138.885 5.97214 145.923 16.5685 145.923 29.0486C146.026 32.9197 145.298 36.7665 143.79 40.3125C142.281 43.8585 140.03 47.0156 137.198 49.5568C134.401 52.2147 131.045 54.167 127.393 55.2602C123.795 56.1789 120.093 56.5919 116.388 56.4879H105.196V1.45715ZM116.724 46.8851C127.594 46.8851 136.232 41.0451 136.232 28.95C136.329 26.4063 135.871 23.8727 134.892 21.536C133.914 19.1993 132.439 17.1191 130.577 15.4491C127.484 12.6217 122.962 11.06 116.724 11.06H114.883V46.8852L116.724 46.8851Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M190.896 8.86961C193.465 11.5148 195.504 14.6572 196.895 18.1167C198.285 21.5763 199.001 25.2851 199 29.0305C198.999 32.7759 198.283 36.4844 196.891 39.9434C195.499 43.4025 193.459 46.5441 190.889 49.1884C185.631 54.4434 178.598 57.3817 171.279 57.3817C163.959 57.3817 156.927 54.4434 151.669 49.1884C149.048 46.5866 146.975 43.4556 145.579 39.9906C144.182 36.5255 143.493 32.8008 143.553 29.0486C143.535 25.2943 144.239 21.5736 145.626 18.1027C147.012 14.6317 149.053 11.4796 151.63 8.82931C154.207 6.17907 157.269 4.08353 160.637 2.66434C164.005 1.24516 167.613 0.530614 171.251 0.56222C174.9 0.500228 178.524 1.20472 181.901 2.63284C185.278 4.06096 188.338 6.18288 190.896 8.86961ZM158.475 15.689C155.141 19.2582 153.282 24.0253 153.291 28.983C153.299 33.9407 155.176 38.7007 158.523 42.2572C160.162 44.0289 162.14 45.4305 164.33 46.3737C166.521 47.3169 168.878 47.7812 171.251 47.7372C173.634 47.7412 175.994 47.2565 178.194 46.3113C180.394 45.3661 182.39 43.9792 184.066 42.2313C185.742 40.4833 187.065 38.4091 187.958 36.1291C188.85 33.8491 189.295 31.4088 189.266 28.95C189.317 26.4888 188.879 24.0429 187.979 21.7628C187.08 19.4827 185.738 17.4165 184.036 15.6914C182.36 13.9565 180.368 12.5799 178.175 11.6406C175.982 10.7012 173.631 10.2176 171.256 10.2174C168.882 10.2172 166.531 10.7003 164.338 11.6393C162.144 12.5782 160.152 13.9544 158.475 15.689Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M6.02292 69.4077H6.53542L9.88224 76.876H9.29604L8.38274 74.7986H4.14451L3.23006 76.876H2.67725L6.02292 69.4077ZM8.15701 74.3018L6.26938 70.0114L4.37024 74.3018H8.15701Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M23.7153 69.461H26.7328C27.4737 69.4214 28.2 69.6839 28.7551 70.1919C29.1049 70.5589 29.3002 71.0534 29.2987 71.5681V71.5907C29.2987 72.8279 28.4062 73.5386 27.1946 73.7085L29.5659 76.8758H28.8887L26.5992 73.8036H24.2486V76.8758H23.7153V69.461ZM26.6706 73.3057C27.8718 73.3057 28.7644 72.6806 28.7644 71.6109V71.5907C28.7644 70.5936 28.0054 69.9684 26.7017 69.9684H24.2486V73.3057H26.6706Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M35.7515 69.461H40.8627V69.9697H36.2847V72.8838H40.402V73.3901H36.2847V76.366H40.9145V76.8759H35.7515V69.461Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M49.9746 69.4077H50.4882L53.8351 76.876H53.25L52.3367 74.7986H48.0973L47.184 76.876H46.6289L49.9746 69.4077ZM52.1098 74.3018L50.221 70.0114L48.3219 74.3018H52.1098Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M59.9702 69.461H60.5034V76.366H64.7221V76.8759H59.9702V69.461Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M80.6295 69.9697H78.1245V69.461H83.6676V69.9697H81.1627V76.8771H80.6295V69.9697Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M91.7104 69.4077H92.2241L95.5709 76.876H94.9858L94.0726 74.7986H89.832L88.9187 76.876H88.3647L91.7104 69.4077ZM93.8457 74.3018L91.9569 70.0114L90.0577 74.3018H93.8457Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M101.088 75.7943L101.438 75.3808C101.771 75.7376 102.172 76.0198 102.615 76.2096C103.058 76.3994 103.535 76.4927 104.015 76.4837C105.092 76.4837 105.832 75.8585 105.832 75.0099V74.9897C105.832 74.2065 105.431 73.7513 103.799 73.4115C102.074 73.0502 101.376 72.4476 101.376 71.3245V71.3031C101.4 71.0171 101.479 70.7389 101.609 70.485C101.739 70.2312 101.917 70.0068 102.132 69.8251C102.348 69.6435 102.596 69.5083 102.863 69.4276C103.13 69.3469 103.41 69.3223 103.687 69.3552C104.588 69.3245 105.468 69.6462 106.15 70.2561L105.811 70.691C105.227 70.1374 104.459 69.837 103.666 69.852C102.609 69.852 101.911 70.4783 101.911 71.2508V71.2722C101.911 72.0565 102.301 72.5331 104.004 72.8932C105.668 73.2415 106.367 73.8571 106.367 74.9374V74.9576C106.348 75.2556 106.271 75.5464 106.139 75.8123C106.007 76.0781 105.824 76.3131 105.601 76.5029C105.377 76.6926 105.118 76.833 104.84 76.9153C104.562 76.9977 104.271 77.0202 103.984 76.9816C102.905 76.9947 101.864 76.5681 101.088 75.7943Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M114.576 69.9697H112.072V69.461H117.614V69.9697H115.11V76.8771H114.576V69.9697Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M123.853 69.461H128.964V69.9697H124.386V72.8838H128.502V73.3901H124.386V76.366H129.014V76.8759H123.853V69.461Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M143.042 69.461H148.103V69.9697H143.575V73.0098H147.64V73.5173H143.575V76.8759H143.042V69.461Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M154.393 69.461H159.504V69.9697H154.925V72.8838H159.042V73.3901H154.925V76.366H159.553V76.8759H154.393V69.461Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M168.615 69.4077H169.129L172.476 76.876H171.889L170.976 74.7986H166.737L165.823 76.876H165.27L168.615 69.4077ZM170.75 74.3018L168.862 70.0114L166.964 74.3018H170.75Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M177.994 75.7944L178.343 75.3808C178.676 75.738 179.077 76.0203 179.52 76.2101C179.964 76.3999 180.441 76.4931 180.921 76.4837C181.997 76.4837 182.736 75.8586 182.736 75.01V74.9898C182.736 74.2066 182.336 73.7514 180.705 73.4115C178.98 73.0502 178.282 72.4477 178.282 71.3246V71.3032C178.306 71.0171 178.385 70.7389 178.515 70.485C178.645 70.231 178.822 70.0066 179.038 69.8249C179.253 69.6433 179.502 69.5081 179.769 69.4275C180.036 69.3468 180.316 69.3222 180.592 69.3553C181.494 69.325 182.373 69.6467 183.055 70.2561L182.716 70.6911C182.131 70.1376 181.363 69.8373 180.569 69.852C179.513 69.852 178.815 70.4783 178.815 71.2508V71.2722C178.815 72.0566 179.206 72.5332 180.909 72.8933C182.572 73.2415 183.27 73.8572 183.27 74.9375V74.9577C183.252 75.2556 183.174 75.5465 183.043 75.8123C182.911 76.078 182.728 76.3131 182.505 76.5029C182.281 76.6926 182.023 76.833 181.745 76.9154C181.467 76.9977 181.175 77.0203 180.888 76.9816C179.81 76.9949 178.77 76.5683 177.994 75.7944Z"
    //     fill={color}
    //   />
    //   <path
    //     d="M191.48 69.9697H188.976V69.461H194.519V69.9697H192.014V76.8771H191.48V69.9697Z"
    //     fill={color}
    //   />
    // </svg>
  );
}
