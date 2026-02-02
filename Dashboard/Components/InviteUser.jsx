import { useState } from "react";

const InviteUser = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake API call
    const payload = {
      email,
      role,
    };

    console.log("Invited User:", payload);

    // reset
    setEmail("");
    setRole("User");

    alert("Invitation sent successfully!");
  };

  return (
    <div className="bg-BGWhite max-w-xl">
      <h2 className="text-xl text-TextBlack font-semibold mb-4">
        Invite New User
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-TextBlack text-md font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-GrayBorder text-TextGray rounded px-3 py-2"
            placeholder="user@example.com"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-md font-medium mb-1">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-BGWhite border border-GrayBorder text-TextGray rounded px-3 py-2"
          >
            <option value="User">User</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded cursor-pointer"
        >
          Send Invitation
        </button>
      </form>
    </div>
  );
};

export default InviteUser;
