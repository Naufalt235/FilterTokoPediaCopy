import { useState } from "react"
import { X, Star, Check, ChevronDown } from "lucide-react"

export default function App() {
  const [activeCategory, setActiveCategory] = useState("harga")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const categories = [
    { id: "harga", label: "Harga" },
    { id: "jarak", label: "Jarak toko" },
    { id: "lokasi", label: "Lokasi" },
    { id: "pengiriman", label: "Pengiriman" },
    { id: "kondisi", label: "Kondisi" },
    { id: "rating", label: "Rating" },
    { id: "jenis-toko", label: "Jenis toko" },
    { id: "penawaran", label: "Penawaran" },
    { id: "kategori", label: "Kategori" },
    { id: "terakhir", label: "Terakhir" },
    { id: "durasi", label: "Durasi" },
    { id: "stok", label: "Stok" },
  ]

  const scrollToSection = (id: string) => {
    setActiveCategory(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const formatNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
      {/* Mobile constraint */}
      <div className="w-full max-w-md bg-white min-h-screen flex flex-col relative shadow-xl overflow-hidden">
        {/* Header */}
        <header className="flex-shrink-0 bg-white z-10 px-4 py-4 flex items-center gap-4 border-b border-gray-100 shadow-sm">
          <button className="text-gray-900 p-1 -ml-1">
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Filter</h1>
        </header>

        {/* Layout Container */}
        <div className="flex-1 flex overflow-hidden bg-white">
          {/* Sidebar */}
          <div className="w-[110px] bg-[#F7F7F7] flex-shrink-0 overflow-y-auto">
            <ul className="py-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => scrollToSection(cat.id)}
                    className={`w-full text-left px-3 py-4 text-xs font-medium transition-colors ${
                      activeCategory === cat.id
                        ? "bg-white text-gray-900 border-l-[3px] border-[#00AA5B]"
                        : "text-gray-500 border-l-[3px] border-transparent hover:bg-gray-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-8 pb-32">
            
            {/* Section: Harga */}
            <section id="harga" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">Harga</h2>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={minPrice}
                    onChange={(e) => setMinPrice(formatNumber(e.target.value))}
                    placeholder="Rp Harga terendah"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#00AA5B]"
                  />
                </div>
                <span className="text-gray-400 font-medium">—</span>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(formatNumber(e.target.value))}
                    placeholder="Rp Harga tertinggi"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#00AA5B]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="w-fit px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 text-left">
                  IDR 110,542—IDR 336,574
                </button>
                <button className="w-fit px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 text-left">
                  IDR 336,574—IDR 470,725
                </button>
                <button className="w-fit px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 text-left">
                  IDR 470,725—IDR 1,122,,751
                </button>
              </div>
            </section>

            {/* Section: Jarak toko ke alamatmu */}
            <section id="jarak" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">
                Jarak toko ke alamatmu
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  Radius 20 km
                </button>
              </div>
            </section>

            {/* Section: Lokasi */}
            <section id="lokasi" className="scroll-mt-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-gray-900 text-base">Lokasi</h2>
                <button className="text-[#00AA5B] text-sm font-bold">
                  Lihat semua
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kab. Sumedang",
                  "Bali",
                  "Banten",
                  "Bengkulu",
                  "D.I. Aceh",
                ].map((loc) => (
                  <button
                    key={loc}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800"
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </section>

            {/* Section: Pengiriman (dulu Gratis Ongkir) */}
            <section id="pengiriman" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">
                Pengiriman
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  Gratis Ongkir
                </button>
              </div>
            </section>

            {/* Section: Kondisi */}
            <section id="kondisi" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">
                Kondisi
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  Bekas
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  Baru
                </button>
              </div>
            </section>

            {/* Section: Rating 4 ke atas */}
            <section id="rating" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">
                Rating 4 ke atas
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="pl-3 pr-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2">
                  <Star className="w-[18px] h-[18px] text-[#ffc400] fill-[#ffc400]" />
                  <span className="text-sm text-gray-800">
                    Rating 4 ke atas
                  </span>
                </button>
              </div>
            </section>

            {/* Section: Jenis toko */}
            <section id="jenis-toko" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">
                Jenis toko
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="pl-2 pr-4 py-2 border border-gray-300 rounded-lg flex items-center gap-1.5 bg-gray-50">
                  <div className="bg-[#6c00e2] rounded-[3px] p-0.5 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">Mall</span>
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  Power shop
                </button>
              </div>
            </section>

            {/* Section: Penawaran */}
            <section id="penawaran" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">
                Penawaran
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  COD
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  Harga diskon
                </button>
              </div>
            </section>

            {/* Section: Kategori */}
            <section id="kategori" className="scroll-mt-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-gray-900 text-base">Kategori</h2>
                <button className="text-[#00AA5B] text-sm font-bold flex items-center gap-1">
                  Lihat Lainnya
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-900 mb-2">Furnitur Komersial</p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                    Semua
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                    Furnitur Kantor
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-900 mb-2">Furnitur Indoor</p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                    Semua
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                    Kursi
                  </button>
                </div>
              </div>
            </section>

            {/* Section: Terakhir ditambahkan */}
            <section id="terakhir" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">
                Terakhir ditambahkan
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  7 hari
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  14 hari
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  1 bulan
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  3 bulan
                </button>
              </div>
            </section>

            {/* Section: Durasi pengiriman */}
            <section id="durasi" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">
                Durasi pengiriman
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  Same day
                </button>
              </div>
            </section>

            {/* Section: Stok (dulu Lainnya) */}
            <section id="stok" className="scroll-mt-4">
              <h2 className="font-bold text-gray-900 text-base mb-3">
                Stok
              </h2>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  Stok tersedia
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800">
                  Preorder
                </button>
              </div>
            </section>

          </div>
        </div>

        {/* Sticky Footer: Button Pindah ke Tujuan (Apply) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-white border border-gray-300 rounded-lg text-base font-bold text-gray-700 active:bg-gray-50">
              Reset
            </button>
            <button className="flex-[2] py-3 bg-[#00AA5B] rounded-lg text-base font-bold text-white active:bg-[#00924e]">
              Terapkan Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
