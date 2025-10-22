var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-section11",
  "level": "1",
  "url": "sec-section11.html",
  "type": "[section]",
  "number": "1.1",
  "title": "Linear Equations",
  "body": " Linear Equations   Solving Linear Equations  A linear equation is an equation where the variable appears only to the first power. The general form of a linear equation is , where and are constants and .    Solve the equation:    We solve this step by step:  Subtract 3 from both sides:  Divide both sides by 2:  Therefore, the solution is .     "
},
{
  "id": "ex-linear1",
  "level": "2",
  "url": "sec-section11.html#ex-linear1",
  "type": "[example]",
  "number": "1.1.1",
  "title": "",
  "body": "  Solve the equation:    We solve this step by step:  Subtract 3 from both sides:  Divide both sides by 2:  Therefore, the solution is .   "
},
{
  "id": "math1431-3-1",
  "level": "1",
  "url": "math1431-3-1.html",
  "type": "[appendix]",
  "number": "A",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "math1431-3-2",
  "level": "1",
  "url": "math1431-3-2.html",
  "type": "[references]",
  "number": "",
  "title": "References",
  "body": " References  PreCalculus by Michael McCabe  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
