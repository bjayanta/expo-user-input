import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="home"
        options={{ drawerLabel: "Home", title: "Dashboard" }}
      />
      <Drawer.Screen
        name="invoice"
        options={{ drawerLabel: "Invoice", title: "Invoice" }}
      />
      <Drawer.Screen
        name="profile"
        options={{ drawerLabel: "Profile", title: "Dashboard" }}
      />
      <Drawer.Screen
        name="settings"
        options={{ drawerLabel: "Settings", title: "Dashboard" }}
      />

      {/* <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "overview",
        }}
      />
      <Drawer.Screen
        name="user/[id]"
        options={{
          drawerLabel: "User",
          title: "overview",
        }}
      /> */}
    </Drawer>
  );
};

export default DrawerLayout;
