'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation'

function VideoPlayer() {
  const videoPrefix = 'https://storage.googleapis.com/jeffw3558-yt-processed-videos/';
  const videoSrc = useSearchParams().get('v');

  return (
    <div>
      <h1>Watch Page</h1>
      { <video controls src={videoPrefix + videoSrc}/> }
    </div>
  );
}

// Next.js requires useSearchParams to be inside a Suspense boundary to build
export default function Watch() {
  return (
    <Suspense>
      <VideoPlayer />
    </Suspense>
  );
}
