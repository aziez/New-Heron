import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.summarecon.heron",
  appName: "Ardea App",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
