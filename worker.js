export default {
  async fetch(request, env, ctx) {
    const start = Date.now();

    // Client info from Cloudflare
    const country = request.cf?.country || "Unknown";
    const colo = request.cf?.colo || "Unknown";

    // Mask IP (privacy-safe)
    const ip = request.headers.get("CF-Connecting-IP") || "Unknown";
    const maskedIp = ip.includes(".")
      ? ip.split(".").slice(0, 2).join(".") + ".x.x"
      : "masked";

    // Collect headers (limited)
    const headers = {};
    for (const [key, value] of request.headers) {
      if (["user-agent", "accept", "cf-ray"].includes(key.toLowerCase())) {
        headers[key] = value;
      }
    }

    const latency = Date.now() - start;

    const responseBody = {
      project: "Edge Request Analyzer",
      maskedIp,
      country,
      colo,
      latencyMs: latency,
      headers,
      timestamp: new Date().toISOString()
    };

    return new Response(JSON.stringify(responseBody, null, 2), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
