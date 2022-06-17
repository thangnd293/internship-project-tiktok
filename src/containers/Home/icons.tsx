import ISVGProps from "assets/icons";

export const ArrowDown: React.FC<ISVGProps> = ({
  width = "20px",
  height = "20px",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.70974 19.3964L13.3296 13.7765C13.7212 13.385 13.7212 12.7569 13.3296 12.3654C12.9381 11.9739 12.3101 11.9739 11.9186 12.3654L8.00338 16.2806V1.3132C8.00338 0.758549 7.55477 0.309937 7.00012 0.309937C6.44547 0.309937 5.99685 0.758549 5.99685 1.3132V16.2724L2.08168 12.3572C1.69017 11.9657 1.06211 11.9657 0.670591 12.3572C0.279074 12.7488 0.279074 13.3768 0.670591 13.7683L6.29049 19.3882C6.48625 19.584 6.73911 19.6819 7.00012 19.6819C7.26113 19.6819 7.51398 19.5922 7.70974 19.3964Z"
        fill="currentColor"
      />
    </svg>
  );
};
