const CarFormacion = ({img,titulo}) => {
  return (
    <div className="h-48 bg-white rounded-lg mt-6 m-5 md:flex md:auto p-2 animate__animated animate__pulse">
      <div className="w-full flex justify-center">
      <img src={img} className="w-20 h-20 rounded-full md:w-40 md:h-40 md:rounded-none" />
      </div>
<div className="w-full flex justify-center p-2">
<h3 className="text-black text-1xl font-bold p-4 text-center md:text-2xl">{titulo}</h3>
</div>

    </div>
  )
}

export default CarFormacion