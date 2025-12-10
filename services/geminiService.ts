import { GoogleGenAI } from "@google/genai";
import { FullStudentData } from "../types";

export const generateStudentSummary = async (data: FullStudentData): Promise<string> => {
  // Defensive check for process.env to prevent runtime crashes in strict browser environments
  const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : null;

  if (!apiKey) {
    console.warn("Gemini API Key is missing in process.env");
    return "API Key is missing. Unable to generate summary.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    const prompt = `
      You are an expert academic counselor. Analyze the following student data JSON and write a professional, encouraging, yet honest performance summary for the student's parents.
      
      Highlights:
      - Identify top performing subjects.
      - Identify areas for improvement (if any).
      - Comment on attendance and extra-curriculars.
      - Keep it under 200 words.
      - Use a supportive tone.
      - Format with Markdown (bullet points, bold text).

      Student Data:
      ${JSON.stringify(data)}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No summary generated.";
  } catch (error) {
    console.error("Error generating summary:", error);
    return "An error occurred while generating the summary. Please try again later.";
  }
};