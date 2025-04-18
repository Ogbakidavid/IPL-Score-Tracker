import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

    {
        variants: {
            variant: {
                primary: "bg-blue-600 text-white hover:bg-cyan-700 shadow",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground text-white",
            },
            size: {
                default: "h-[10px] px-[4px] py-[2px] text-sm",
                sm: "h-8 px-3 text-xs",
                lg: "h-12 px-8 text-base",
                icon: "h-9 w-9",
            }
        },
        defaultVariant: {
            variant: "primary",
            size: "default",
        },
    }
);

const Button = ({
    children,
    variant = "primary",
    size = "default",
    className = "",
    ...props
}) => {
    return(
        <button className={`${buttonVariants({ variant, size})}, ${className}`}
        {...props}>
            {children}
        </button>
    );
};

export default Button;