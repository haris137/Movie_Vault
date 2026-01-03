import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY_Gemni;
console.log("Gemini API Key present:", !!API_KEY, "Value:", API_KEY ? API_KEY.substring(0, 6) + "..." : "undefined");
// const ai = new GoogleGenerativeAI({ apiKey: API_KEY });

export default async function Main(movieName) {

// 1. Initialize with your Key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const prompt = `
    Act as a witty, minimalist movie critic. 
    I will provide a movie name. Your job is to generate a response strictly following this structure:

    - Summary: A two-sentence hook using emojis. Sentence one introduces the lead/setting; sentence two sets up the conflict with a humorous twist. Bold the key words using plain CAPS instead of asterisks.
    - Rating: Provide the age rating and a funny 3-word description with an emoji.
    - Keywords: Four punchy terms with related emojis.
    - Watch this if you liked: List two similar movies.
    - Closing: A one-sentence call to action with a wink.
    - Start each section in new line.
    

    MOVIE NAME: ${movieName}
  `;

  try {
    const result = await model.generateContent(prompt);
    let output = await result.response.text();
    return output;
  } catch (error) {
    console.error("API Error:", error.message);
  }
}




// import { GoogleGenerativeAI } from "@google/generative-ai";


// const API_KEY = import.meta.env.VITE_API_KEY_Gemni;
// console.log("Gemini API Key present:", !!API_KEY, "Value:", API_KEY ? API_KEY.substring(0, 6) + "..." : "undefined");
// const ai = new GoogleGenerativeAI({ apiKey: API_KEY });

// export default async function Main(movieName) {

//   const modelName = "gemini-2.0-flash";
//   const model = ai.getGenerativeModel({ model: modelName });
//   console.log("Using Gemini model:", modelName);

//   const prompt = `When I provide a movie name, first verify if it exists. If not, reply 'There is no such movie of this name.' If real, give: a 3-line plot with cinephile emojis like 🎥🎭, its IMDb or Rotten Tomatoes rating, 2 similar movies, and a quick verdict like 'Must-watch!' or 'Skip it.' Never use asterisks (*) or invent facts and don't use quotations. Movie name: ${movieName}`;
//   console.log("Prompt sent to Gemini:", prompt);

//   try {
//     const result = await model.generateContent(prompt);
//     console.log("Gemini raw result:", result);
//     const text = result.response.candidates[0].content.parts[0].text;
//     return text;
//   } catch (error) {
//     console.error("Error generating content:", error);
//     if (error && error.response) {
//       console.error("Gemini error response:", error.response);
//     }
//     return "Something went wrong. Try again later.";
//   }
// }
