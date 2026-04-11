import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { Server } from "http";

import { sequelize, createDatabaseIfNotExists } from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import { AppError, ErrorCode, NotFoundError } from "./utils/appError.js";
import { globalErrorHandler } from "./middlewares/errorMiddleware.js";

// Initialize environment variables
dotenv.config();

// Default environment to development if not specified
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}

class App {
  public app: Application;
  private server: Server | null = null;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.setupMiddlewares();
    this.setupRoutes();
    this.setupErrorHandling(); // Dedicated error handling setup
  }

  private setupMiddlewares(): void {
    // Standard Middlewares
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());

    // Request logging could go here if needed
  }

  private setupRoutes(): void {
    // Health Check
    this.app.get("/health", (req, res) => {
      res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
    });

    // API Routes
    this.app.use("/api/auth", authRoutes);

    // 404 Handler - For all undefined routes
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      next(new NotFoundError(`Can't find ${req.originalUrl} on this server!`));
    });
  }


  private setupErrorHandling(): void {
    // Global Error Middleware
    this.app.use(globalErrorHandler);
  }


  public async start(): Promise<void> {
    try {
      console.log("🚀 Initializing Zaptian Backend...");

      // 1 — Ensure Database Exists
      await createDatabaseIfNotExists();
      console.log("✅ Database verified");

      // 2 — Establish Connection
      await sequelize.authenticate();
      console.log("✅ MySQL connection established");

      // 3 — Sync Database Models
      await sequelize.sync({ alter: false });
      console.log("✅ Database models synced");

      // 4 — Start Listening
      this.server = this.app.listen(this.port, () => {
        console.log(`✅ Server running on http://localhost:${this.port}`);
      });

      this.setupGracefulShutdown();

    } catch (error) {
      console.error("❌ Failed to start server:", error);
      process.exit(1);
    }
  }

  private setupGracefulShutdown(): void {
    const shutdown = async (signal: string) => {
      console.log(`\nReceived ${signal}. Shutting down gracefully...`);
      
      if (this.server) {
        this.server.close(async () => {
          console.log("🛑 Express server closed.");
          
          try {
            await sequelize.close();
            console.log("🛑 Database connection closed.");
            process.exit(0);
          } catch (err) {
            console.error("Error during database shutdown:", err);
            process.exit(1);
          }
        });
      } else {
        process.exit(0);
      }
    };

    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
  }
}

// Bootstrap the application
const serverApp = new App();
serverApp.start();

