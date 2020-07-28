import Singleton from "./singleton.api";
import Docker from "dockerode";

class VolumeAPI {
  private dockerInstance: Docker;

  constructor() {
    this.dockerInstance = Singleton.getInstance();
  }

  async listVolumes(isAll = false) {
    // TODO: We might need to filter this data
    const volumes = await this.dockerInstance.listVolumes({ all: isAll });
    return volumes;
  }
}

export default VolumeAPI;
