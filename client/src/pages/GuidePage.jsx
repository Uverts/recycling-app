import plasticImage from '../assets/garbage/plastic.jpeg'
import Card from '../components/Card'

const categories = [
  { title: 'Metal', desc: 'Cans, foil, metal scraps' },
  { title: 'Glass', desc: 'Bottles, jars, glass containers' },
  { title: 'Biological', desc: 'Food waste, yard clippings' },
  { title: 'Paper', desc: 'Newspapers, magazines, notebooks' },
  { title: 'Battery', desc: 'Rechargeable & disposable batteries' },
  { title: 'Trash', desc: 'Non-recyclable waste' },
  { title: 'Cardboard', desc: 'Boxes, packaging material' },
  { title: 'Shoes', desc: 'Old sneakers, boots, sandals' },
  { title: 'Clothes', desc: 'T-shirts, jeans, jackets' },
  { title: 'Plastic', desc: 'Bottles, plastic bags, containers' },
]

export default function GuidePage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-4xl font-bold text-green-600 mb-10">
        Recycling Guide
      </h2>
      <div className="grid grid-cols-3 m-4 gap-8">
        {categories.map((category, idx) => (
          <Card
            key={idx}
            image={plasticImage}
            title={category.title}
            desc={category.desc}
          />
        ))}
      </div>
    </div>
  )
}
