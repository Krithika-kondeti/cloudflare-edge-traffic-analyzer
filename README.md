# cloudflare-edge-traffic-analyzer
Edge Request Analyzer using Cloudflare Workers
## Overview
This project is a Cloudflare Worker that runs at the edge to process HTTP requests and analyze Internet-scale traffic.  
It extracts geolocation (country and data center), selected request headers, and latency, while masking client IPs for privacy.

## Features
- Edge-based HTTP request handling using Cloudflare Workers
- Geolocation extraction (`request.cf.country` and `request.cf.colo`)
- Selected request headers (user-agent, accept, cf-ray)
- Privacy-safe IP masking
- Latency measurement
- Returns structured JSON



## What I Learned
- How edge computing works at global scale
- Serverless request handling
- HTTP headers and Cloudflare metadata
- JSON responses for structured data

## How to Test
1. Visit the deployed Worker URL: `https://edge-traffic-analyzer.krithika-k2410.workers.dev/`
2. Open in browser or use `curl/8.16.0` to see JSON output
