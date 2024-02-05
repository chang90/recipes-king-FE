import Card from "@/components/card/card";
import React from "react";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications
}:{
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex"}}>
          <Card title="User">{users}</Card>
          <Card title="Revenue">{revenue}</Card>
        </div>
        <div style={{display: "flex", flex: 1}}>
          <Card title="Revenue">{notifications}</Card>
        </div>
      </div>
      
    </>
  )
}