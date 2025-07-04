
interface ContainerProps {
    // Define any props that the Container component might need
    children?: React.ReactNode;
    className?: string;
}


export const Container = ({ children, className =""}: ContainerProps) => {
    return (
        <div
            className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}
        >
            {children}
        </div>
    );
};
