const TickRounded = ({ size = "16", color = "green", className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1108_1334)">
        <path
          d="M10.3281 20C15.851 20 20.3281 15.5228 20.3281 10C20.3281 4.47715 15.851 0 10.3281 0C4.80528 0 0.328125 4.47715 0.328125 10C0.328125 15.5228 4.80528 20 10.3281 20Z"
          fill={color}
          fillOpacity="0.1"
        ></path>
        <path
          d="M14.8281 7L8.64812 12.73L5.82812 10.13"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1108_1334">
          <rect width="21" height="20" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default TickRounded;
