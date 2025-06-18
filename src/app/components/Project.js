export default function Project({
  title,
  videoLink,
  externalLink,
  frameworks = [],
}) {
  return (
    <div className="card shadow-lg rounded-lg overflow-hidden bg-white flex flex-col h-full">
      <div className="flex-grow flex items-center justify-center w-full">
        <video
          src={videoLink}
          autoPlay
          muted
          loop
          playsInline
          className="max-w-full max-h-full"
        />
      </div>
      <div className="card-body p-4 mt-auto">
        <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
        <ul className="mb-4 text-sm text-gray-700 flex flex-col items-center list-none p-0">
          {frameworks.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex justify-center">
          <a
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            Check it out
          </a>
        </div>
      </div>
    </div>
  );
}
