import Docker from "dockerode";

const docker = new Docker();


// class ContainerAPI{
//   constructor(dockerHostUrl: string){
//     this.dockerInstance = new Docker()
//   }
// }

export const listContainers = () => {
  docker.listContainers(function (err: any, containers: any) {
    console.log(containers);
  });
};
