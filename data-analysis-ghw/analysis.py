import pandas as pd
from wordcloud import WordCloud
import matplotlib.pyplot as plt

hackForTheFutureDF = pd.read_csv("./hack-for-the-future.csv")
aiHacksDF = pd.read_csv("./ai-hacks.csv")

merged_DF = pd.concat([hackForTheFutureDF, aiHacksDF])

print(hackForTheFutureDF)
print(hackForTheFutureDF.head())
print(hackForTheFutureDF.tail())

print(hackForTheFutureDF.columns)
print(hackForTheFutureDF.info())
print(hackForTheFutureDF["Built_With"].count())

print(hackForTheFutureDF.Built_With.values)

builtWithCol = hackForTheFutureDF.Built_With.values
print("builtWithCol-Before: ", builtWithCol)

merged_DF = merged_DF.set_index(
  "Project_Name",
  append=True)["Built_With"].str.split("\n").explode().to_frame()

builtWithCol = merged_DF.Built_With.values
print("builtWithCol-After: ", builtWithCol)

myWordCloud = WordCloud(width=800, height=800).generate(str(builtWithCol))
plt.imshow(myWordCloud, interpolation="bilinear")
plt.axis("off")
plt.show()

pd.set_option("display.max_rows", None)

frequencyOfTags = merged_DF.Built_With.value_counts()
print(frequencyOfTags)
