import { useState, useRef } from 'react'
import { Upload, FileText, X } from 'lucide-react'
import { readFileContent } from '../lib/utils'

interface TextInputProps {
  value: string
  onChange: (value: string) => void
  onFileUpload?: (content: string, fileName: string) => void
}

export function TextInput({ value, onChange, onFileUpload }: TextInputProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      await handleFile(files[0])
    }
  }

  const handleFile = async (file: File) => {
    if (!file.name.endsWith('.txt') && !file.name.endsWith('.md')) {
      alert('请上传 .txt 或 .md 文件')
      return
    }

    try {
      const content = await readFileContent(file)
      setFileName(file.name)
      onChange(content)
      onFileUpload?.(content, file.name)
    } catch (error) {
      console.error('读取文件失败:', error)
      alert('读取文件失败，请重试')
    }
  }

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      await handleFile(files[0])
    }
  }

  const clearFile = () => {
    setFileName(null)
    onChange('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const wordCount = value.length
  const charCount = value.replace(/\s/g, '').length

  return (
    <div className="flex flex-col h-full">
      {/* 文件上传区域 */}
      <div
        className={`border-2 border-dashed rounded-lg p-4 mb-4 transition-colors ${
          isDragging
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex items-center justify-center gap-4">
          <Upload className="w-8 h-8 text-gray-400" />
          <div className="text-center">
            <p className="text-sm text-gray-600">
              拖拽文件到此处，或
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-blue-600 hover:text-blue-700 ml-1"
              >
                点击上传
              </button>
            </p>
            <p className="text-xs text-gray-500 mt-1">支持 .txt 和 .md 文件</p>
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.md"
          onChange={handleFileInput}
          className="hidden"
        />
      </div>

      {/* 已上传文件提示 */}
      {fileName && (
        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-2 mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">{fileName}</span>
          </div>
          <button
            onClick={clearFile}
            className="text-green-600 hover:text-green-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 文本编辑区 */}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="在此粘贴或输入小说内容..."
        className="flex-1 w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-sm leading-relaxed"
      />

      {/* 字数统计 */}
      <div className="flex justify-end gap-4 mt-2 text-xs text-gray-500">
        <span>字符数：{charCount}</span>
        <span>总字符：{wordCount}</span>
      </div>
    </div>
  )
}
