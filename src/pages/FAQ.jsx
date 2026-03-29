import React from 'react'
import Accordion from '../components/Accordion'

const FAQ = () => {
  const faqData = [
    {
      question: "What is the Atelier philosophy?",
      answer: "We focus on 'The Curated Essential'—objects that serve a purpose while elevating the atmosphere of a modern sanctuary. Every piece is selected for its archival quality and timeless aesthetic relevance."
    },
    {
      question: "How do you handle shipping?",
      answer: "We ship globally via carbon-neutral logistics partners. Each order is meticulously packaged in recycled fiber cases and includes real-time tracking from our studio to your door."
    },
    {
      question: "Can I return an item?",
      answer: "Limited editions and archive pieces are eligible for return within 14 days of delivery, provided they remain in their original gallery-sealed packaging with all documentation intact."
    },
    {
      question: "Do you offer design consultations?",
      answer: "Yes, our concierges are available for private consultations to help you curate your personal space. Please reach out via our contact page to schedule a session."
    }
  ]

  return (
    <div className="pt-48 pb-64 bg-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        <motion.header 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-48 md:mb-64 space-y-10"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#4F8CFF] block">SUPPORT ARCHIVE</span>
          <h1 className="text-6xl md:text-[120px] font-bold tracking-tighter text-[#111111] leading-[0.85] flex flex-col">
            <span>Frequently</span>
            <span className="font-serif italic font-normal text-[#111111]/10 text-right">Asked.</span>
          </h1>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Accordion items={faqData} />
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
