const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayObjs) {
	const win = arrayObjs.find(obj => obj.result === "W" )
	if (win) {
		return win.year
	}
}