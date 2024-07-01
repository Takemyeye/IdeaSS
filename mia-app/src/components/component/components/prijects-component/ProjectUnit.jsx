export function ProjectUnit({ link, image, title, description }) {
  return (
    <div className="projects">
      <div className="wallpaper">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="description-projects">
        <h3>{title}</h3>
        <h4>{description}..</h4>
      </div>
    </div>
  );
};
