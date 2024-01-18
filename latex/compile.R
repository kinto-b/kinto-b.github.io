
# Parsers ----------------------------------------------------------------------

latex_parabreak <- function(x) {
  double_slash <- "\\\\\\\\"
  double_newline <- "\n\n"

  gsub(
    paste0(double_newline, "(\\w)"),
    paste0(double_slash, double_newline, "\\1"),
    x
  )
}

latex_itemize <- function(items) {
  paste(
    "\\begin{itemize}",
    paste(items, collapse = "\n"),
    "\\end{itemize}",
    sep = "\n"
  )
}

latex_honours <- function(honours) {
  latex_itemize(purrr::map_chr(honours, function(h) {
    sprintf("\\item %s, %s, %s", h$year, h$title, h$org)
  }))
}

latex_skills <- function(skills) {
  latex_itemize(purrr::map_chr(skills, function(s) {
    sprintf("\\item %s", s)
  }))
}

latex_software <- function(software) {
  latex_itemize(purrr::map_chr(software, function(s) {
    sprintf("\\item %s: %s", s$title, s$desc)
  }))
}

latex_profile <- function(profile) {
  latex_parabreak(markdown::mark_latex(profile, template=FALSE))
}

latex_position <- function(position, topsep = TRUE) {
  if (topsep) {
    topsep <- "\\\\[3pt]"
  } else {
    topsep <- ""
  }

  paste(
    sprintf("{\\bf %s} \\\\", position$yaml$title),
    sprintf(
      "\\textcolor{gray}{%s | %s} %s",
      position$yaml$org, position$yaml$tenure, topsep
    ),
    "\\begin{small}",
    latex_parabreak(markdown::mark_latex(position$body, template=FALSE)),
    "\\end{small}",
    sep = "\n"
  )
}

# Main -------------------------------------------------------------------------

compile_resume <- function(file, profile, employment, education, honours) {
  template <- readLines(file)

  # Locate placeholders
  profile_idx    <- which(grepl("%$PROFILE$", template, fixed = TRUE))
  employment_idx <- which(grepl("%$EMPLOYMENT$", template, fixed = TRUE))
  education_idx  <- which(grepl("%$EDUCATION$", template, fixed = TRUE))
  honours_idx    <- which(grepl("%$HONOURS$", template, fixed = TRUE))

  # Replace placeholders
  vspace <- "\n\\vspace{0.5cm}\n"
  template[profile_idx] <- profile
  template[employment_idx] <- paste(employment, collapse = vspace)
  template[education_idx] <- paste(education, collapse = vspace)
  template[honours_idx] <- honours

  template
}

# Parse profile
raw_profile <- readLines("./src/data/resume/profile.md") |> xfun::yaml_body()
honours <- latex_honours(raw_profile$yaml$honours)
profile <- latex_profile(raw_profile$body)

# Parse education/employment
parse_positions <- function(dir, ...) {
  lines <- lapply(FUN = readLines, list.files(dir, "\\.md$", full.names = TRUE))
  positions <- lines |> lapply(xfun::yaml_body)

  # Need to sort by stamp
  ord <- order(sapply(positions, \(x) x$yaml$stamp), decreasing=TRUE)

  purrr::map_chr(positions, latex_position, ...)[ord]
}

employment <- parse_positions("./src/data/resume/employment")
education <- parse_positions("./src/data/resume/education", topsep=FALSE)

# Compile document
resume <- compile_resume(
  "./latex/resume_template.tex",
  profile,
  employment,
  education,
  honours
)

fp <- "./latex/resume.tex"
if (file.exists(fp)) file.remove(fp)
writeLines(resume, fp)

system("pdflatex -output-directory=./static/assets/pdf ./latex/resume.tex")
