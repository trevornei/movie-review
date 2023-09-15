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
      reviews: [
        {
          id: 1, 
          name: "Layla Mohamed",
          opinion: "A visual masterpiece, 'Howl's Moving Castle' is a poignant tale that interweaves love, war, and self-discovery. Studio Ghibli's enchanting animation and characters come to life, drawing viewers into a whimsical world that resonates deeply with the young and old alike. It’s a testament to the unparalleled storytelling prowess of Hayao Miyazaki."
        }
      ],
    },
    {
      id: 2,
      title: "A Man Named Otto",
      img: "src/assets/posters/otto.jpg",
      synopsis: "Otto Anderson is a grump who no longer sees purpose in his life following the loss of his wife. Otto is ready to end it all, but his plans are interrupted when a lively young family moves in next door, and he meets his match in quick-witted Marisol. She challenges him to see life differently, leading to an unlikely friendship that turns his world around. A heartwarming and funny story about love, loss, and life, A Man Called Otto shows that family can sometimes be found in the most unexpected places.",
      reviews: [
        {
          id: 1, 
          name: "David Kim",
          opinion: "While 'A Man Named Otto' promises an intriguing premise of mystery and discovery, it unfortunately falls flat in its execution. The pacing is inconsistent, and some plotlines seem underdeveloped or redundant. A potentially captivating narrative is marred by missed opportunities and predictable twists."
        }
      ],
    },
    {
      id: 3,
      title: "Parasite",
      img: "src/assets/posters/parasite.jpg",
      synopsis: "The destitute Kim family cunningly manipulates their way into the lives of the wealthy Park family, one by one posing as unrelated, skilled workers. As they relish in the comforts of the Park's lavish home, a series of unexpected events and discoveries spiral the situation out of control, leading to a tense and tragic confrontation.",
      reviews: [
        {
          id: 1, 
          name: "Michael Rodriguez",
          opinion: "Bong Joon-ho's 'Parasite' is a masterclass in genre-blending, effortlessly shifting from dark comedy to harrowing suspense. The film’s incisive critique of class disparities and its richly layered narrative are both thought-provoking and deeply unsettling. An absolute must-watch that pushes the boundaries of contemporary cinema."
        }
      ],
    },
    {
      id: 4,
      title: "Primal",
      img: "src/assets/posters/primal-mp.jpg",
      synopsis: "In a brutal, prehistoric world, a caveman and a dinosaur form an unlikely bond after suffering personal tragedies. Together, they navigate the savage wilderness, confronting other terrifying creatures and the harsh elements. This silent series portrays their raw, emotional journey of survival, friendship, and redemption.",
      reviews: [
        {
          id: 1,
          name: "Aisha Patel",
          opinion: "Though visually striking, 'Primal' feels like a missed opportunity to delve deeper into the dynamics of its main duo. Its reliance on episodic encounters occasionally makes the series feel redundant, lacking a cohesive overarching narrative. The raw emotion is palpable, but it often gets lost amidst the repetitive nature of the story."
        }
      ],
    },
    {
      id: 5,
      title: "Step Brothers",
      img: "src/assets/posters/step-brothers-mp.jpg",
      synopsis: "Brennan and Dale, two immature and jobless middle-aged men, are forced to live together when their single parents marry. Their initial rivalry and ridiculous antics lead to destructive behavior, testing the patience of their exasperated family. However, over time, they find common ground and forge a genuine bond, learning the values of family and responsibility.",
      reviews: [
        {
          id: 1,
          name: "Caleb Johnson",
          opinion: "A hilarious and uproarious dive into the absurdity of late-blooming adulthood, 'Step Brothers' is comedy gold. Ferrell and Reilly's on-screen chemistry is undeniable, delivering laugh-out-loud moments in even the most ludicrous of scenarios. It's a delightful blend of slapstick and heart."
        }
      ],
    },
    {
      id: 6,
      title: "The Big Short",
      img: "src/assets/posters/bigShort.jpg",
      synopsis: "Amidst the booming U.S. housing market of the early 2000s, a few financial outsiders identify the bubble and the impending collapse. Betting against the market, they face skepticism, mockery, and ethical dilemmas as they anticipate the financial crisis. The film delves into the flawed system, illuminating the greed, corruption, and ignorance that led to one of the biggest financial meltdowns in history.",
      reviews: [
        {
          id: 1,
          name: "Rosa Martinez",
          opinion: "While 'The Big Short' attempts to provide a biting commentary on the 2008 financial crisis, it often gets bogged down in its own self-importance. The convoluted narrative, mixed with sporadic comedic moments, feels disjointed, making it hard for the audience to truly engage. It's ambitious but struggles to find its footing amidst the cacophony of characters and subplots."
        }
      ],
    },

  ];
  const [movies, setMovies] = useState(movieData);


  return (
    <div className="w-auto h-auto grid grid-cols-2 grid-rows-3 gap-x-12 gap-y-8 mx-24 mb-24 hover:cursor-cam p-4">
        {movies.map((movie,index) => (       
            <div key={movie.id}>
                <Movie movieInfo = {movie}/>
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