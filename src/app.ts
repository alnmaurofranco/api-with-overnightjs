import "dotenv/config";
import express, { Application } from "express";
import { Server } from "@overnightjs/core";
import * as http from "http";
import { createConnection } from "typeorm";

import HomeController from "@controllers/HomeController";
import VersionController from "@controllers/VersionController";

export default class SetupServer extends Server {
  private server?: http.Server;

  constructor() {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
    this.setupDatabase();
  }

  private setupExpress(): void {
    this.app.use(express.json());
  }

  private async setupDatabase(): Promise<void> {
    await createConnection();
    console.log("📦 Database ON");
  }

  private setupControllers(): void {
    const homeController = new HomeController();
    const versionController = new VersionController();
    this.addControllers([homeController, versionController]);
  }

  public getApp(): Application {
    return this.app;
  }

  public start(port: number = 3333): void {
    this.server = this.app.listen(port, () => {
      console.log(`🚀 Server started on port ${port}`);
    });
  }
}
