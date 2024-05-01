import boto3

def get_s3_image_links(bucket_name):
    # Inicializa el cliente de S3
    s3 = boto3.client('s3')

    # Obtiene la lista de objetos en el bucket
    response = s3.list_objects_v2(Bucket=bucket_name)

    # Lista para almacenar los enlaces de las imágenes
    image_links = []

    # Verifica si la respuesta tiene la clave 'Contents'
    if 'Contents' in response:
        # Recorre la lista de objetos y construye los enlaces
        for obj in response['Contents']:
            image_link = f"https://{bucket_name}.s3.amazonaws.com/{obj['Key']}"
            image_links.append(image_link)

    return image_links  

# Nombre del bucket de S3
bucket_name = 'spotit-images'

# Obtiene los enlaces de las imágenes
image_links = get_s3_image_links(bucket_name)

# Imprime los enlaces
for link in image_links:
    print(link)
