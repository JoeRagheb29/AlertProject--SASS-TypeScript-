import { AlertTriangle,Ban,Bell,CheckCheck,Info } from "lucide-react";
import Alert from "./components/Alert";

export default function AllAlert() {
  return (
    <div className="container d-flex justify-content-center flex-column gap-3 m-5 p-2">
      <Alert type={"alert-default"} icon={<Bell size={20} />} title={"Upgrade your plan"}>
        <p className="px-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          temporibus doloremque <a href="/">laboriosam</a> iste totam officiis
          beatae quas.
        </p>
      </Alert>
      <Alert type={"alert-info"} icon={<Info size={20} />} title={"Note"}>
        <p className="px-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fugiat
          quos cum officiis necessitatibus placeat?
        </p>
      </Alert>
      <Alert type={"alert-success"} icon={<CheckCheck size={20} />} title={"Your order has been processed"}>
        <p className="px-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam
          voluptate fuga sapiente iure et iusto illo maiores, nemo praesentium?
        </p>
      </Alert>
      <Alert type={"alert-danger"} icon={<Ban size={20} />} title={"Something went wrong"}>
        <p className="px-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          pariatur odio voluptates beatae? Quis quibusdam natus consequatur,
          dolore dolorem distinctio.
        </p>
      </Alert>
      <Alert type={"alert-warning"} icon={<AlertTriangle size={20} />} title={"Tips & Tricks"}>
        <p className="px-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque
          tempore architecto temporibus repellendus officia blanditiis, sit
          facilis distinctio in?
        </p>
      </Alert>
    </div>
  );
}
