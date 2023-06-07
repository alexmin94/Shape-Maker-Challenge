class SVG{
    constructor(){
        this.textEl=""
        this.shapeEl=""
    }
    render(){
        return`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">${this.shapeEl}${this.textEl}</svg>
      `
    }
    setText(text,color){
        if(text.length>3){
            throw new Error("text must be less than 3 characters")
        }
        this.textEl=`<text x="200" y="120" font-size="24" fill="${color}" text-anchor="middle">${text}</text>`
    }
    setShape(shape){
        this.shapeEl=shape.render()
    }
}
module.exports=SVG
  
