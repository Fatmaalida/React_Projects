

export default function TextCard(props) {
   const { title, text } = props;
    return (
        <div className="text-card">
            <h5 className="text-primary">{title}</h5>
            <p>{text}</p>
        </div>
    );
  
}

