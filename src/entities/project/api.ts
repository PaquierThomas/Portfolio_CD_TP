import { type CollectionEntry, getCollection } from 'astro:content'
import type { Project } from '../../content/config'

export const listProjects = async () => {
  return (await getCollection('projects')).sort(
    (a, b) => a.data.date_parution.getTime() - b.data.date_parution.getTime(),
  )
}

// export const findProjectByDatePuration =
//   (date_parution: Project['date_parution']) =>
//   (projects: CollectionEntry<'projects'>[]) => {
//     return projects.find((project) => project.data.date_parution === date_parution)
//   }

// export const getPreviousProject =
//   (date_parution: CollectionEntry<'projects'>) =>
//   (projects: CollectionEntry<'projects'>[]) => {
//     return (
//       findProjectByPosition(project.data.date_parution - 1)(projects) ??
//       findProjectByPosition(projects.length)(projects)!
//     )
//   }

// export const getNextProject =
//   (project: CollectionEntry<'projects'>) =>
//   (projects: CollectionEntry<'projects'>[]) => {
//     return (
//       findProjectByPosition(project.data.position + 1)(projects) ??
//       findProjectByPosition(1)(projects)!
//     )
//   }
