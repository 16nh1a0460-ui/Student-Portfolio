import { GoogleGenAI } from "@google/genai";
import { FullStudentData } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateStudentSummary = async (data: FullStudentData): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Unable to generate summary.";
  }

  try {
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