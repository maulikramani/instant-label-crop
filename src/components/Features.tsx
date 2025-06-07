import { Zap, Wand, Lock } from "lucide-react";
import FeatureCard from "./FeatureCard";


const featureCards = [
    {
        "id": "fast-processing",
        "icon": <Zap />,
        "title": "Fast Processing",
        "description": "Upload your PDF and get results in seconds. Our optimized engine can handle multiple pages efficiently."
    },
    {
        "id": "smart-detection",
        "icon": <Wand />,
        "title": "Smart Detection",
        "description": "Advanced algorithms automatically detect shipping labels and invoice sections for precise cropping every time.",
    },
    {
        "id": "secure-and-private",
        "icon": <Lock />,
        "title": "Secure & Private",
        "description": "Your files are processed entirely in your browser. We never store or transmit your sensitive data."
    }
]


function Features() {
    return <div id="features" className="row justify-content-center mt-2 py-3">
        <div className="col-12 text-center mb-5">
            <h2 className="display-6 fw-bold">Why Choose Instant PDF Crop?</h2>
            <p className="lead text-muted">Save time and streamline your shipping process</p>
        </div>
        {featureCards.map(card => {
                return <FeatureCard key={card.id} icon={card.icon} title={card.title} description={card.description} />
            })}

    </div>
}

export default Features;