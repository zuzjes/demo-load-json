import source_json from "./pages.json"

let json = {}

source_json.map((el)=>{
    json[el.slug] = el
})

export default json;