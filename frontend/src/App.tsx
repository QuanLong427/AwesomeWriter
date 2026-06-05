import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Home, FileText, Users, BookOpen, Settings } from 'lucide-react'
import { TextInput } from './components/TextInput'
import { ScriptPreview } from './components/ScriptPreview'
import { apiRequest } from './lib/utils'
import './App.css'

// 页面组件
function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI小说转剧本工具
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          智能转换网络小说为专业剧本格式
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/editor"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            开始转换
          </Link>
          <Link
            to="/projects"
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            我的项目
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">智能格式转换</h3>
          <p className="text-gray-600">
            AI自动识别场景、对话、动作，转换为标准剧本格式
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">角色自动提取</h3>
          <p className="text-gray-600">
            自动识别小说中的角色，生成角色档案和关系图
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">在线编辑优化</h3>
          <p className="text-gray-600">
            所见即所得的剧本编辑器，AI提供优化建议
          </p>
        </div>
      </div>
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">我的项目</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600">暂无项目，点击"开始转换"创建新项目</p>
      </div>
    </div>
  )
}

function EditorPage() {
  const [inputText, setInputText] = useState('')
  const [scriptContent, setScriptContent] = useState('')
  const [isConverting, setIsConverting] = useState(false)

  const handleConvert = async () => {
    if (!inputText.trim()) {
      alert('请输入小说内容')
      return
    }

    // 检查AI配置
    const apiKey = localStorage.getItem('ai_api_key')
    if (!apiKey) {
      alert('请先在设置中配置AI API Key')
      return
    }

    setIsConverting(true)
    setScriptContent('')

    // 获取AI配置
    const aiConfig = {
      provider: localStorage.getItem('ai_provider') || 'openai',
      apiKey: apiKey,
      model: localStorage.getItem('ai_model') || undefined,
    }

    try {
      const response = await apiRequest<{ data: { jobId: string } }>('/api/convert', {
        method: 'POST',
        body: JSON.stringify({ content: inputText, aiConfig }),
      })

      // 轮询转换状态
      pollConversionStatus(response.data.jobId)
    } catch (error) {
      console.error('转换失败:', error)
      alert('转换失败，请重试')
      setIsConverting(false)
    }
  }

  const pollConversionStatus = async (id: string) => {
    const maxAttempts = 30
    let attempts = 0

    const poll = async () => {
      try {
        const response = await apiRequest<{ data: { status: string; output?: string } }>(
          `/api/convert/${id}`
        )

        if (response.data.status === 'completed') {
          setScriptContent(response.data.output || '')
          setIsConverting(false)
          return
        }

        if (response.data.status === 'failed') {
          alert('转换失败，请重试')
          setIsConverting(false)
          return
        }

        attempts++
        if (attempts < maxAttempts) {
          setTimeout(poll, 1000)
        } else {
          alert('转换超时，请稍后重试')
          setIsConverting(false)
        }
      } catch (error) {
        console.error('查询转换状态失败:', error)
        attempts++
        if (attempts < maxAttempts) {
          setTimeout(poll, 1000)
        } else {
          alert('查询转换状态失败，请稍后重试')
          setIsConverting(false)
        }
      }
    }

    poll()
  }

  const handleExport = (format: 'pdf' | 'docx' | 'txt') => {
    const blob = new Blob([scriptContent], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `剧本.${format === 'docx' ? 'docx' : format}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1 flex">
        {/* 左侧：小说输入 */}
        <div className="w-1/2 border-r border-gray-200 flex flex-col p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">小说内容</h2>
            <button
              onClick={handleConvert}
              disabled={isConverting || !inputText.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isConverting ? '转换中...' : '开始转换'}
            </button>
          </div>
          <TextInput
            value={inputText}
            onChange={setInputText}
          />
        </div>

        {/* 右侧：剧本预览 */}
        <div className="w-1/2 flex flex-col p-4">
          <ScriptPreview
            content={scriptContent}
            isConverting={isConverting}
            onExport={handleExport}
          />
        </div>
      </div>
    </div>
  )
}

function CharactersPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">角色管理</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <p className="text-gray-600">请先创建项目并转换小说内容</p>
      </div>
    </div>
  )
}

function SettingsPage() {
  const [provider, setProvider] = useState<string>(
    localStorage.getItem('ai_provider') || 'openai'
  )
  const [apiKey, setApiKey] = useState<string>(
    localStorage.getItem('ai_api_key') || ''
  )
  const [model, setModel] = useState<string>(
    localStorage.getItem('ai_model') || ''
  )
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    localStorage.setItem('ai_provider', provider)
    localStorage.setItem('ai_api_key', apiKey)
    localStorage.setItem('ai_model', model)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const getModels = () => {
    if (provider === 'openai') {
      return ['gpt-4', 'gpt-4-turbo', 'gpt-3.5-turbo']
    } else if (provider === 'claude') {
      return ['claude-3-opus-20240229', 'claude-3-sonnet-20240229', 'claude-3-haiku-20240307']
    }
    return []
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">设置</h1>

      {/* AI配置 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">AI配置</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI提供商
            </label>
            <select
              value={provider}
              onChange={(e) => {
                setProvider(e.target.value)
                setModel('')
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="openai">OpenAI</option>
              <option value="claude">Claude (Anthropic)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={`输入你的${provider === 'openai' ? 'OpenAI' : 'Anthropic'} API Key`}
            />
            <p className="mt-1 text-xs text-gray-500">
              {provider === 'openai'
                ? '获取API Key: https://platform.openai.com/api-keys'
                : '获取API Key: https://console.anthropic.com/'}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              模型（可选，留空使用默认模型）
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">默认模型</option>
              {getModels().map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSave}
            className={`px-4 py-2 rounded-lg transition-colors ${
              saved
                ? 'bg-green-500 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {saved ? '已保存' : '保存设置'}
          </button>
        </div>
      </div>

      {/* 使用说明 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">使用说明</h3>
        <div className="prose prose-sm max-w-none text-gray-600">
          <ol className="list-decimal list-inside space-y-2">
            <li>选择AI提供商（OpenAI或Claude）</li>
            <li>输入对应的API Key</li>
            <li>可选：选择具体的模型</li>
            <li>保存设置后即可使用转换功能</li>
          </ol>
          <p className="mt-4 text-sm text-gray-500">
            注意：API Key仅存储在本地浏览器中，不会上传到服务器。
          </p>
        </div>
      </div>
    </div>
  )
}

// 导航组件
function Navigation() {
  const location = useLocation()
  const navItems = [
    { path: '/', icon: Home, label: '首页' },
    { path: '/projects', icon: BookOpen, label: '项目' },
    { path: '/editor', icon: FileText, label: '编辑器' },
    { path: '/characters', icon: Users, label: '角色' },
    { path: '/settings', icon: Settings, label: '设置' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900">AI剧本转换</span>
          </div>
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
