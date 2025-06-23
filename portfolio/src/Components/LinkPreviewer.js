import React, { useEffect, useState } from "react";

const API_KEY = "a9054ef8c98acba5bddd0d19048a7fb3"; // Get a free key from https://www.linkpreview.net/

const LinkPreview = ({ url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url || url === "Sorry no preview available") {
      setData(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(url)}`)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [url]);

  if (loading) return <div className="preview-fallback">Loading preview…</div>;
  if (!data || !data.title) return <div className="preview-fallback">No preview available.</div>;

  return (
    <a className="project-link-preview" href={url} target="_blank" rel="noopener noreferrer">
      {data.image && <img src={data.image} alt={data.title} className="preview-img" />}
      <div className="preview-content">
        <div className="preview-title">{data.title}</div>
        <div className="preview-desc">{data.description}</div>
        <div className="preview-url">{data.url}</div>
      </div>
    </a>
  );
};

export default LinkPreview;