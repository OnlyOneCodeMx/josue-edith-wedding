import { FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import { LuExternalLink } from 'react-icons/lu';

export default function CardLocation({
  img,
  title,
  date,
  hour,
  phone,
  location,
  mapLink,
  cardSmall,
}) {
  return (
    <div className={cardSmall ? ' lg:w-80 lg:h-[520px]' : ''}>
      <img className="max-w-full h-auto" src={img} alt={`Foto de ${title}`} />
      <h3 className=" py-4 bg-[#bf8599] text-white font-courgette text-2xl text-center">
        {title}
      </h3>
      <div className="border-b border-x border-gray-300 py-8 px-5 text-center font-roboto text-slate-600">
        {date && (
          <div className="flex justify-center mb-2 gap-3 items-center">
            <FaCalendarAlt className=" text-[#bf8599]" />
            {date}
          </div>
        )}
        {hour && (
          <div className="flex justify-center mb-2 gap-3 items-center">
            <MdAccessTimeFilled className="text-[#bf8599]" />
            {hour}
          </div>
        )}
        {phone && (
          <div className="flex justify-center mb-2 gap-3 cursor-pointer items-center text-sky-600 underline decoration-2">
            <FaPhoneAlt className="text-[#bf8599]" />
            <a href={`tel:+52${phone}`}>{phone}</a>
          </div>
        )}
        {location && (
          <div className="flex justify-center gap-2 mb-9 text-sky-600 underline decoration-2">
            <FaMapMarkerAlt className="text-[#bf8599]" />
            <a className="" href={mapLink} target="_blank" rel="noreferrer">
              {location}
            </a>
            <LuExternalLink />
          </div>
        )}

        <a
          className="text-slate-950 px-7 py-3 border-2 border-[#bf8599]"
          href={mapLink}
          target="_blank"
          rel="noreferrer">
          Ver Mapa
        </a>
      </div>
    </div>
  );
}
