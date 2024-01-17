import './VideoPage.css'
import { Link } from 'react-router-dom';


export function VideoPage() {
    return (
        <div>
          <video src="/assets/video.mp4" controls />
          <Link to="/home">Back</Link>
        </div>
      );
}
