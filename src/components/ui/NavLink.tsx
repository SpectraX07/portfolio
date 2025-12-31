import type { ReactNode } from 'react';

interface NavLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
    return (
        <a
            href={href}
            className={className}
        >
            {children}
        </a>
    );
};
