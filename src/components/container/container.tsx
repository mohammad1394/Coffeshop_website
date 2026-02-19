import React from "react";

type PageContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Container({ children, className = "" }: PageContainerProps) {
    return (
        <div className={`px-4 md:px-8 lg:px-10 font-[Tanha] ${className}`}>
            {children}
        </div>
    );
}
