const CancelRounded = ({ size = "16", color = "gray", className }) => {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 21 20">
      <g clipPath="url(#clip0_1108_1343)">
        <path
          d="M10.3281 20C15.851 20 20.3281 15.5228 20.3281 10C20.3281 4.47715 15.851 0 10.3281 0C4.80528 0 0.328125 4.47715 0.328125 10C0.328125 15.5228 4.80528 20 10.3281 20Z"
          fill="#F1F3F4"
        ></path>
        <path
          d="M6.32812 6L14.3281 14M6.32812 14L14.3281 6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1108_1343">
          <rect width="21" height="20" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CancelRounded;
