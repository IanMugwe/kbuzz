import type {StructureResolver} from 'sanity/structure'

// Articles first (all, then by category), then the reference lists editors rarely touch.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Newsroom')
    .items([
      S.documentTypeListItem('article').title('All articles'),
      S.listItem()
        .title('Articles by category')
        .child(
          S.documentTypeList('category')
            .title('Categories')
            .child((categoryId) =>
              S.documentList()
                .title('Articles')
                .filter('_type == "article" && category._ref == $categoryId')
                .params({categoryId})
                .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
            ),
        ),
      S.divider(),
      S.documentTypeListItem('author').title('Authors'),
      S.documentTypeListItem('category').title('Categories'),
    ])
