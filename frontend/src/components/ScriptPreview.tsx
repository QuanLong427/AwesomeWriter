import { FileText, Download, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface ScriptPreviewProps {
  content: string
  isConverting?: boolean
  onExport?: (format: 'pdf' | 'docx' | 'txt') => void
}

export function ScriptPreview({ content, isConverting = false, onExport }: ScriptPreviewProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!content) return

    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('复制失败:', error)
    }
  }

  const lineCount = content ? content.split('\n').length : 0

  return (
    <div className="flex flex-col h-full">
      {/* 工具栏 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {lineCount > 0 ? `${lineCount} 行` : '等待转换...'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {content && (
            <>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {copied ? '已复制' : '复制'}
              </button>
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded transition-colors">
                  <Download className="w-4 h-4" />
                  导出
                </button>
                <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                  <button
                    onClick={() => onExport?.('txt')}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 rounded-t-lg"
                  >
                    导出为 TXT
                  </button>
                  <button
                    onClick={() => onExport?.('pdf')}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                  >
                    导出为 PDF
                  </button>
                  <button
                    onClick={() => onExport?.('docx')}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 rounded-b-lg"
                  >
                    导出为 Word
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* 剧本内容 */}
      <div className="flex-1 overflow-auto border border-gray-200 rounded-lg bg-white">
        {isConverting ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mb-4"></div>
            <p>正在转换中...</p>
            <p className="text-sm mt-1">AI正在分析小说内容并转换为剧本格式</p>
          </div>
        ) : content ? (
          <pre className="p-6 font-mono text-sm leading-relaxed whitespace-pre-wrap">
            {content}
          </pre>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400">
            <FileText className="w-12 h-12 mb-4" />
            <p>转换后的剧本将显示在这里</p>
            <p className="text-sm mt-1">请在左侧输入小说内容并点击"开始转换"</p>
          </div>
        )}
      </div>
    </div>
  )
}
