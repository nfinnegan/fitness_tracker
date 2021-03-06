# Fitness Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub language count](https://img.shields.io/github/languages/count/nfinnegan/fitness_tracker)
![GitHub top language](https://img.shields.io/github/languages/top/nfinnegan/fitness_tracker)

## Description

For this application I built out the API routes so the provided front end could connect with our Mongo Database. I created the schema in order to seed the database so that I could get everything working locally before it was deployed to Heroku with MongoDB Atlas. I also did some reconfiguration to the frontend code so that the stats page displayed all workouts completed on one day in aggregate.

## User Story

- As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Acceptance Criteria

When the user loads the page, they should be given the option to create a new workout or continue with their last workout.

The user should be able to:

- Add exercises to the most recent workout plan.

- Add new exercises to a new workout plan.

- View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

- View the total duration of each workout from the past seven workouts on the `stats` page.

## Technologies Used

- Express.js
- Mongoose
- MongoDB & Atlas
- Node.js

## Preview

![Fitness_Tracker_Preview](assets/fitnesstracker.gif)

## Deployed Application

- https://exerciselogging.herokuapp.com/

## License

Copyright (c) Natalie Finnegan All rights reserved.<br>

<details><summary>Licensed under the MIT License</summary>

Copyright (c) 2021 - present | Natalie Finnegan

<blockquote>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</blockquote>
</details>
