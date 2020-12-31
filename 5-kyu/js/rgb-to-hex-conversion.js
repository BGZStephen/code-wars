/*

The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

function rgb(r, g, b){
  let rHex;
  let gHex;
  let bHex;

  if(r > 0 && r <= 255) {
    rHex = r.toString(16)
  } else if (r > 255) {
    rHex = 'FF'
  } else {
    rHex = '00'
  }

  if (g > 0 && g <= 255) {
    gHex = g.toString(16)
  } else if (g > 255) {
    gHex = 'FF'
  } else {
    gHex = '00'
  }

  if (b > 0 && b <= 255) {
    bHex = b.toString(16)
  } else if (b > 255) {
    bHex = 'FF'
  } else {
    bHex = '00'
  }

  return `${rHex}${gHex}${bHex}`.toUpperCase()
}
