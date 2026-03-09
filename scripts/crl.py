import os

def rename_by_subfolder(carpeta_raiz):
    for subcarpeta, _, archivos in os.walk(carpeta_raiz):
        contador = 0  # Reinicia el contador para cada subcarpeta
        for archivo in archivos:
            ruta_actual = os.path.join(subcarpeta, archivo)
            extension = os.path.splitext(archivo)[1]
            nuevo_nombre = f"{contador}{extension}"
            nueva_ruta = os.path.join(subcarpeta, nuevo_nombre)

            while os.path.exists(nueva_ruta):
                contador += 1
                nuevo_nombre = f"{contador}{extension}"
                nueva_ruta = os.path.join(subcarpeta, nuevo_nombre)

            os.rename(ruta_actual, nueva_ruta)
            print(f"Renombrado en '{subcarpeta}': {archivo} -> {nuevo_nombre}")
            contador += 1

# ------------------------------

if __name__ == "__main__":
    carpeta = input("Ingresa la ruta de la carpeta principal: ")
    rename_by_subfolder(carpeta)
