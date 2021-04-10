import React from 'react';
import "./BlogCard.css"

const card_data = {
    id: 1,
    title: "Szomjas György: „Szabad embereket fényképezünk”",
    image: "https://m.blog.hu/fi/filmvilag/image/magyar/szomjas_gyorgy.jpg",
    summary: "80 éves korában elhunyt Szomjas György, Kossuth-díjas és Balázs Béla-díjas rendező, aki olyan meghatározó, stílusteremtő filmeket készített, mint a Talpuk alatt fütyül a szél, a Falfúró, a Roncsfilm, a Kopaszkutya vagy a Könnyű testi sértés. A Filmvilág folyóiratban megjelent interjúiból válogattunk. – Kezdettől fogva a populáris kultúrából építkeztem. Előbb dokumentumfilmeket forgattam a Balázs Béla Stúdióban, és lelkes résztvevője, illetve egyik kezdeményezője voltam annak a bizonyos szociológiai filmprogramnak, amely – sokféle ok miatt – idő előtt megtorpant. Személyes kulturális élményként a rock and rollból és a magyar folklórból táplálkoztam, s a korai betyárfilmjeimben valami hasonló modellt próbáltam követni, amilyet például Sebő Feriék műveltek a zenében. Ugyanakkor arra törekedtem, hogy ne valamiféle idealizált betyárvilágot álmodjak a vászonra, hanem a tényleges alapokhoz nyúltam vissza. Néprajzi anyagokat tanulmányoztam; a Rosszemberek – különben könyvben is megjelent – valóságos alaptörténetét például a kaposvári levéltárból bányásztam elő. Hasonló munka volt az, mint a népzenegyűjtőké.",
    slug: "szabad-embereket-fenykepezunk"
}


function BlogCard(props) {
    return (
        <div className="blog-card-container">
            <div className="card-header">
                <h1>{card_data.title}</h1>
            </div>


            <img src={card_data.image} alt=""/>
            <p>{card_data.summary}</p>

            <div className="card-footer">
                <a href="">Tovább...</a>
            </div>
        </div>
    );
}

export default BlogCard;