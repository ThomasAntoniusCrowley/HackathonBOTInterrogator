import json
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

data_path = "E:\\User Files\\Downloads\\cloe (1).json"

with open(data_path) as file:
    data = json.load(file)

openness =  data['tree']['children'][0]['children'][0]['children'][0]['percentage']
conscientiousness =  data['tree']['children'][0]['children'][0]['children'][1]['percentage']
extraversion =  data['tree']['children'][0]['children'][0]['children'][2]['percentage']
agreeableness =  data['tree']['children'][0]['children'][0]['children'][3]['percentage']
emotional_range =  data['tree']['children'][0]['children'][0]['children'][4]['percentage']

percentage_list = [openness, conscientiousness, extraversion, agreeableness, emotional_range]
percentage_labels = ["openness",
                     "conscientiousness",
                     "extraversion",
                     "agreeableness",
                     "emotional_range"]

percentage_dict = dict(zip(percentage_labels, percentage_list))

big_5_df = pd.DataFrame.from_dict(percentage_dict, orient='index')
big_5_df.to_csv('E:\\User Files\\Downloads\\example.csv')

fig = plt.figure()
ax = fig.add_subplot(111, projection="polar")

theta = np.arange(len(big_5_df))/float(len(big_5_df))*2.*np.pi
print(theta)
l1, = ax.plot(theta, big_5_df[0], color="C8", marker="o", label="Openness")
l2, = ax.plot(theta, big_5_df[0], color="C0", marker="o", label="Conscientiousness")
l3, = ax.plot(theta, big_5_df[0], color="C0", marker="o", label="Extraversion")
l4, = ax.plot(theta, big_5_df[0], color="C1", marker="o", label="Agreeableness")
l5, = ax.plot(theta, big_5_df[0], color="C0", marker="o", label="Emotional Range")

def _closeline(line):
    x, y = line.get_data()
    x = np.concatenate((x, [x[0]]))
    y = np.concatenate((y, [y[0]]))
    line.set_data(x, y)
[_closeline(l) for l in [l1,l2,l3,l4,l5]]

ax.set_xticks(theta)
ax.set_xticklabels(big_5_df.index)
ax.set_rlabel_position(0)
ax.fill(theta, big_5_df[0], 'b', alpha=0.3)

plt.title("Big 5 Personality Star Chart")

plt.savefig('E:\\User Files\\Downloads\\example.png')
