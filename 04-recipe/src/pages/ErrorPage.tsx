import Error from "../components/Error.tsx";
import {useRouteError} from "react-router-dom";

export default function ErrorPage() {


    const error = useRouteError() as any;


    return (
        <div className="error-page">
             <Error message={error.statusText} explanantion={error.statusText} />
        </div>

    )
}