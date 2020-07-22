import Singleton from "./singleton.api";
import Docker from "dockerode";

class ContainerAPI {
  private dockerInstance: Docker;

  constructor() {
    this.dockerInstance = Singleton.getInstance();
  }

  async listContainers() {
    const containers = await this.dockerInstance.listContainers();
    return containers;
  }
}

export default ContainerAPI;
