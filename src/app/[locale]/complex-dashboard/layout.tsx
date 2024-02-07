import Card from "@/components/card/card";
import React from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}:{
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex"}}>
          <Card title="User">{users}</Card>
          <Card title="Revenue">{revenue}</Card>
        </div>
        <div style={{display: "flex", flex: 1}}>
          <Card title="Notifications">{notifications}</Card>
        </div>
      </div>
    </>
  ): (
    login
  )
}