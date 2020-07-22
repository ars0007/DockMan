import Docker from "dockerode";

export default class Singleton {
  private static instance: Docker;

  static getInstance(): Docker {
    if (!Singleton.instance) {
      Singleton.instance = new Docker();
    }
    return Singleton.instance;
  }
}
