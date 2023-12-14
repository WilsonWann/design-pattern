// Element interface
class ContentElement {
  accept(visitor) { }
}

// Concrete Elements
class Article extends ContentElement {
  constructor(title) {
    super()
    this.title = title;
  }
  accept(visitor) {
    visitor.visitArticle(this)
  }
}

class Image extends ContentElement {
  constructor(caption) {
    super()
    this.caption = caption;
  }
  accept(visitor) {
    visitor.visitImage(this)
  }
}

class Video extends ContentElement {
  constructor(title) {
    super()
    this.title = title;
  }
  accept(visitor) {
    visitor.visitVideo(this)
  }
}

// Visitor interface
class Visitor {
  visitArticle(article) { }
  visitImage(image) { }
  visitVideo(video) { }
}

// Concrete Visitors
class RendererVisitor extends Visitor {
  visitArticle(article) {
    console.log(`Rendering article: ${article.title}`)
  }

  visitImage(image) {
    console.log(`Rendering image: ${image.caption}`)
  }

  visitVideo(video) {
    console.log(`Rendering video: ${video.title}`)
  }
}

class ExportVisitor extends Visitor {
  visitArticle(article) {
    console.log(`Exporting article: ${article.title}`)
  }

  visitImage(image) {
    console.log(`Exporting image: ${image.caption}`)
  }

  visitVideo(video) {
    console.log(`Exporting video: ${video.title}`)
  }
}

// Usage
const elements = [new Article('Article 1'), new Image('Image 1'), new Video('Video 1')]
const renderer = new RendererVisitor();
const exporter = new ExportVisitor();

elements.forEach((element) => {
  element.accept(renderer);
  element.accept(exporter);
});