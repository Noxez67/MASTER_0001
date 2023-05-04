import "./presentationheader.css"
import "./fonts/NameSmile.otf";

type presentationHeaderTypes = {
    fontSize: string;
}

function PresentationHeader({fontSize}: presentationHeaderTypes) {
    return (
        <h1 className="presentation-header" style={{fontSize: fontSize}}>RBOT</h1>
    )
}

export default PresentationHeader;