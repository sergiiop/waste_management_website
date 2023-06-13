const CardElement = ({ elementTitle, elementDescription, elementImageUrl}) => {
  return (
    <div className="bg-white dark:bg-gray-800 max-w-screen-xl mx-auto">
      <div className="relative flex px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
        <div>
        <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                        {elementTitle}
                      </p>
          <p className="mt-2 max-w-xl text-base text-gray-400">
          {elementDescription}
          </p>
        </div>
        <div className="inset-y-0 pt-8 mx-auto max-w-xs right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
          <img className="object-cover w-full" src={elementImageUrl} alt={elementTitle}/>
        </div>
      </div>
    </div>
  )
}

export default CardElement