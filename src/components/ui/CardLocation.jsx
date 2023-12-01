import { FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
export default function CardLocation({
  img,
  title,
  date,
  hour,
  phone,
  location,
  mapLink,
}) {
  return (
    <div className=" h-">
      <img className="max-w-full h-auto" src={img} alt={`Foto de ${title}`} />
      <h3 className=" py-4 bg-[#bf8599] text-white font-courgette text-2xl text-center">
        {title}
      </h3>
      <div className="border-b border-x border-gray-300 py-8 px-5 text-center font-roboto text-slate-600">
        {date && (
          <div className="flex justify-center mb-2 gap-3">
            <FaCalendarAlt className=" text-[#bf8599]" />
            {date}
          </div>
        )}
        {hour && (
          <div className="flex justify-center mb-2 gap-3">
            <MdAccessTimeFilled className="text-[#bf8599]" />
            {hour}
          </div>
        )}
        {phone && (
          <div className="flex justify-center mb-2 gap-3">
            <FaPhoneAlt className="text-[#bf8599]" />
            {phone}
          </div>
        )}
        {location && (
          <div className="flex justify-center gap-3 mb-9">
            <FaMapMarkerAlt className="text-[#bf8599]" />
            {location}
          </div>
        )}

        <a
          className="text-slate-950 px-7 py-3 border-2 border-[#bf8599]"
          href={mapLink}>
          Ver Mapa
        </a>
      </div>
    </div>
  );
}
