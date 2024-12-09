import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function GetMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function GetMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
}
