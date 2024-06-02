import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Apa jenis tanaman yang cocok ditanam di Bogor?",
      answer: (
        <ul className="list-disc ml-6">
          <li><strong>Tanaman Buah-buahan:</strong> Durian, mangga, rambutan, dan pisang.</li>
          <li><strong>Tanaman Sayuran:</strong> Bayam, kangkung, cabai, dan tomat.</li>
          <li><strong>Tanaman Hias:</strong> Anggrek, bougenville, dan adenium.</li>
          <li><strong>Tanaman Herbal:</strong> Jahe, kunyit, dan serai.</li>
        </ul>
      )
    },
    {
      question: "Bagaimana cara merawat tanaman di Bogor agar tumbuh subur?",
      answer: (
        <ol className="list-decimal ml-6">
          <li><strong>Penyiraman:</strong> Pastikan tanaman mendapatkan air yang cukup, terutama di musim kemarau. Namun, hindari penyiraman berlebihan yang bisa menyebabkan akar membusuk.</li>
          <li><strong>Pemupukan:</strong> Gunakan pupuk organik atau kompos untuk menyediakan nutrisi yang dibutuhkan tanaman. Pemupukan bisa dilakukan setiap satu atau dua bulan sekali.</li>
          <li><strong>Pencahayaan:</strong> Pastikan tanaman mendapatkan sinar matahari yang cukup. Beberapa tanaman membutuhkan sinar matahari langsung, sementara yang lain lebih baik di tempat teduh.</li>
          <li><strong>Pemangkasan:</strong> Lakukan pemangkasan secara rutin untuk menghilangkan daun atau cabang yang sudah mati atau rusak agar tanaman bisa tumbuh dengan baik.</li>
          <li><strong>Pengendalian Hama:</strong> Periksa tanaman secara rutin untuk mencegah serangan hama dan penyakit. Gunakan pestisida alami jika diperlukan.</li>
        </ol>
      )
    },
    {
      question: "Di mana saya bisa membeli tanaman berkualitas di Bogor?",
      answer: (
        <ul className="list-disc ml-6">
          <li><strong>Pasar Tanaman Hias Bogor:</strong> Terletak di Jl. Raya Pajajaran, pasar ini menawarkan berbagai jenis tanaman hias, bibit buah-buahan, dan tanaman sayuran.</li>
          <li><strong>Kebun Raya Bogor:</strong> Selain menjadi destinasi wisata, Kebun Raya Bogor juga memiliki toko yang menjual berbagai jenis tanaman dan bibit.</li>
          <li><strong>Sentra Tanaman Hias Cibinong:</strong> Lokasinya di sekitar Cibinong, tempat ini terkenal dengan beragam jenis tanaman hias yang berkualitas.</li>
          <li><strong>Toko Tanaman Online:</strong> Beberapa toko online yang berbasis di Bogor juga menyediakan berbagai jenis tanaman yang bisa dikirim ke berbagai wilayah.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">FAQ (Frequently Asked Questions)</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="w-full text-left flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
