import json
import sys
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

def closeline(line):
    x_arg, y_arg = line.get_data()
    x_arg = np.concatenate((x_arg, [x_arg[0]]))
    y_arg = np.concatenate((y_arg, [y_arg[0]]))
    line.set_data(x_arg, y_arg)

def get_big_5_values(data):

    openness = data['tree']['children'][0]['children'][0]['children'][0]['percentage']
    conscientiousness = data['tree']['children'][0]['children'][0]['children'][1]['percentage']
    extraversion = data['tree']['children'][0]['children'][0]['children'][2]['percentage']
    agreeableness = data['tree']['children'][0]['children'][0]['children'][3]['percentage']
    emotional_range = data['tree']['children'][0]['children'][0]['children'][4]['percentage']

    percentage_list = [openness, conscientiousness, extraversion, agreeableness, emotional_range]
    percentage_labels = ["openness",
                         "conscientiousness",
                         "extraversion",
                         "agreeableness",
                         "emotional_range"]

    percentage_dict = dict(zip(percentage_labels, percentage_list))

    return percentage_dict


def main():

    OUTPUT_FOLDER = "output"

    current_file = sys.argv[1]
    file_name = current_file.split('\\')[-1].split('.')[0]

    print("Loading file...")
    with open(current_file) as json_file:
        data = json.load(json_file)

    print("Getting Big 5 Values from file...")
    percentage_dict = get_big_5_values(data)

    print("Saving Big 5 Values to CSV file...")
    big_5_df = pd.DataFrame.from_dict(percentage_dict, orient='index')
    big_5_df.to_csv(f'{OUTPUT_FOLDER}/{file_name}.csv')

    print("Starting to plot image...")
    fig = plt.figure()
    axis = fig.add_subplot(111, projection="polar")

    theta = np.arange(len(big_5_df))/float(len(big_5_df))*2.*np.pi

    line1, = axis.plot(theta, big_5_df[0], color="C8", marker="o", label="Openness")
    line2, = axis.plot(theta, big_5_df[0], color="C0", marker="o", label="Conscientiousness")
    line3, = axis.plot(theta, big_5_df[0], color="C0", marker="o", label="Extraversion")
    line4, = axis.plot(theta, big_5_df[0], color="C1", marker="o", label="Agreeableness")
    line5, = axis.plot(theta, big_5_df[0], color="C0", marker="o", label="Emotional Range")

    map(closeline, [line1, line2, line3, line4, line5])

    axis.set_xticks(theta)
    axis.set_xticklabels(big_5_df.index)
    axis.set_rlabel_position(0)
    axis.fill(theta, big_5_df[0], 'b', alpha=0.3)

    plt.title("Big 5 Personality Star Chart")

    print("Saving image file...")
    plt.savefig(f'{OUTPUT_FOLDER}/{file_name}.png')

    print("Finished!")

if __name__ == '__main__':
    main()
