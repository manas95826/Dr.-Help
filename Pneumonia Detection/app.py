from keras.models import load_model
from PIL import Image, ImageOps
import numpy as np
import os
import streamlit as st
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage

model = load_model("keras_model.h5", compile=False)

class_names = ["0", "1"]  # Make sure the class names match the order in your model

def classify_image(img):
    # Check if the image is in RGB format
    if img.mode != "L":
        return "Invalid"

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

    return predicted_class

def send_email(image_path):
    sender_email = "manaslucifercr7@gmail.com"  # Your Gmail email address
    receiver_email = "manaschopra95826@gmail.com"  # Receiver's email address
    password = "cmchcqralxiakgqp"  # Your Gmail password

    subject = "Pneumonia Detected!"
    body = "The X-ray image has been classified, and pneumonia has been detected."

    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = receiver_email
    message["Subject"] = subject

    message.attach(MIMEText(body, "plain"))

    # Attach the classified image
    attachment = open(image_path, "rb")
    image_mime = MIMEImage(attachment.read())
    attachment.close()
    message.attach(image_mime)

    # Send the email
    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message.as_string())

def main():
    st.title("Image Classification")
    st.header("Pneumonia X-Ray Classification")
    st.text("Upload a Pneumonia X-Ray for classification")

    folder = st.text_input("Enter folder path containing images:", type="default")
    
    if folder and os.path.exists(folder):
        image_files = [f for f in os.listdir(folder) if f.lower().endswith(('.jpg', '.jpeg'))]
        
        for image_file in image_files:
            image_path = os.path.join(folder, image_file)
            img = Image.open(image_path)
            predicted_class = classify_image(img)
            
            # Display person's name in big text
            st.markdown(f"## Name of Person: {os.path.splitext(image_file)[0]}")

            # Display prediction in large text
            if predicted_class == 1:
                send_email(image_path)
                st.success("# Pneumonia found! Email has been sent.")
            else:
                st.error("# No Pneumonia Found.")
            
            st.image(img, caption=f"Classified as: {class_names[predicted_class]}", use_column_width=True)
    else:
        st.warning("Please provide a valid folder path")

if __name__ == "__main__":
    main()
