import React, { useState, useEffect, useMemo } from 'react'
import { LuX } from 'react-icons/lu'

function CircleProgress({ percentage }) {
  const size = 24
  const strokeWidth = 2.5
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill='none' stroke='#5C6478' strokeWidth={strokeWidth} />
      <circle cx={size / 2} cy={size / 2} r={radius} fill='none' stroke='#0C1117' strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap='round' />
    </svg>
  )
}

export function DynamicIslandTOC({ children, selector = 'h1, h2, h3, h4, h5, h6' }) {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const getHeadings = () => {
      const elements = Array.from(document.querySelectorAll(selector))
      const validHeadings = elements
        .filter(el => !el.hasAttribute('data-toc-ignore'))
        .map((el, index) => {
          if (!el.id) {
            const generatedId = el.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || `toc-heading-${index}`
            el.id = generatedId
          }
          const depthAttr = el.getAttribute('data-toc-depth')
          let level = 2
          if (depthAttr) {
            level = parseInt(depthAttr, 10)
          } else {
            const tagName = el.tagName.toUpperCase()
            if (tagName.startsWith('H') && tagName.length === 2) {
              level = parseInt(tagName[1], 10)
            }
          }
          const text = el.getAttribute('data-toc-title') || el.textContent || 'Section'
          return { id: el.id, text, level, element: el }
        })

      validHeadings.sort((a, b) => a.element.compareDocumentPosition(b.element) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)
      setHeadings(validHeadings)
    }

    const timer = setTimeout(getHeadings, 300)
    return () => clearTimeout(timer)
  }, [selector])

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = null
      for (const heading of headings) {
        const top = heading.element.getBoundingClientRect().top
        if (top <= 120) {
          currentActiveId = heading.id
        } else {
          break
        }
      }
      if (!currentActiveId && headings.length > 0) {
        currentActiveId = headings[0].id
      }
      setActiveId(currentActiveId)

      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [headings])

  const activeHeading = headings.find(h => h.id === activeId)
  const minLevel = useMemo(() => {
    if (headings.length === 0) return 1
    return Math.min(...headings.map(h => h.level))
  }, [headings])

  return (
    <>
      {children}
      {isExpanded && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            backgroundColor: 'rgba(0,0,0,0.2)',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setIsExpanded(false)}
        />
      )}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div
          onClick={() => !isExpanded && setIsExpanded(true)}
          style={{
            cursor: isExpanded ? 'default' : 'pointer',
            width: isExpanded ? 340 : 280,
            height: isExpanded ? 400 : 52,
            borderRadius: isExpanded ? 24 : 26,
            backgroundColor: 'white',
            color: '#0C1117',
            border: '1px solid rgba(0,0,0,0.1)',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {!isExpanded && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px 16px'
            }}>
              <div style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#0C1117',
                flexShrink: 0
              }} />
              <div style={{
                position: 'relative',
                flex: 1,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                textAlign: 'left'
              }}>
                <span style={{
                  display: 'block',
                  width: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#0C1117'
                }}>
                  {activeHeading?.text || 'Contents'}
                </span>
              </div>
              <CircleProgress percentage={progress} />
            </div>
          )}
          {isExpanded && (
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                display: 'flex',
                flexShrink: 0,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px 12px'
              }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: '#5C6478',
                  textTransform: 'uppercase'
                }}>
                  TABLE OF CONTENTS
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(false)
                  }}
                  style={{
                    color: '#5C6478',
                    transition: 'color 0.2s',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#0C1117' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#5C6478' }}
                >
                  <LuX size={20} />
                </button>
              </div>
              <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '0 12px 16px'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {headings.map(h => {
                    const isActive = activeId === h.id
                    const indentLevel = Math.max(0, h.level - minLevel)
                    const paddingLeft = indentLevel * 14 + 12
                    return (
                      <button
                        key={h.id}
                        onClick={(e) => {
                          e.stopPropagation()
                          const yOffset = -80
                          const y = h.element.getBoundingClientRect().top + window.scrollY + yOffset
                          window.scrollTo({ top: y, behavior: 'smooth' })
                          setIsExpanded(false)
                        }}
                        style={{
                          display: 'flex',
                          width: '100%',
                          flexShrink: 0,
                          cursor: 'pointer',
                          alignItems: 'center',
                          borderRadius: '8px',
                          border: 'none',
                          padding: `8px 12px 8px ${paddingLeft}px`,
                          textAlign: 'left',
                          fontSize: '14px',
                          transition: 'all 0.3s ease-out',
                          backgroundColor: isActive ? 'rgba(12,17,23,0.1)' : 'transparent',
                          color: isActive ? '#0C1117' : '#5C6478',
                          fontWeight: isActive ? 500 : 400
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'rgba(12,17,23,0.05)'
                            e.currentTarget.style.color = 'rgba(12,17,23,0.85)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor = 'transparent'
                            e.currentTarget.style.color = '#5C6478'
                          }
                        }}
                      >
                        <span style={{
                          flex: 1,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {h.text}
                        </span>
                        {isActive && (
                          <div style={{
                            marginLeft: '12px',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#0C1117',
                            flexShrink: 0
                          }} />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
