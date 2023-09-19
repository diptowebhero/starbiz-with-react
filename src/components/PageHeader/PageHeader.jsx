/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";


export default function PageHeader({ title }) {
    return (
        <> 
        <Helmet>
            <title>PixelFusion - {title}</title>
        </Helmet>
        </>
    )
}