export default function SectionHeader({ eyebrow, title, description }) {
    return (
        <div className="max-w-3xl space-y-3">
            {eyebrow ? <p className="label-muted">{eyebrow}</p> : null}
            <h2 className="title-premium">{title}</h2>
            {description ? <p className="copy-muted">{description}</p> : null}
        </div>
    );
}
