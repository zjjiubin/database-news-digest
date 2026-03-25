import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.papdoc.app",
  appName: "papdoc",
  webDir: "out",
  server: {
    androidScheme: "https"
  }
};

export default config;
