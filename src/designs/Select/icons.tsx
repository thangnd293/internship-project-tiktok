import ISVGProps from "assets/icons";

export const ArrowIcon: React.FC<ISVGProps> = ({
  width = "21px",
  height = "20px",
  color = "#A2A2A2",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      color={color}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7333 7.74167L10.5 10.975L7.26665 7.74167C6.94165 7.41667 6.41665 7.41667 6.09165 7.74167C5.76665 8.06667 5.76665 8.59167 6.09165 8.91667L9.91665 12.7417C10.2416 13.0667 10.7666 13.0667 11.0916 12.7417L14.9166 8.91667C15.2416 8.59167 15.2416 8.06667 14.9166 7.74167C14.5916 7.42501 14.0583 7.41667 13.7333 7.74167Z"
        fill="currentColor"
      />
    </svg>
  );
};
