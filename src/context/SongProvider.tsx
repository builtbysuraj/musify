import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react"

interface Song {
  images?: {
    coverart?: string
  }
  title?: string
}

interface SongContextType {
  playlist: Song[]
  setPlaylist: Dispatch<SetStateAction<Song[]>>
  favourite: Song[]
  setFavourite: Dispatch<SetStateAction<Song[]>>
}

const SongContext = createContext<SongContextType | undefined>(undefined)

export default function SongProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [playlist, setPlaylist] = useState<Song[]>([])
  const [favourite, setFavourite] = useState<Song[]>([])

  return (
    <SongContext.Provider
      value={{ playlist, setPlaylist, favourite, setFavourite }}
    >
      {children}
    </SongContext.Provider>
  )
}

// custom hook for useContext
export function useSongList() {
  const context = useContext(SongContext)
  if (context === undefined) throw new Error("Error")
  return context
}
