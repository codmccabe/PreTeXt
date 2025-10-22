var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "[preface]",
  "number": "",
  "title": "[preface]",
  "body": " Welcome to Pre-Calculus I. This text covers fundamental concepts necessary for calculus.  "
},
{
  "id": "sec-section11",
  "level": "1",
  "url": "sec-section11.html",
  "type": "[section]",
  "number": "1.1",
  "title": "Linear Equations",
  "body": " Linear Equations  Your content here...  You can use math:  "
},
{
  "id": "solutions",
  "level": "1",
  "url": "solutions.html",
  "type": "[appendix]",
  "number": "A",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "references",
  "level": "1",
  "url": "references.html",
  "type": "[references]",
  "number": "",
  "title": "References",
  "body": " References     "
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
