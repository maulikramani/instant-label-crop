import "./FeatureCard.css";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: any;
}

function FeatureCard(props: FeatureCardProps) {
    return (
        <div className="col-md-4 mb-4">
            <div className="feature-card">
                <h3>
                    {props.icon}
                    {props.title}
                </h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default FeatureCard;
