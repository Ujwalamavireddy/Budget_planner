import React from "react";

const Topbar = ({ user }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end items-center p-4 bg-white shadow">
      <div className="flex items-center space-x-4">
        <span className="font-semibold text-purple-600">{user?.name}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;
