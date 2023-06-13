const CardElement = ({ elementTitle, elementDescription, elementImageUrl}) => {
  return (
    <div className="bg-white dark:bg-gray-800 max-w-screen-xl mx-auto">
    <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
        <h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
            {elementTitle}
        </h2>
        <p className="mt-2 max-w-xl text-base text-gray-400">
          {elementDescription}
        </p>
        <div className="absolute inset-y-0 pt-8 right-0 hidden lg:block lg:left-2/3 xl:left-1/2">
            <picture>
                <source srcSet={elementImageUrl} type="image/png"/>
                    <source srcSet={elementImageUrl}/>
                        <img className="object-cover mx-auto maw-w-44" src={elementImageUrl} alt={elementTitle}/>
                    </picture>
                </div>
            </div>
        </div>
  )
}

export default CardElement