import React, { useState } from "react";
import Movie from "./Movie";
import ReviewForm from './ReviewForm'

// NOTE: Fixed heights for grid containers prevents grid containers to expand with the needs of the child elements. Changed height to => h-auto

export default function MovieList() {
  const movieData = [
    {
      id: 1,
      title: "Howl's Moving Castle",
      img: "src/assets/posters/howlsCastle.jpg",
      synopsis: "Sophie, a young hatter, is cursed by a witch and turned into an old woman. Seeking a way to reverse the spell, she takes refuge in a magical, wandering castle owned by the mysterious and capricious wizard, Howl. As war rages in the background, the two form an unlikely bond, revealing secrets and discovering self-worth.",
      reviews: [],
    },
    {
      id: 2,
      title: "A Man Named Otto",
      img: "src/assets/posters/otto.jpg",
      synopsis: "Otto Anderson is a grump who no longer sees purpose in his life following the loss of his wife. Otto is ready to end it all, but his plans are interrupted when a lively young family moves in next door, and he meets his match in quick-witted Marisol. She challenges him to see life differently, leading to an unlikely friendship that turns his world around. A heartwarming and funny story about love, loss, and life, A Man Called Otto shows that family can sometimes be found in the most unexpected places.",
      reviews: [],
    },
    {
      id: 3,
      title: "Parasite",
      img: "src/assets/posters/parasite.jpg",
      synopsis: "The destitute Kim family cunningly manipulates their way into the lives of the wealthy Park family, one by one posing as unrelated, skilled workers. As they relish in the comforts of the Park's lavish home, a series of unexpected events and discoveries spiral the situation out of control, leading to a tense and tragic confrontation.",
      reviews: [],
    },
    {
      id: 4,
      title: "Primal",
      img: "src/assets/posters/primal-mp.jpg",
      synopsis: "In a brutal, prehistoric world, a caveman and a dinosaur form an unlikely bond after suffering personal tragedies. Together, they navigate the savage wilderness, confronting other terrifying creatures and the harsh elements. This silent series portrays their raw, emotional journey of survival, friendship, and redemption.",
      reviews: [],
    },
    {
      id: 5,
      title: "Step Brothers",
      img: "src/assets/posters/step-brothers-mp.jpg",
      synopsis: "Brennan and Dale, two immature and jobless middle-aged men, are forced to live together when their single parents marry. Their initial rivalry and ridiculous antics lead to destructive behavior, testing the patience of their exasperated family. However, over time, they find common ground and forge a genuine bond, learning the values of family and responsibility.",
      reviews: [],
    },
    {
      id: 6,
      title: "The Big Short",
      img: "src/assets/posters/bigShort.jpg",
      synopsis: "Amidst the booming U.S. housing market of the early 2000s, a few financial outsiders identify the bubble and the impending collapse. Betting against the market, they face skepticism, mockery, and ethical dilemmas as they anticipate the financial crisis. The film delves into the flawed system, illuminating the greed, corruption, and ignorance that led to one of the biggest financial meltdowns in history.",
      reviews: [],
    },

  ];
  const [movies, setMovies] = useState(movieData);


  return (
    <div className="w-auto h-auto grid grid-cols-2 grid-rows-3 gap-x-12 gap-y-8 mx-24 mb-24 hover:cursor-cam">
        {movies.map((movie,index) => (       
            <div>
                <Movie key={index} movieInfo = {movie}/>
                <ReviewForm reviews={movie.synopsis}/>
            </div> 
        ))}
{/* 
        {Movie(  {
            movieInfo: movie,
            coolFact: "basnanas are cool", 
            year: "1999"
        }        )}
*/}

      {/* <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/> */}
    </div>
  );
}