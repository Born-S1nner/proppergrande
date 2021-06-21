import './App.css';
// Not here, good
// This is a message for those that scrolled down
// I planned a last ditch effort experiment for the people to read
// This is where my life is on the line
// Below me are my project, be sure to check them out by your own time
// The important thing you must do is go on twitter and make comment with screenshot about it using #S1nnerisback
// means a lot to me and those that were there for me, supported me, motivate me, and more

const links = [
  {
    text: "Tweleve",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "Tweleve powerful beings are in chargre of ruling the universe. Play as a new recuitto the Tweleve, a powerful galactic rulers to defeat evil.",
    color: "#E95800",
  },
  {
    text: "Bloddy Red Saga: Delusional Hope",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Imagine waking up with no memories. Sang is one of those unfortunate cases. Luckly, an old friend is willing to help him, ,the leader of Neo-Pnagaea. Read as how Sang tries to get accustoom to the Government and search for the truth and possibly a dark secret.",
    color: "#1099A8",
  },
  {
    text: "Bloddy Red Saga: Sinful Passage",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "In spite of the failures of society, there is hope for a sinner. Read a dairy of a misfortunate woman name Levy and watch as how she must live with the past biting her back.",
    color: "#BC027F",
  },
  {
    text: "Bloddy Red Saga: Elemental Disaster",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Coming soon... As a poor son of a single mother, Jim must earn his living by any means necessary. Either by overthrowing a ruler or joing the elite, Jim will do anything to make game.",
    color: "#0D96F2",
  },
  {
    text: "Bloddy Red Saga: Fool's Journey",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Coming soon... As the new leader of Neo-Pangaea, Ethan must prepare for the battle with litral Death. He must assemble al 21 Tarot Holders to fight against the army of Death.",
    color: "#0D99A8",
  },
  {
    text: "VTuber Killer",
    url: "(&!@#$%&(!#$%(!#)))",
    description:
    //"Coming soon.",
    "Coming soon... Virtual Age is here! Humans are enslaved to the chains of social media. It's up to you to put a stop to VTuber Inc. Play as Johnny to fight Hololive, VShojo, Chats, and more. The Human race depends on you.",
    color: "#0D99A8",
  },
  {
    text: "Veneno",
    url: "(&!@#$%&(!#$%(!#)))",
    description:
    //"Coming soon.",
    "Coming soon... The hitman has poison yoou. You have 24 hours until you can find a cure or live your live to the fullest. The choice is yours.",
    color: "#1B65A8",
  },
  {
    text: "Rap Star",
    url: "(&!@#$%&(!#$%(!#)))",
    description:
    //"Coming soon.",
    "Coming soon... Struggle to make some beats, don't worry. Every great rapper must start somewhere. Here is a app that determines whether you can make it big or make it back home.",
    color: "#0D99A8",
  },
]

function App() {
  return (
    <div className="App">
    
      <main className="pageStyles">
      <title>Propergrande</title>
      <h1 className="headingStyles">
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
        <br/>
        ProperGrande
        <br />
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p className="paragraphStyles">
        Cool to see you here. I hope you don't click f12 to see more content. Otherwise, someone might see a secret message that is forbidden.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      <ul className="listStyles">
        
        {links.map(link => (
          <li key={link.url} >
            <span>
              <h3
                className="linkStyle"
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </h3>
              <p className="descriptionStyle">{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
    </div>
  );
}

export default App;
