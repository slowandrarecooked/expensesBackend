import { Link } from "react-router-dom";

export const Navbar = () => {
  let links = [
    { id: 1, path: "/Login", title: "Login" },
    { id: 2, path: "/Signup", title: "Signup" },
    { id: 3, path: "/Dashboard", title: "Dashboard" },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "20px",
      }}
    >
      {links.map((link) => {
        return (
          <Link key={link.id} to={link.path}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};
