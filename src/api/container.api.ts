import Singleton from "./singleton.api";
import Docker from "dockerode";

class ContainerAPI {
  private dockerInstance: Docker;

  constructor() {
    this.dockerInstance = Singleton.getInstance();
  }

  async listContainers(isAll = false) {
    const containers = await this.dockerInstance.listContainers({ all: isAll });
    const nameFixedContainers = containers.map((container) => {
      if (container.Names[0].startsWith("/")) {
        container.Names[0] = container.Names[0].substr(1);
      }
      return container;
    });
    return nameFixedContainers;
  }
}

export default ContainerAPI;
