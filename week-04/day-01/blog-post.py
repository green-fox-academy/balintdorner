"""
Create a BlogPost class that has
an authorName
a title
a text
a publicationDate
Create a few blog post objects:
"Lorem Ipsum" titled by John Doe posted at "2000.05.04."
Lorem ipsum dolor sit amet.
"Wait but why" titled by Tim Urban posted at "2010.10.10."
A popular long-form, stick-figure-illustrated blog about almost everything.
"One Engineer Is Trying to Get IBM to Reckon With Trump" titled by William Turton at "2017.03.28."
Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.
"""

class BlogPost():
    author_name = ''
    title = ''
    text = ''
    publication_date = ''

blog_post1 = BlogPost()
blog_post1.author_name = 'John Doe'
blog_post1.title = 'Lorem Ipsum'
blog_post1.text = 'Lorem ipsum dolor sit amet.'
blog_post1.publication_date = '2000.05.04.'

print(blog_post1.author_name + ' ' + blog_post1.title + ' ' + blog_post1.text + ' ' + blog_post1.publication_date)

blog_post2 = BlogPost()
blog_post2.author_name = 'Tim Urban'
blog_post2.title = 'Wait but why'
blog_post2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.'
blog_post2.publication_date = '2010.10.10.'

print(blog_post2.author_name + ' ' + blog_post2.title + ' ' + blog_post2.text + ' ' + blog_post2.publication_date)

blog_post3 = BlogPost()
blog_post3.author_name = 'William Turton'
blog_post3.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump'
blog_post3.text = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.'
blog_post3.publication_date = '2017.03.28.'

print(blog_post3.author_name + ' ' + blog_post3.title + ' ' + blog_post3.text + ' ' + blog_post3.publication_date)
