class PreloadImages {

  private srcs = [
    './assets/flipPhotos/head.JPG',
    './assets/flipPhotos/body.JPG',
    './assets/flipPhotos/1.JPG',
    './assets/flipPhotos/2.JPG',
    './assets/flipPhotos/3.JPG',
    './assets/flipPhotos/4.JPG',
    './assets/happy.jpeg',
  ];

  private images = Array();

  private preloadImages():void {
    for(let src of this.srcs) {
      this.preloadImage(src);
    }
  }
  private preloadImage(src: string):void {
    const img=new Image();
          img.src=src;

    this.images.push(img);
  }
  constructor() {
      this.preloadImages();
  }
  public getImages() {
    return this.images;
  }
}
export default PreloadImages;
