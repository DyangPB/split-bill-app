'use client'

import { useState } from 'react'
import { useReceiptStore } from '@/store/receiptStore'
import { getColor } from '@/lib/personColors'

export default function PeopleManager() {
  const [input, setInput] = useState('')
  const people = useReceiptStore((s) => s.people)
  const addPerson = useReceiptStore((s) => s.addPerson)
  const removePerson = useReceiptStore((s) => s.removePerson)

  function handleAdd() {
    const name = input.trim()
    if (!name) return
    addPerson(name)
    setInput('')
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Nama teman..."
          className="flex-1 bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-gray-400 transition-colors"
        />
        <button
          onClick={handleAdd}
          disabled={!input.trim()}
          className="px-5 py-3 bg-gray-950 text-white text-sm font-semibold rounded-2xl disabled:opacity-25 active:scale-95 transition-all"
        >
          Tambah
        </button>
      </div>

      {people.length > 0 ? (
        <div className="space-y-1.5">
          {people.map((p, i) => {
            const c = getColor(i)
            return (
              <div key={p.id} className="bg-white border border-gray-100 rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className={`w-8 h-8 ${c.dot} rounded-xl flex items-center justify-center text-white text-xs font-bold`}>
                  {p.name[0].toUpperCase()}
                </div>
                <span className="flex-1 text-sm font-medium text-gray-800">{p.name}</span>
                <button
                  onClick={() => removePerson(p.id)}
                  className="text-gray-300 hover:text-gray-600 transition-colors text-xs p-1"
                >
                  ✕
                </button>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-4xl mb-3">👥</p>
          <p className="text-gray-400 text-sm">Tambahkan teman yang ikut patungan.</p>
        </div>
      )}
    </div>
  )
}
