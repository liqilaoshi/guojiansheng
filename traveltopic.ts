// ==========================================
// 5. TAB: COURSE TEXTS (课文自读)
// ==========================================
function TextsTab() {
  const [selectedText, setSelectedText] = useState(COURSE_TEXTS[0]);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showEnglish, setShowEnglish] = useState(true);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Controller */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Selector */}
        <div className="flex items-center space-x-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
          {COURSE_TEXTS.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedText(t)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                selectedText.id === t.id
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              课文 {t.id}
            </button>
          ))}
        </div>

        {/* Toggles */}
        <div className="flex items-center space-x-3 text-xs font-medium text-slate-600">
          <button
            onClick={() => setShowPinyin(!showPinyin)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border transition ${
              showPinyin ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-slate-50 border-slate-200'
            }`}
          >
            {showPinyin ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>拼音 (Pinyin)</span>
          </button>
          <button
            onClick={() => setShowEnglish(!showEnglish)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border transition ${
              showEnglish ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-slate-50 border-slate-200'
            }`}
          >
            {showEnglish ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>英文翻译 (English)</span>
          </button>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div>
          {/* 标题拼音移至汉字标题上方（同步受 showPinyin 控制） */}
          {showPinyin && (
            <p className="text-xs sm:text-sm text-indigo-600 font-medium mb-0.5">
              {selectedText.pinyinTitle}
            </p>
          )}
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{selectedText.title}</h2>
          <p className="text-xs text-slate-400 mt-1">对话人物：{selectedText.speaker}</p>
        </div>

        {/* Dialogue Lines */}
        <div className="space-y-4">
          {selectedText.content.map((line, idx) => (
            <div key={idx} className="flex items-start space-x-3 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-1">
                {line.speaker}
              </div>
              <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 group-hover:border-indigo-200 group-hover:bg-indigo-50/20 transition space-y-1">
                {/* 句子拼音移至汉字句子上方 */}
                {showPinyin && (
                  <div className="text-xs text-indigo-600 font-medium">{line.py}</div>
                )}
                <div className="text-base font-bold text-slate-800">{line.ch}</div>
                {showEnglish && (
                  <div className="text-xs text-slate-500 pt-0.5">{line.en}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}