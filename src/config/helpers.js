export async function collectGovClientHeaders(userId = "") {
  // 1. Get Public IP
  const getPublicIp = async () => {
    try {
      const res = await fetch("https://api64.ipify.org?format=json");
      const data = await res.json();
      return data.ip;
    } catch (err) {
      console.warn("Could not fetch public IP", err);
      return "";
    }
  };

  // 2. Generate or retrieve device ID
  const getDeviceId = () => {
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
  };

  // 3. Get user IDs
  const getUserIds = (userId) => {
    const osUser = navigator.userAgent.includes("Windows")
      ? "windows-user"
      : "unknown-user"; // mock
    return `os=${osUser},application=${userId || "unknown"}`;
  };

  // 4. Get screen info
  const getScreenInfo = () => {
    const { width, height, colorDepth } = window.screen;
    const scalingFactor = window.devicePixelRatio;
    return `width=${width}&height=${height}&scaling-factor=${scalingFactor}&colour-depth=${colorDepth}`;
  };

  // 5. Get window size
  const getWindowSize = () => {
    return `width=${window.innerWidth}&height=${window.innerHeight}`;
  };

  // 6. Get plugin list
  const getPlugins = () => {
    const plugins = Array.from(navigator.plugins).map((p) => p.name);
    return plugins.length ? plugins.join(", ") : "None";
  };

  // 7. Get browser user agent
  const getUserAgent = () => navigator.userAgent;

  // 8. Get timezone
  const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Collect all headers
  const ip = await getPublicIp();
  const deviceId = getDeviceId();

  return {
    "Gov-Client-Public-IP": ip,
    "Gov-Client-Device-ID": deviceId,
    "Gov-Client-User-IDs": getUserIds(userId),
    "Gov-Client-Timezone": getTimezone(),
    "Gov-Client-Screens": getScreenInfo(),
    "Gov-Client-Window-Size": getWindowSize(),
    "Gov-Client-Browser-Plugins": getPlugins(),
    "Gov-Client-Browser-JS-User-Agent": getUserAgent(),
    "Gov-Vendor-Version": "sardarali-frontend_1.0.0",
  };
}
