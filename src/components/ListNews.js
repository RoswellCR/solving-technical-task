import News from "./News";

export default function ListNews(){
    
    
    return(
        <div>
            <div><h1>Hacker News</h1></div>
            <div>
                <button>All</button>
                <button>My Faves</button>
            </div>
            <div>
                <select >
                    <option value="" disabled selected hidden>Select your news</option>
                    <option>Angular</option>
                    <option>Reacts</option>
                    <option>Vuejs</option>
                </select>
            </div>
            <div>
                Lista de <News />
            </div>
            <div>1 2 3 4 ...</div>
        </div>
    )
}