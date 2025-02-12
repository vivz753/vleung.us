import kaboom from "kaboom"
import { scale } from "./constants"

export const k = kaboom({
	width: 188 * scale,
	height: 186* 4,
	scale,
	// stretch: true,
	letterbox: true,
	global: false,
		// pixelDensity: 16,
})