/**
 * GitHubService.ts
 * Mocked integration for system updates tracking.
 */

export const getLatestReleases = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "rel-128",
      version: "v2.4.2",
      type: "Release",
      status: "stable",
      message: "Production deployment with new security patches.",
      author: "mukes-dev",
      date: new Date().toISOString(),
    },
    {
      id: "rel-127",
      version: "v2.4.1",
      type: "Beta",
      status: "stable",
      message: "Initial UI overhaul for dashboard components.",
      author: "zaptian-bot",
      date: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
  ];
};

export const getRecentCommits = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return [
    {
      sha: "7a2b5c8",
      message: "fix: resolve Sequelize sync race condition",
      author: "Mukesh",
      date: new Date().toISOString(),
    },
    {
      sha: "1f9e2d4",
      message: "feat: add audit logging middleware",
      author: "Mukesh",
      date: new Date(Date.now() - 3600000).toISOString(),
    },
  ];
};
