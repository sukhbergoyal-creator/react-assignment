import { useState, useEffect } from "react";
import { getUsers } from "../../services/userService";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


import {
  LineChart,
  Line,
} from "recharts";

function Charts() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await getUsers();
      setUsers(data);
    }

    loadUsers();
  }, []);


  const bloodGroupData = [
    {
      bloodGroup: "A+",
      count: users.filter(
        (user) => user.bloodGroup === "A+"
      ).length,
    },
    {
      bloodGroup: "A-",
      count: users.filter(
        (user) => user.bloodGroup === "A-"
      ).length,
    },
    {
      bloodGroup: "B+",
      count: users.filter(
        (user) => user.bloodGroup === "B+"
      ).length,
    },
    {
      bloodGroup: "B-",
      count: users.filter(
        (user) => user.bloodGroup === "B-"
      ).length,
    },
    {
      bloodGroup: "O+",
      count: users.filter(
        (user) => user.bloodGroup === "O+"
      ).length,
    },
    {
      bloodGroup: "O-",
      count: users.filter(
        (user) => user.bloodGroup === "O-"
      ).length,
    },
  ];


  const ageGroupData = [
    {
      ageGroup: "Under 30",
      count: users.filter(
        (user) => user.age < 30
      ).length,
    },
    {
      ageGroup: "30-50",
      count: users.filter(
        (user) =>
          user.age >= 30 &&
          user.age <= 50
      ).length,
    },
    {
      ageGroup: "Above 50",
      count: users.filter(
        (user) => user.age > 50
      ).length,
    },
  ];

  return (
    <div>
      <h1>Blood Group Chart</h1>

      <BarChart
        width={600}
        height={300}
        data={bloodGroupData}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="bloodGroup" />

        <YAxis />

        <Tooltip />

        <Bar dataKey="count" />
      </BarChart>

      <h1>Age Group Chart</h1>

      <LineChart
        width={600}
        height={300}
        data={ageGroupData}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="ageGroup" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="count"
        />
      </LineChart>

    </div>
  );
}

export default Charts;