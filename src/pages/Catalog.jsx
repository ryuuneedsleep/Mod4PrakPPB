import { useState, useMemo } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

function Catalog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  // Mengambil daftar tipe senjata unik secara otomatis
  const categories = ['All', ...new Set(GUNS.map((gun) => gun.type))]

  // Filter pencarian, tipe senjata, dan sorting
  const processedGuns = useMemo(() => {
    let list = GUNS.filter((gun) => {
      const matchSearch = gun.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchType = selectedType === 'All' || gun.type === selectedType
      return matchSearch && matchType
    })

    if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'name-desc') {
      list.sort((a, b) => b.name.localeCompare(a.name))
    } else if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price)
    }

    return list
  }, [searchTerm, selectedType, sortBy])

  return (
    <>
      <section className="masthead">
        <h1 className="display">Hardware, by the spec sheet.</h1>
        <p className="lede">
          A small armory of pistols, rifles, and shotguns. Every piece listed with its
          type, caliber, and price — nothing else.
        </p>
      </section>

      <section>
        {/* Toolbar Pencarian, Filter Tipe, dan Sort */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '20px 0' }}>
          {/* Fitur Search */}
          <input
            type="text"
            placeholder="Search gun..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: '1 1 180px',
              padding: '8px 12px',
              border: '1px solid var(--line, #d9dee2)',
              borderRadius: '4px',
              font: 'inherit',
            }}
          />

          {/* Fitur Filter Tipe Senjata */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid var(--line, #d9dee2)',
              borderRadius: '4px',
              font: 'inherit',
              background: 'var(--paper, #f2f4f5)',
            }}
          >
            {categories.map((type) => (
              <option key={type} value={type}>
                {type === 'All' ? 'All Types' : type}
              </option>
            ))}
          </select>

          {/* Fitur Sort Harga & Nama (Alfabet) */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              padding: '8px 12px',
              border: '1px solid var(--line, #d9dee2)',
              borderRadius: '4px',
              font: 'inherit',
              background: 'var(--paper, #f2f4f5)',
            }}
          >
            <option value="default">Sort: Default</option>
            <option value="name-asc">Name (A - Z)</option>
            <option value="name-desc">Name (Z - A)</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="list-head">
          <h2>Current stock</h2>
          <span className="count">{processedGuns.length} pieces</span>
        </div>

        {/* Kondisi jika tidak ada senjata yang cocok */}
        {processedGuns.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '40px 0', fontSize: '18px', color: 'var(--steel, #5a6673)' }}>
            no guns match
          </p>
        ) : (
          <ul className="stock">
            {processedGuns.map((gun) => (
              <GunCard key={gun.name} gun={gun} />
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default Catalog