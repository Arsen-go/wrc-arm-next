export default function Video({ url }: { url: string }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <video className="rounded-lg" controls autoPlay muted style={{ maxWidth: '80%', height: 'auto' }}>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
