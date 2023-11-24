from PIL import Image, ImageOps
import numpy as np
from keras.models import load_model

def classify_pneumonia(image_path):
    model = load_model("keras_model.h5", compile=False)
    class_names = ["0", "1"]

    img = Image.open(image_path)
    
    # Check if the image is in RGB format
    if img.mode != "L":
        return "Please upload the X-ray file only", None

    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    img = img.convert('RGB')  # Convert to RGB mode to ensure 3 channels
    size = (224, 224)
    image = ImageOps.fit(img, size, Image.Resampling.LANCZOS)

    # Turn the image into a numpy array
    image_array = np.asarray(image)

    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1

    # Load the image into the array
    data[0] = normalized_image_array

    # Predict the model
    confidence_score = model.predict(data)
    predicted_class = np.argmax(confidence_score)

    if predicted_class == 1:
        return 1
    else:
        return 0


