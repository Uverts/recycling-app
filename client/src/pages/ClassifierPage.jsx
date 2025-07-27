export default function ClassifierPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-4xl font-bold text-green-600 mb-10">
        Garbage Classifier
      </h2>

      <label
        htmlFor="file-upload"
        className="px-5 py-2 bg-green-600 text-white rounded-lg cursor-pointer font-semibold text-xl select-none mb-8"
      >
        Upload Image
      </label>
      <input id="file-upload" type="file" accept="image/*" className="hidden" />

      <div className="w-96 h-80 border-4 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-2xl mb-8">
        Image Preview Area
      </div>

      <button className="px-10 py-4 mb-5 bg-green-600 text-white rounded-lg font-semibold text-xl hover:bg-green-700 transition-colors">
        Classify Garbage
      </button>
    </div>
  )
}
