import PlaylistItem from './PlaylistItem'

function Playlist() {
  return (
    <div className="content__playlist playlist">
      <PlaylistItem
        title="Guilt"
        author="Nero"
        album="Welcome Reality"
        time="4:44"
      />
      <PlaylistItem
        title="Elektro"
        author="Dynoro, Outwork, Mr. Gee"
        album="Elektro"
        time="2:22"
      />
      <PlaylistItem
        title="I'm Fire"
        author="Ali Bakgor"
        album="I’m Fire"
        time="2:22"
      />
      <PlaylistItem
        title="Non Stop"
        titleSpan="(Remix)"
        author="Стоункат, Psychopath"
        album="Non Stop"
        time="4:12"
      />
      <PlaylistItem
        title="Run Run"
        titleSpan="(feat. AR/CO)"
        author="Jaded, Will Clarke, AR/CO"
        album="Run Run"
        time="2:54"
      />
      <PlaylistItem
        title="Eyes on Fire"
        titleSpan="(Zeds Dead Remix)"
        author="Blue Foundation, Zeds Dead"
        album="Eyes on Fire"
        time="5:20"
      />
      <PlaylistItem
        title="Mucho Bien"
        titleSpan="(Hi Profile Remix)"
        author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        album="Mucho Bien"
        time="3:41"
      />
      <PlaylistItem
        title="Knives n Cherries"
        author="minthaze"
        album="Captivating"
        time="1:48"
      />
      <PlaylistItem
        title="How Deep Is Your Love"
        author="Calvin Harris, Disciples"
        album="How Deep Is Your Love"
        time="3:32"
      />
      <PlaylistItem
        title="Morena"
        author="Tom Boxer"
        album="Soundz Made in Romania"
        time="3:36"
      />
    </div>
  )
}

export default Playlist
