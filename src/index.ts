// import World from './world'

// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)


//基本の型定義
// import { anySample, noExistSample, primitiveSample, unknownSample } from "./basic";
// anySample()
// noExistSample()
// primitiveSample()
// unknownSample()


//関数
import { logMessage } from "./function/basic";
import {isUserSignedIn} from "./function/parameter"

logMessage("Hello TypeScript")

isUserSignedIn('ABC', 'stamander')