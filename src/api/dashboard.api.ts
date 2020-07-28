import ContainerAPI from "./container.api";
import ImageAPI from "./image.api";
import VolumeAPI from "./volume.api";
import NetworkAPI from "./network.api";

interface RESPONSE_MODEL {
  container?: { running: number; stopped: number; size: number };
  image?: { size: number };
  volume?: { size: number };
  network?: { size: number };
}

export async function dashboardAPI() {
  const response: RESPONSE_MODEL = {};
  let running = 0;
  let stopped = 0;
  const containers = await new ContainerAPI().listContainers(true);

  containers.forEach((element) => {
    if (element.State === "running") {
      running++;
    } else if (element.State === "stopped" || element.State === "exited") {
      stopped++;
    }
  });

  response.container = { running, stopped, size: containers.length };

  // List Images
  const images = await new ImageAPI().listImages(true);
  response.image = { size: images.length };

  // List Volumes
  const volumes = await new VolumeAPI().listVolumes(true);
  response.volume = { size: volumes.Volumes.length };

  // List Networks
  const networks = await new NetworkAPI().listNetworks(true);
  response.network = { size: networks.length };

  return response;
}
