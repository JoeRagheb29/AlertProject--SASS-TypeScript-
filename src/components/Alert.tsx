import { ReactNode } from "react";
import { X } from "lucide-react";
import "../index.scss";

export type AlertTypes = "alert-default" | "alert-success" |  "alert-warning" | "alert-danger" | "alert-info" ;

interface IProps {
    type: AlertTypes,
    title: string,
    icon: ReactNode,
    children?: ReactNode
}

export default function Alert({ type , icon, title , children }: IProps) {
    return (
        <div className={type}>
            <div className="d-flex p-3 justify-content-between gap-2 align-items-center">
                <div className="d-flex gap-2 align-items-center">
                    {icon}
                    <h2>{title}</h2>
                </div>
                <X className="x"/>
            </div>
            {children}
        </div>
    )
}