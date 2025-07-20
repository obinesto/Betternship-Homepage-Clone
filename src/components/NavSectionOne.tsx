import { NavLink } from "react-router-dom";

export default function NavSectionOne() {
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    `hover:text-amber-300 ${isActive ? "text-amber-300 underline" : ""}`;

  return (
    <nav className="w-full h-[58px] bg-primary flex justify-between md:justify-normal items-center gap-0 md:gap-4 px-1 md:px-0">
      <div className="ml-0 md:ml-[136px] w-full md:w-[363px] text-white">
        <NavLink to="/companies" className={getClassName}>
          For Companies
        </NavLink>
        <span className="separator"></span>
        <NavLink to="/interns" className={getClassName}>
          For Interns
        </NavLink>
        <span className="separator"></span>
        <NavLink to="/post-a-job" className={getClassName}>
          Post a job
        </NavLink>
      </div>
    </nav>
  );
}
