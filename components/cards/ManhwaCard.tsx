type ManhwaCardProps = {
  title: string;
  image: string;
  score: number;
  genres: string[];
};

export default function ManhwaCard({
  title,
  image,
  score,
  genres,
}: ManhwaCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-red-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-black
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-red-500
        hover:shadow-[0_0_50px_rgba(192,57,43,0.25)]
      ">

        {/* IMAGE */}

        <div className="aspect-[2/3] overflow-hidden">

          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

        </div>

        {/* OVERLAY */}

        <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
        " />

        {/* CONTENT */}

        <div className="
          absolute
          bottom-0
          left-0
          right-0
          p-5
        ">

          <div className="
            inline-block
            mb-3
            rounded-full
            bg-red-500/20
            px-3
            py-1
            text-xs
            text-red-300
            backdrop-blur-sm
          ">
            ⭐ {score || "N/A"}
          </div>

          <h3 className="
            text-xl
            font-bold
            leading-tight
            text-[#f0e8d8]
          ">
            {title}
          </h3>

          <div className="
            mt-3
            flex
            flex-wrap
            gap-2
          ">

            {genres.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-black/40
                  px-2
                  py-1
                  text-xs
                  text-white/70
                "
              >
                {genre}
              </span>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}