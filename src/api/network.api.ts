import Singleton from "./singleton.api";
import Docker from "dockerode";

class NetworkAPI {
  private dockerInstance: Docker;

  constructor() {
    this.dockerInstance = Singleton.getInstance();
  }

  async listNetworks(isAll = false) {
    const networks = await this.dockerInstance.listNetworks({ all: isAll });
    return networks;
  }
}

export default NetworkAPI;
