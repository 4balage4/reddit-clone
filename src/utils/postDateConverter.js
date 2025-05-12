

   const getPostDate = (created) => {
    const date = Date.now() / 1000
    let ago = date - created

    const minutes = Math.floor(ago / 60)
    const hours = Math.floor(minutes/60)
    const days = Math.floor(hours/24)
    const months = Math.floor(days/30)
    const years = Math.floor(months/12)

    if (minutes < 60 && minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    if (hours < 24 && hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    if (days < 30 && days > 0) return  `${days} day${days > 1 ? 's' : ''} ago`
    if (months < 12 && months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`
 }



export {getPostDate}
