import pandas as pd
from wordcloud import WordCloud
import matplotlib.pyplot as plt

# import dataset and convert to dataframe
hackForTheFutureDF = pd.read_csv("./hack-for-the-future.csv")

# print the dataframe
print(hackForTheFutureDF)
# print the first 5 rows of the dataframe
print(hackForTheFutureDF.head())
#print the last 5 rows of the dataframe
print(hackForTheFutureDF.tail())

# print all the column names of the dataframe
print(hackForTheFutureDF.columns)
# print info about the dataframe
print(hackForTheFutureDF.info())
# print the number of rows in the Built_With column
print(hackForTheFutureDF["Built_With"].count())
# print the values of the Built_With column
print(hackForTheFutureDF.Built_With.values)

# import more datasets and convert to dataframes
aiHacksDF = pd.read_csv("./ai-hacks.csv")
hackCcelerateDF = pd.read_csv("./ai-hacks.csv")
supportAThonDF = pd.read_csv("./ai-hacks.csv")

# merge dataframes
merged_DF = pd.concat([hackForTheFutureDF, aiHacksDF, hackCcelerateDF, supportAThonDF])

# print Built_With column before removing \n
builtWithCol = hackForTheFutureDF.Built_With.values
print("builtWithCol-Before: ", builtWithCol)

# remove \n from Built_With column
merged_DF = merged_DF.set_index("Project_Name", append=True)["Built_With"].str.split("\n").explode().to_frame()

# print Built_With column after removing \n
builtWithCol = merged_DF.Built_With.values
print("builtWithCol-After: ", builtWithCol)

# group similar values together
merged_DF["Built_With"] = merged_DF["Built_With"].replace(["html5","htm","css3"],["html", "html","css"])

# generate a wordcloud of the Built_With column
builtWithCol = merged_DF["Built_With"].str.cat(sep=' ')
myWordCloud = WordCloud(width=800,height=800).generate(str(builtWithCol))
plt.imshow(myWordCloud, interpolation="bilinear")
plt.axis("off")

# set pandas to show all rows
pd.set_option("display.max_rows", None)

# print count of unique values in Built_With column
frequencyOfTags = merged_DF.Built_With.value_counts()
print(frequencyOfTags)

# show the wordcloud generated earlier
# this line is executed last so that the above lines are not blocked
plt.show()