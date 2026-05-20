interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-14">

      {eyebrow && (
        <p className="
          uppercase
          tracking-[0.3em]
          text-xs
          text-[#d4a017]
          mb-4
        ">
          {eyebrow}
        </p>
      )}

      <h2 className="
        text-4xl
        md:text-5xl
        font-black
        tracking-[0.05em]
      ">
        {title}
      </h2>

      {subtitle && (
        <p className="
          mt-5
          max-w-2xl
          text-[#f0e8d8]/70
          leading-relaxed
        ">
          {subtitle}
        </p>
      )}

    </div>
  );
}