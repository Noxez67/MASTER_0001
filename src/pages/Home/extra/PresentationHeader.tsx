import "./presentationheader.css"
import "./fonts/NameSmile.otf";

type presentationHeaderTypes = {
    fontSize: string;
    text?: string;
}

function PresentationHeader({fontSize, text}: presentationHeaderTypes) {
    return (
        <h1 className="presentation-header" style={{fontSize: fontSize}}>{text ?? "RBOT"}</h1>
    )
}

export default PresentationHeader;