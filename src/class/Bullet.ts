export class Bullet {
  public x: number;
  public y: number;
  private bulletImg: HTMLImageElement;
  constructor(_bulletImg: HTMLImageElement, _x: number, _y: number) {
    this.x = _x;
    this.y = _y;
    this.bulletImg = _bulletImg;
  }
  private moveBullet() {
    this.x = this.x - 5 * 0.1;
  }
  /**
   * 총알을 캔버스에 그리고 움직이는 함수
   */
  drawBullet(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.bulletImg, this.x, this.y);
    this.moveBullet();
  }
  /**
   *유효한 총알인지 검사하는 함수
   */
  isValid() {
    if (this.x <= 0 || this.y <= 0) {
      return false;
    }
    return true;
  }
}
