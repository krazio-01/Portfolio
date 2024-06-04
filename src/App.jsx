import { useState } from "react";
import Loader from "./components/Loader/Loader";
import Layout from "./Layout";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    const handleLoaderLoaded = () => {
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 450);
    };

    return (
        <>
            {showContent && <Layout />}
            <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
        </>
    );
}

export default App;
