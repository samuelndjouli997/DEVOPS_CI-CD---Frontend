import React from 'react'

const quizz = () => {
  return (
    <section className="py-16">
        <div className="mx-auto flex flex-col justify-center items-center w-[90%] lg:w-2/3 py-10 px-12 bg-white rounded-xl">
            <div className="text-center">
                <h2 className="font-semibold text-3xl mb-8 text-black">Question</h2>
            </div>

            <ul className="mb-6">
                
                    <li className={`border-[1.5px] rounded-xl p-4 mb-4 cursor-pointer text-black`} key="choice">
                        Couccou
                    </li>
            </ul>
        </div>
    </section>
  )
}

export default quizz