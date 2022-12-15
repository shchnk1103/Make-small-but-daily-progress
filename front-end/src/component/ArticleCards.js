export const ArticleCards = () => {
  const articleCard = () => {
    return (
      <div className="article-card">
        <h1 className="card-title">记录一下今天的美好</h1>
        <span className="card-author">DoubleShy0N</span>
        <span className="card-created_time">2022.12.15</span>
        <span className="card-content">Detail</span>
      </div>
    )
  }

  return (
    <div className="article-cards-page" id="articleCards">
      {articleCard()}
      {articleCard()}
      {articleCard()}
      {articleCard()}
      {articleCard()}
      {articleCard()}
    </div>
  )
}
