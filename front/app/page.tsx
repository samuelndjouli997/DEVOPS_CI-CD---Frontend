import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="container mx-auto px-8 pt-5 pb-8 lg:pt-[90px] lg:pb-[110px] lg:px-[110px]">
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-br from-white to-[#52525B] text-3xl lg:text-6xl font-bold text-center">Bienvenue sur notre quizz</h1>
          <div>
          <form>
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-white"
                  >Géométrie</label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-white"
                  >Mathématiques</label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-white"
                  >Histoire</label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-white"
                  >Culture Générale</label>
              </div>
            </form>
          </div>
          <Button className="mt-8 bg-gradient-to-r from-[#eeaeca] to-[#94bbe9]">Commencer le quizz</Button>
        </div>
      </section>
    </main>
  );
}
