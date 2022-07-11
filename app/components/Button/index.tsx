import React from "react";

export const ButtonLink = ({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) => {
  const primary = {
    tag: "text-black group-hover:bg-yellow-400 bg-white",
    slant: "bg-white group-hover:bg-yellow-400",
  };
  const secondary = {
    tag: "text-black bg-yellow-400 group-hover:bg-black group-hover:text-white",
    slant: "bg-yellow-400 group-hover:bg-black",
  };
  const variants = { primary, secondary };
  const variantClasses = variants[variant];

  return (
    <div className="group">
      <a
        href={href}
        style={{
          transition: "all 0.35s ease",
        }}
        className={`${variantClasses.tag} relative italic uppercase tracking-tight font-bold inline-block text-center rounded-l-md py-3 pl-8 pr-3 font-medium`}
      >
        {children}
        <Slant className={variantClasses.slant} />
      </a>
    </div>
  );
};

const Slant = ({ className }: { className: string }) => {
  return (
    <span
      className={className}
      style={{
        position: "absolute",
        right: "-25px",
        top: "0px",
        width: "35px",
        height: "100%",
        transform: "skewX(-22deg)",
        transition: "all 0.35s ease",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
        // border-bottom-right-radius: 4px;
      }}
    />
  );
};
