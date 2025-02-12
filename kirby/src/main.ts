import { makePlayer, setControls } from "./entities.ts"
import { k } from "./kaboomCtx.ts"
import "./style.css"
import { makeMap } from "./utils"

async function gameSetup() {
  k.loadSprite("assets", "./player.png", {
    sliceX: 14,
    sliceY: 5,
    anims: {
      kirbIdle: { from: 0, to: 5, speed: 4, loop: true },
      kirbWalking: {from: 14, to: 21, speed: 2, loop: true},
      kirbInhaling: { from: 28, to: 33, speed: 4, loop: true },
      kirbFull: 69,
      kirbInhaleEffect: { from: 28, to: 33, speed: 15, loop: true },
      shootingStar: 42,
      // flame: { from: 56, to: 57, speed: 4, loop: true },
      guyIdle: 14,
      guyWalk: { from: 14, to: 21, speed: 4, loop: true },
      // bird: { from: 27, to: 28, speed: 4, loop: true },
    },
  })
}

k.loadSprite("level-1", "./level-1.png")

const { map: level1Layout, spawnPoints: level1SpawnPoints } = await makeMap(k, "level-1")

k.scene("level-1", () => {
  k.setGravity(2100)
  k.add([k.rect(k.width(), k.height()), k.color(k.Color.fromHex("#f7d7db")), k.fixed()])

  k.add(level1Layout)

  const kirb = makePlayer(k, 19, 256)
  // const kirb = makePlayer(k, level1SpawnPoints.player[0].x, level1SpawnPoints.player[0].y)

  setControls(k, kirb)
  k.add(kirb)

  k.camScale(0.7, 0.7)
  k.onUpdate(() => {
    if (kirb.pos.x < level1Layout.pos.x + 432) k.camPos(kirb.pos.x + 600, 800)
  })
})

k.go("level-1")

gameSetup()

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
