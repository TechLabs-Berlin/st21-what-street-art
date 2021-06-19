library(rvest)

dataset <- read.csv("artworks.csv", header = TRUE, stringsAsFactors = FALSE)
imageLinks <- dataset$thumbnail

downloadImage <- function(links){
  download.file(links, 
                destfile = basename(paste0(dataset$id[i], ".jpg")), 
                mode = "wb")
}

setwd("./images/streetArtCitiesBerlin")

for (i in 1:length(imageLinks)){
  tryCatch(downloadImage(imageLinks[i]),
           error = function(e){
             print(paste0("The image with id ", dataset$id[i], " cannot be downloaded, skipping it!"))
           })
  print(paste0("Image ", i, " out of 608 processed"))
  Sys.sleep(2)
}

notDownloaded <- warnings()


