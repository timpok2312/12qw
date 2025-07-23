import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { 
  FileText, 
  Palette, 
  Layout, 
  List, 
  Languages, 
  CheckCircle, 
  Download, 
  Share2, 
  Plus, 
  Folder, 
  Mail, 
  Target,
  Menu,
  X,
  Printer,
  Globe,
  Briefcase,
  Calendar,
  MapPin,
  Building,
  Upload,
  User,
  Eye
} from 'lucide-react';
import { languages, Language } from './types/language';
import { getTranslation } from './utils/translations';

function App() {
  const [activeSection, setActiveSection] = useState('resume');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const resumeActions = [
    { id: 'create-resume', icon: Plus, label: 'Create Resume' },
    { id: 'my-resumes', icon: Folder, label: 'My Resumes' },
    { id: 'template-resume', icon: FileText, label: 'Template Resume' },
  ];

  const additionalResumeTools = [
    { id: 'translator', icon: Languages, label: 'AI Resume Translator' },
    { id: 'ats', icon: CheckCircle, label: 'AI ATS Checker' },
    { id: 'ai-import', icon: Upload, label: 'AI Import Resume' },
  ];

  const coverLetterTools = [
    { id: 'create-cover', icon: Plus, label: 'Create Cover Letter' },
    { id: 'my-covers', icon: Folder, label: 'My Cover Letters' },
    { id: 'cover-templates', icon: FileText, label: 'Cover Letter Templates' },
  ];

  const jobTrackerTools = [
    { id: 'add-application', icon: Plus, label: 'Add Application' },
    { id: 'my-applications', icon: Briefcase, label: 'My Applications' },
    { id: 'interview-tracker', icon: Calendar, label: 'Interview Tracker' },
    { id: 'company-research', icon: Building, label: 'Company Research' },
  ];

  const mainProducts = [
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'coverLetter', label: 'Cover Letter', icon: Mail },
    { id: 'jobTracker', label: 'Job Tracker', icon: Target },
  ];

  const renderSidebarContent = () => {
    switch (activeSection) {
      case 'resume':
        return (
          <>
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Resume Actions</h3>
              <div className="space-y-1">
                {resumeActions.map((action) => (
                  <button
                    key={action.id}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <action.icon size={18} />
                    <span className="text-sm font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">AI Tools</h3>
              <div className="space-y-1">
                {additionalResumeTools.map((tool) => (
                  <button
                    key={tool.id}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    <tool.icon size={18} />
                    <span className="text-sm font-medium">{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        );

      case 'coverLetter':
        return (
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Cover Letter Tools</h3>
            <div className="space-y-1">
              {coverLetterTools.map((tool) => (
                <button
                  key={tool.id}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <tool.icon size={18} />
                  <span className="text-sm font-medium">{tool.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 'jobTracker':
        return (
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Job Tracker Options</h3>
            <div className="space-y-1">
              {jobTrackerTools.map((tool) => (
                <button
                  key={tool.id}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  <tool.icon size={18} />
                  <span className="text-sm font-medium">{tool.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'resume':
        return (
          <>
            {/* A4 Preview Container */}
            <div className="flex-1 overflow-auto p-8">
              <div className="max-w-4xl mx-auto relative">
                {/* Top Design Toolbar */}
                {/* Simple Three Button Toolbar */}
                <div className="flex justify-center mb-6 sticky top-0 z-20">
                  <div className="bg-blue-600 rounded-xl shadow-lg px-4 py-2">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors">
                        <Layout size={18} />
                        <span className="text-sm font-medium">Layout</span>
                      </button>
                      
                      <div className="w-px h-4 bg-blue-400"></div>
                      
                      <button className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors">
                        <Palette size={18} />
                        <span className="text-sm font-medium">Color & Font</span>
                      </button>
                      
                      <div className="w-px h-4 bg-blue-400"></div>
                      
                      <button className="flex items-center space-x-2 px-4 py-2 text-white hover:bg-blue-700 rounded-lg transition-colors">
                        <List size={18} />
                        <span className="text-sm font-medium">Sections</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* A4 Paper Container */}
                <div className="bg-white shadow-xl rounded-xl overflow-hidden" style={{ 
                  width: '794px', 
                  minHeight: '1123px', 
                  margin: '0 auto',
                  aspectRatio: '210 / 297'
                }}>
                  {/* Resume Content */}
                  <div className="p-12">
                    {/* Header */}
                    <div className="text-center mb-8">
                      <h1 className="text-4xl font-bold text-gray-900 mb-2">John Smith</h1>
                      <p className="text-lg text-gray-600 mb-4">{getTranslation('Senior Software Developer', selectedLanguage.code)}</p>
                      <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
                        <span>john.smith@email.com</span>
                        <span>+1 (555) 123-4567</span>
                        <span>{getTranslation('Enter location', selectedLanguage.code)}</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                        {getTranslation('Professional Summary', selectedLanguage.code)}
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        {getTranslation('Experienced software developer with 8+ years of expertise in full-stack development, team leadership, and agile methodologies. Proven track record of delivering scalable solutions and driving technical innovation in fast-paced environments.', selectedLanguage.code)}
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-1">
                        {getTranslation('Work Experience', selectedLanguage.code)}
                      </h2>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900">{getTranslation('Senior Software Developer', selectedLanguage.code)}</h3>
                              <p className="text-gray-600">{getTranslation('Tech Solutions Inc.', selectedLanguage.code)}</p>
                            </div>
                            <span className="text-sm text-gray-500">2020 - Present</span>
                          </div>
                          <ul className="text-gray-700 space-y-1 ml-4">
                            <li>• {getTranslation('Led development of microservices architecture serving 1M+ users', selectedLanguage.code)}</li>
                            <li>• {getTranslation('Mentored junior developers and conducted code reviews', selectedLanguage.code)}</li>
                            <li>• {getTranslation('Improved system performance by 40% through optimization', selectedLanguage.code)}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                        {getTranslation('Technical Skills', selectedLanguage.code)}
                      </h2>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="font-medium text-gray-900">{getTranslation('Languages', selectedLanguage.code)}:</span>
                          <span className="text-gray-700 ml-2">JavaScript, Python, Java</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">{getTranslation('Frameworks', selectedLanguage.code)}:</span>
                          <span className="text-gray-700 ml-2">React, Node.js, Django</span>
                        </div>
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                        {getTranslation('Education', selectedLanguage.code)}
                      </h2>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-gray-900">{getTranslation('Bachelor of Computer Science', selectedLanguage.code)}</h3>
                          <p className="text-gray-600">{getTranslation('University of Technology', selectedLanguage.code)}</p>
                        </div>
                        <span className="text-sm text-gray-500">2012 - 2016</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 'coverLetter':
        return (
          <>
            {/* A4 Preview Container */}
            <div className="flex-1 overflow-auto p-8">
              <div className="max-w-4xl mx-auto relative">
                {/* Floating Design Panel */}
                <div className="absolute top-8 right-8 bg-white p-4 rounded-lg shadow-lg z-10 w-64">
                  <div className="space-y-6">
                    {/* Layout Section */}
                    <div>
                      <h4 className="text-md font-semibold text-gray-800 mb-3 flex items-center">
                        <Layout size={16} className="mr-2" />
                        Layout
                      </h4>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Spacing</label>
                        <input 
                          type="range" 
                          min="8" 
                          max="24" 
                          defaultValue="12" 
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Color & Font Section */}
                    <div>
                      <h4 className="text-md font-semibold text-gray-800 mb-3 flex items-center">
                        <Palette size={16} className="mr-2" />
                        Color & Font
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
                          <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                            <option>Inter</option>
                            <option>Roboto</option>
                            <option>Open Sans</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
                          <div className="flex space-x-2">
                            <div className="w-6 h-6 bg-blue-600 rounded-lg border-2 border-blue-700 cursor-pointer"></div>
                            <div className="w-6 h-6 bg-green-600 rounded-lg border border-gray-300 cursor-pointer hover:border-gray-400"></div>
                            <div className="w-6 h-6 bg-purple-600 rounded-lg border border-gray-300 cursor-pointer hover:border-gray-400"></div>
                            <div className="w-6 h-6 bg-red-600 rounded-lg border border-gray-300 cursor-pointer hover:border-gray-400"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sections */}
                    <div>
                      <h4 className="text-md font-semibold text-gray-800 mb-3 flex items-center">
                        <List size={16} className="mr-2" />
                        Sections
                      </h4>
                      <p className="text-sm text-gray-600">Manage resume sections here.</p>
                    </div>
                  </div>
                </div>

                {/* A4 Paper Container */}
                <div className="bg-white shadow-xl rounded-lg overflow-hidden" style={{ 
                  width: '794px', 
                  minHeight: '1123px', 
                  margin: '0 auto',
                  aspectRatio: '210 / 297'
                }}>
                  {/* Cover Letter Content */}
                  <div className="p-12">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="text-right mb-8">
                        <p className="text-sm text-gray-600">March 15, 2024</p>
                      </div>
                      <div className="mb-8">
                        <p className="text-sm text-gray-700">
                          Hiring Manager<br />
                          Tech Solutions Inc.<br />
                          123 Business Ave<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>

                    {/* Salutation */}
                    <div className="mb-6">
                      <p className="text-gray-900">Dear Hiring Manager,</p>
                    </div>

                    {/* Body */}
                    <div className="space-y-4 mb-8 text-gray-700 leading-relaxed">
                      <p>
                        I am writing to express my strong interest in the Senior Software Developer position 
                        at Tech Solutions Inc. With over 8 years of experience in full-stack development and 
                        a proven track record of delivering scalable solutions, I am confident that I would 
                        be a valuable addition to your team.
                      </p>
                      <p>
                        In my current role, I have successfully led the development of microservices architecture 
                        serving over 1 million users, while mentoring junior developers and improving system 
                        performance by 40%. My expertise in modern technologies and agile methodologies aligns 
                        perfectly with your company's innovative approach to software development.
                      </p>
                      <p>
                        I am particularly excited about the opportunity to contribute to your team's mission 
                        of creating cutting-edge solutions. I would welcome the chance to discuss how my 
                        experience and passion for technology can benefit Tech Solutions Inc.
                      </p>
                    </div>

                    {/* Closing */}
                    <div>
                      <p className="text-gray-900 mb-4">Sincerely,</p>
                      <p className="text-gray-900 font-semibold">John Smith</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 'jobTracker':
        return (
          <>
            {/* Job Tracker Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Job Application Tracker</span>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                    5 Active
                  </button>
                </div>
              </div>
              <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus size={16} className="inline mr-1" />
                Add Application
              </button>
            </div>

            {/* Job Tracker Dashboard */}
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-6xl mx-auto">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Applications</p>
                        <p className="text-2xl font-bold text-gray-900">23</p>
                      </div>
                      <Briefcase className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Interviews</p>
                        <p className="text-2xl font-bold text-gray-900">5</p>
                      </div>
                      <Calendar className="text-green-600" size={24} />
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Pending</p>
                        <p className="text-2xl font-bold text-gray-900">12</p>
                      </div>
                      <Eye className="text-yellow-600" size={24} />
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Response Rate</p>
                        <p className="text-2xl font-bold text-gray-900">34%</p>
                      </div>
                      <Target className="text-purple-600" size={24} />
                    </div>
                  </div>
                </div>

                {/* Recent Applications */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Applications</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {[
                      { company: 'Google', position: 'Senior Frontend Developer', status: 'Interview', date: '2024-03-10', location: 'Mountain View, CA' },
                      { company: 'Microsoft', position: 'Full Stack Engineer', status: 'Applied', date: '2024-03-08', location: 'Seattle, WA' },
                      { company: 'Meta', position: 'React Developer', status: 'Pending', date: '2024-03-05', location: 'Menlo Park, CA' },
                      { company: 'Apple', position: 'iOS Developer', status: 'Rejected', date: '2024-03-01', location: 'Cupertino, CA' },
                    ].map((app, index) => (
                      <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                              <Building size={20} className="text-gray-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{app.position}</h4>
                              <p className="text-sm text-gray-600">{app.company}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <MapPin size={12} className="text-gray-400" />
                                <span className="text-xs text-gray-500">{app.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              app.status === 'Interview' ? 'bg-green-100 text-green-800' :
                              app.status === 'Applied' ? 'bg-blue-100 text-blue-800' :
                              app.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {app.status}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">{app.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 h-16 flex items-center px-4 shadow-sm">
        <div className="flex items-center space-x-4 flex-shrink-0">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center space-x-2">
            <FileText className="text-blue-600" size={24} />
            <h1 className="text-xl font-semibold text-gray-900">Career Builder</h1>
          </div>
        </div>

        {/* Main Product Navigation - Centered */}
        <div className="flex-grow flex justify-center">
          <div className="hidden md:flex items-center space-x-2">
            {mainProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveSection(product.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center space-x-2 ${
                  activeSection === product.id
                    ? 'bg-blue-50 text-blue-600 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <product.icon size={16} />
                <span>{product.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <User size={20} />
          </button>
          <div className="relative">
            <button 
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ReactCountryFlag 
                countryCode={selectedLanguage.countryCode} 
                svg 
                style={{ width: '16px', height: '12px' }}
              />
              <span className="text-sm font-medium">{selectedLanguage.code}</span>
            </button>
            
            {languageDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 bg-black bg-opacity-30 z-40"
                  onClick={() => setLanguageDropdownOpen(false)}
                />
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language);
                          setLanguageDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
          </button>
          <div className="w-px h-6 bg-gray-300"></div>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Share2 size={16} className="inline mr-1" />
            Share
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            <Download size={16} className="inline mr-1" />
            Download
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Context-Sensitive Tools */}
        <aside className={`bg-white border-r border-gray-200 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
          <div className="h-full flex flex-col">
            {renderSidebarContent()}
          </div>
        </aside>

        {/* Main Content - Dynamic Based on Active Section */}
        <main className="flex-1 flex flex-col bg-gray-100 overflow-hidden">
          {renderMainContent()}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden bg-white border-t border-gray-200 p-4">
        <div className="flex justify-around">
          {mainProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveSection(product.id)}
              className={`flex flex-col items-center space-y-1 ${
                activeSection === product.id ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              <product.icon size={20} />
              <span className="text-xs">{product.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;