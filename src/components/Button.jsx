import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', className = '', to, href, onClick, type = 'button' }) => {
    const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-md px-6 py-2.5 shadow-sm hover:shadow-md';

    const variants = {
        primary: 'bg-primary text-white hover:bg-[#4a2473]',
        secondary: 'bg-secondary text-white hover:bg-[#182d5a]',
        accent: 'bg-accent text-white hover:bg-[#b59123]',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'bg-transparent text-primary hover:bg-neutral-light shadow-none hover:shadow-none'
    };

    const finalClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={finalClasses} onClick={onClick}>
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={finalClasses} target="_blank" rel="noopener noreferrer" onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={finalClasses} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
