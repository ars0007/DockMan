import * as React from "react";
import "./containers.styles.scss";
import ContainerAPI from "../../api/container.api";

const Containers: React.FC<string> = (props) => {
  const instance: ContainerAPI = new ContainerAPI();

  const [constainers, setContainers] = React.useState([])

  React.useEffect(() => {
    instance.listContainers().then((cntrs) =>{
      console.log(cntrs);
      setContainers(cntrs as any)
    })
  }, []);

  return (
    <div className="containers">
      <h1>Containers: {constainers.length}</h1>
    </div>
  );
};

export default Containers;
