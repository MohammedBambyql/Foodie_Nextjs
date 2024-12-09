import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { GetMeals } from "@/lib/meals";
import { Suspense } from "react";

export default function MealsPage() {
  async function Meals() {
    const meals = await GetMeals();
    return <MealsGrid meals={meals} />;
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span>by you</span>
        </h1>
        <p className={classes.highlight}>
          Choose your favorite recipe and cook it yourself, It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
