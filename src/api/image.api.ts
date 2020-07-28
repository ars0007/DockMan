import Singleton from "./singleton.api";
import Docker from "dockerode";

class ImageAPI {
  private dockerInstance: Docker;

  constructor() {
    this.dockerInstance = Singleton.getInstance();
  }

  async listImages(isAll = false) {
    const containers = await this.dockerInstance.listImages({ all: isAll });
    return containers;
  }
}

export default ImageAPI;
