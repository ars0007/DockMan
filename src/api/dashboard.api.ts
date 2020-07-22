import ContainerAPI from "./container.api";

export async function DashboardAPI() {
  const instance = new ContainerAPI();
  const containers = await instance.listContainers();
}
