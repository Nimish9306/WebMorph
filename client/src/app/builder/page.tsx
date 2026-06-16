"use client"

import { useState } from "react"
import axios from "axios"
import { useUser, UserButton } from "@clerk/nextjs"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import GeneratedWebsite from "@/components/generated/GeneratedWebsite"



const BuilderPage = () => {
  const { user } = useUser()
  const router = useRouter()
  const [prompt, setPrompt] = useState("")
const [loading, setLoading] = useState(false)
const [websiteData, setWebsiteData] = useState<any>(null)
const [projects, setProjects] = useState<any[]>([])
const [exportFiles, setExportFiles] = useState<any[]>([])
const [showExportModal, setShowExportModal] = useState(false)
const [showEditor, setShowEditor] = useState(false)
const [currentProjectId, setCurrentProjectId] = useState("")
const [openMenu, setOpenMenu] = useState<string | null>(null)

 useEffect(() => {
  if (!user) {
    router.push("/sign-in")
  }
}, [user, router])

  const handleGenerate = async () => {
    try {
      setLoading(true)

      const res = await axios.post(
        "http://localhost:5000/api/generate",
        {
          prompt,
          userId: user?.id,
        }
      )

      const parsedData =
  typeof res.data.data === "string"
    ? JSON.parse(res.data.data)
    : res.data.data
      console.log("PARSED DATA", parsedData);

setWebsiteData(parsedData)

if (res.data.project?._id) {
  setCurrentProjectId(
    res.data.project._id
  )
}
fetchProjects()

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }



  }

  const handleRename = async (
  projectId: string,
  currentName: string
) => {

  const newName = window.prompt(
  "Enter new project name",
  currentName
)

  if (!newName) return

  try {

    await axios.put(
      `http://localhost:5000/api/projects/${projectId}/rename`,
      {
        prompt: newName,
      }
    )

    fetchProjects()

  } catch (error) {
    console.log(error)
  }
}

  const fetchProjects = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/projects/${user?.id}`
    )

    setProjects(res.data.projects)
  } catch (error) {
    console.log(error)
  }
}
const handleDelete = async (
  projectId: string
) => {

  const confirmed = window.confirm(
    "Delete this project?"
  )

  if (!confirmed) return

  try {

    await axios.delete(
      `http://localhost:5000/api/projects/${projectId}`
    )

    fetchProjects()

  } catch (error) {
    console.log(error)
  }
}
const handleSaveChanges = async () => {
  try {

    if (!currentProjectId) return

    await axios.put(
      `http://localhost:5000/api/projects/${currentProjectId}`,
      {
        generatedJson: websiteData,
      }
    )

    alert("Changes saved!")

    fetchProjects()

  } catch (error) {
    console.log(error)
  }
}

const handleExport = async () => {
  try {

    const res = await axios.post(
      "http://localhost:5000/api/export",
      {
        websiteData,
      }
    )

    setExportFiles(res.data.data.files)
    setShowExportModal(true)

  } catch (error) {
    console.log(error)
  }
}
useEffect(() => {
  if (user?.id) {
    fetchProjects()
  }
}, [user])
  
  return (
    <main className="flex h-screen bg-[#09090b] text-white">

      {/* Sidebar */}
      <aside className="hidden w-[260px] border-r border-white/10 bg-black/30 lg:block">

  <div className="flex h-16 items-center border-b border-white/10 px-6">
    <h1 className="text-2xl font-bold tracking-tight">
      WebMorph
    </h1>
  </div>

  <div className="p-5">

    <button
      onClick={() => {
        setPrompt("")
        setWebsiteData(null)
      }}
      className="w-full rounded-2xl bg-violet-600 px-5 py-3 font-medium hover:bg-violet-700 transition"
    >
      + New Project
    </button>

    <div className="mt-8">

      <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
        Recent Projects
      </p>

      <div className="space-y-3">

        {projects.length > 0 ? (
          projects.map((project: any) => (

            <div
  key={project._id}
  onClick={() => {
    setWebsiteData(project.generatedJson)
    setCurrentProjectId(project._id)
  }}
  className="relative cursor-pointer rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
>

  <div className="flex items-start justify-between">

    <p className="pr-2 text-sm truncate">
      {project.prompt}
    </p>

    <button
      onClick={(e) => {
        e.stopPropagation()

        setOpenMenu(
          openMenu === project._id
            ? null
            : project._id
        )
      }}
      className="px-2 text-gray-400 hover:text-white"
    >
      ⋮
    </button>

  </div>

  {openMenu === project._id && (

    <div className="absolute right-3 top-10 z-50 w-32 rounded-xl border border-white/10 bg-[#111] shadow-xl">

      <button
        onClick={(e) => {
          e.stopPropagation()

          handleRename(
            project._id,
            project.prompt
          )

          setOpenMenu(null)
        }}
        className="block w-full px-4 py-3 text-left text-sm hover:bg-white/5"
      >
        Rename
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()

          handleDelete(project._id)

          setOpenMenu(null)
        }}
        className="block w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-white/5"
      >
        Delete
      </button>

    </div>

  )}

</div>

          ))
        ) : (

          <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-gray-500">
            No projects yet
          </div>

        )}

      </div>

    </div>

  </div>

</aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">

        {/* Topbar */}
        <header className="flex h-16 items-center justify-between border-b border-white/10 px-6">

          <div>
            <h2 className="text-lg font-semibold">
              Welcome back, {user?.firstName}
            </h2>

            <p className="text-sm text-gray-500">
              {user?.primaryEmailAddress?.emailAddress}
            </p>
          </div>

          <div className="flex items-center gap-4">
<button
  onClick={() => setShowEditor(!showEditor)}
>
  Edit
</button>
            <button
  onClick={handleExport}
  className="rounded-xl border border-white/10 px-5 py-2"
>
  Export
</button>

            <UserButton
              afterSignOutUrl="/"
            />
          </div>
        </header>

        {/* Workspace */}
        <div className="flex flex-1 overflow-hidden">

  {/* Left Panel */}
  <div className="w-[35%] border-r border-white/10 p-6 overflow-y-auto">

    <h1 className="text-4xl font-bold tracking-tight">
      Build with WebMorph
    </h1>

    <p className="mt-3 text-gray-400">
      Describe your dream website and let AI generate it instantly.
    </p>

    <div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Create a modern AI SaaS landing page..."
        className="min-h-[250px] w-full resize-none bg-transparent text-base outline-none placeholder:text-gray-500"
      />

      <div className="mt-4 flex flex-wrap gap-2">

        {[
          "AI SaaS",
          "Portfolio",
          "E-commerce",
          "Startup",
          "Dashboard",
        ].map((item) => (
          <button
            key={item}
            onClick={() =>
              setPrompt(`Create a ${item} website`)
            }
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-gray-400 hover:bg-white/5"
          >
            {item}
          </button>
        ))}

      </div>

      <button
        onClick={handleGenerate}
        disabled={loading || !prompt.trim()}
        className="mt-6 w-full rounded-xl bg-violet-600 py-3 font-medium hover:bg-violet-700 disabled:opacity-50"
      >
        {loading
          ? "Generating..."
          : "Generate Website"}
      </button>

    </div>

  </div>

  <div className="flex flex-1 bg-[#050505]">

  {/* Preview */}
  <div className="flex-1 overflow-y-auto">

    {!websiteData ? (
      <div className="flex h-full items-center justify-center text-gray-500">
        Generated website preview will appear here
      </div>
    ) : (
      <GeneratedWebsite data={websiteData} />
    )}

  </div>

  {/* Editor */}
  {showEditor && websiteData && (
    <div className="w-[320px] border-l border-white/10 bg-black/30 p-5">
        <button
  onClick={handleSaveChanges}
  className="mb-6 w-full rounded-xl bg-green-600 py-3 font-medium hover:bg-green-700"
>
  Save Changes
</button>
      <h3 className="mb-6 text-lg font-semibold">
        Live Editor
      </h3>

      <div className="space-y-4">

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Hero Title
          </label>

          <input
            value={
              websiteData?.landingPage?.heroSection?.title || ""
            }
            onChange={(e) =>
              setWebsiteData({
                ...websiteData,
                landingPage: {
                  ...websiteData.landingPage,
                  heroSection: {
                    ...websiteData.landingPage.heroSection,
                    title: e.target.value,
                  },
                },
              })
            }
            className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Hero Subtitle
          </label>

          <textarea
            value={
              websiteData?.landingPage?.heroSection?.subtitle || ""
            }
            onChange={(e) =>
              setWebsiteData({
                ...websiteData,
                landingPage: {
                  ...websiteData.landingPage,
                  heroSection: {
                    ...websiteData.landingPage.heroSection,
                    subtitle: e.target.value,
                  },
                },
              })
            }
            className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            CTA Button
          </label>

          <input
            value={
              websiteData?.landingPage?.heroSection?.ctaText || ""
            }
            onChange={(e) =>
              setWebsiteData({
                ...websiteData,
                landingPage: {
                  ...websiteData.landingPage,
                  heroSection: {
                    ...websiteData.landingPage.heroSection,
                    ctaText: e.target.value,
                  },
                },
              })
            }
            className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
          />
        </div>

      </div>

    </div>
  )}

</div>

</div>
      </div>

      {
  showExportModal && (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">

      <div className="h-[80vh] w-[80vw] rounded-2xl bg-[#111] p-6 overflow-auto">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Exported Files
          </h2>

          <button
            onClick={() =>
              setShowExportModal(false)
            }
          >
            ✕
          </button>

        </div>

        <div className="mt-6 space-y-4">

          {exportFiles.map(
            (file: any, index: number) => (

              <div
                key={index}
                className="rounded-xl border border-white/10 p-4"
              >

                <p className="mb-3 font-medium">
                  {file.path}
                </p>

                <pre className="overflow-auto text-sm text-gray-300">
                  {file.content}
                </pre>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  )
}
    </main>
  )
}

export default BuilderPage