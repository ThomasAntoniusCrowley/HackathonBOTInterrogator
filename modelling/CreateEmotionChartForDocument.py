import json
import sys
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

def get_emotion_dict(data):
    emotion_dict = data['emotion']['document']['emotion']
    return emotion_dict


def main():

    OUTPUT_FOLDER = "output"

    current_file = sys.argv[1]
    file_name = current_file.split('\\')[-1].split('.')[0]

    with open(current_file) as json_file:
        data = json.load(json_file)

    emotion_dict = get_emotion_dict(data)
    emotion_df = pd.DataFrame.from_dict(emotion_dict, orient='index')

    fig = emotion_df.plot.barh(legend=False, figsize=(10,5), title="Emotion Analysis")

    plt.savefig(f'{OUTPUT_FOLDER}/emotion_{file_name}.png')

if __name__ == '__main__':
    main()
