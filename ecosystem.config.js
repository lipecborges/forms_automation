module.exports = {
  apps: [
    {
      name: "forms_automation",
      script: "./node_modules/.bin/tsx",
      args: "src/server.ts",
      instances: 1,
      exec_mode: "fork",
      interpreter: "/bin/bash", // Define o interpretador correto
      watch: false,
      autorestart: true,
      max_memory_restart: "200M",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
