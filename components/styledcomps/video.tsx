import {
  MediaController,
//   MediaControlBar,
//   MediaTimeRange,
//   MediaTimeDisplay,
//   MediaVolumeRange,
//   MediaPlayButton,
//   MediaSeekBackwardButton,
//   MediaSeekForwardButton,
//   MediaMuteButton,
} from "media-chrome/react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  muted?: boolean;
  className?: string;
 
}

export default function VideoPlayer({
  src = "https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4",
  className,
  muted = true,
  ...props
}: VideoPlayerProps) {
  return (
    <MediaController className={cn(className)} {...props}>
      <video slot="media" src={src} preload="auto" muted={muted} crossOrigin="" autoPlay loop/>
      {/* <MediaControlBar>
        <MediaPlayButton></MediaPlayButton>
        <MediaSeekBackwardButton></MediaSeekBackwardButton>
        <MediaSeekForwardButton></MediaSeekForwardButton>
        <MediaTimeRange></MediaTimeRange>
        <MediaTimeDisplay showDuration></MediaTimeDisplay>
        <MediaMuteButton></MediaMuteButton>
        <MediaVolumeRange></MediaVolumeRange>
      </MediaControlBar> */}
    </MediaController>
  );
}
