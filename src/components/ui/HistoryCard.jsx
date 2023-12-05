import heart from './../../assets/corazon2.png';

export default function HistoryCard({
  img,
  month,
  year,
  title,
  description,
  altImg,
  reverse,
}) {
  return (
    <div
      className={`flex flex-col items-center lg:relative lg:grid lg:grid-cols-12 lg:items-center pt-8 lg:h-auto lg:w-full max-w-6xl ${
        reverse ? 'lg:grid-flow-col-reverse' : ''
      }`}>
      <div className="absolute bg-gray-400 w-px top-0 bottom-0 left-1/2 transform -translate-x-1/2 lg:block hidden z-0"></div>
      <img
        className={`w-80 h-80 rounded-full shadow-md lg:col-span-5 lg:max-w-sm ${
          reverse ? 'lg:order-3' : ''
        }`}
        src={img}
        alt={altImg}
      />

      <div
        className={`text-white h-14 lg:h-auto lg:col-span-2 lg:max-w-sm ${
          reverse ? 'lg:order-2' : ''
        } relative`}>
        <div
          className="animate-heartBeat w-24 h-24 bg-cover -mt-9 flex flex-col justify-center font-medium lg:m-auto z-50"
          style={{
            backgroundImage: `url(${heart})`,
          }}>
          <div className="text-xl font-courgette">{year}</div>
          <div className="text-base font-roboto">{month}</div>
        </div>
      </div>

      <div
        className={`h-auto max-w-sm lg:col-span-5 ${
          reverse ? 'lg:order-1' : ''
        } break-words`}>
        <h3 className="font-courgette text-2xl mb-3">{title}</h3>
        <p className="font-roboto text-slate-600 mb-3">{description}</p>
      </div>
    </div>
  );
}
