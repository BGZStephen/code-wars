export class G964 {
  public static nbDig(n: number, d: number): number {
          const squared = [];

    for (let i = 0; i <= n; i++) {
      squared.push(Math.pow(i, 2))
    }

    return squared.map(value => value.toString()).join("").match(new RegExp(d.toString(), "g"))?.length || 0
  }
}

G964.nbDig(15, 1)