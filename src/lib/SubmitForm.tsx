import { supabase } from "./supabase/supabaseClient.js";

// Function to submit data to Supabase
export async function submitToSupabase(
  motherName: string,
  fatherName: string,
  kidName: string
) {
  try {
    const { data, error } = await supabase
      .from("NameAnalysis")
      .insert([{ motherName, fatherName, kidName }]);

    if (error) throw error;
    console.log("Data submitted:", data);
    // You can add more logic here to handle successful submission
  } catch (error) {
    console.error("Error submitting data:", error);
    // Handle the error here
  }
}
