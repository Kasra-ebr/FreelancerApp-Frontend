import { NavLink } from "react-router";

interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
}

function CustomNavLink({ children, to }: CustomNavLinkProps) {
  const baseClass =
    "flex items-center gap-x-2 px-3 py-2 rounded-lg transition-all duration-300";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${baseClass} bg-blue-200 text-blue-800`
          : `${baseClass} text-gray-600 hover:bg-blue-100 hover:text-blue-800`
      }
    >
      {children}
    </NavLink>
  );
  

  export default CustomNavLink
