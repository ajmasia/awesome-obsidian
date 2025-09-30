Tags: #obsidian

Esta es una guía compacta de la sintaxis más usada de *markdown extendido* de Obsidian. Úsala como referencia rápida al escribir tus notas.

## 📄 Párrafos y saltos de línea

- Separa los párrafos con una **línea en blanco**:

  ```md
  Este es un párrafo.

  Este es otro párrafo.
  ```

- Para forzar un **salto de línea** dentro de un párrafo:
  - Añade **dos espacios** al final de la línea y pulsa Enter; o  
  - Usa `Shift + Enter`.

## 🏷️ Encabezados

Usa símbolos `#`:  
```md
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

Esto crea encabezados de distintos niveles. El panel de *Outline* en Obsidian los usa para generar la vista lateral.

## **Negrita**, *Cursiva*, ~~Tachado~~, ==Resaltado==

| Estilo            | Sintaxis                      | Ejemplo                 |
| ----------------- | ----------------------------- | ----------------------- |
| Negrita           | `**texto**` o `__texto__`     | **Texto en negrita**    |
| Cursiva           | `*texto*` o `_texto_`         | *Texto en cursiva*      |
| Negrita + Cursiva | `***texto***` o `___texto___` | ***Negrita + cursiva*** |
| Tachado           | `~~texto~~`                   | ~~Texto tachado~~       |
| Resaltado         | ==texto==                     | ==Texto resaltado==     |

Para escribir los caracteres literalmente sin aplicar formato, escápalos con una barra invertida: `\*texto\*`.

## 🔗 Enlaces e incrustaciones

- **Enlaces internos (wikilinks):** `[[Título de nota]]`  
- **Enlace interno (Obsidian URI):** `[Mi Nota](obsidian://open?vault=VaultName&file=Nota%20Ejemplo)`  
- **Enlaces externos:** `[Texto](https://ejemplo.com)`  
- **Imágenes / incrustaciones:** `![[imagen.png]]` o `![](https://url/imagen.png)`  
  Puedes definir tamaño:  
  ```md
  ![Texto alternativo|100x150](https://url/imagen.png)
  ```

## > Citas, callouts y comentarios

- Citar texto con `>`:

  ```md
  > Esto es una cita.
  ```

> Esto es una cita.

- Convertir en callout añadiendo `[!info]`, `[!warning]`, etc.:

  ```md
  > [!warning]
  > Esto es una advertencia importante.
  ```

> [!warning]
  > Esto es una advertencia importante.

- Comentarios invisibles en *Preview*: envuélvelos con `%%`:

  ```md
  Esto es visible.  
  %% Esto es un comentario. %%
  ```

## 🗒️ Listas y tareas

- **Lista sin orden:** `- ítem`, `* ítem`, `+ ítem`  
- **Lista numerada:** `1. Primero`, `2. Segundo`, etc.  
- **Lista de tareas (checkboxes):** `- [ ]` o `- [x]`:

  ```md
  - [ ] Tarea pendiente
  - [x] Tarea completada
  ```

- **Listas anidadas:** indenta con espacios o tabuladores:

  ```md
  - Padre
    - Hijo
      - Nieto
  ```

## 🧰 Código y resaltado de sintaxis

- **Código en línea:** usa comillas invertidas: `` `código` ``  
- **Bloques de código:** tres comillas invertidas o virgulillas:

  ```js
  function hola() {
    console.log("Hola");
  }
  ```

  Puedes especificar el lenguaje después de las comillas para resaltar sintaxis, por ejemplo ` ```python `.

## — Regla horizontal

Crea un divisor con **tres o más** de:

```
***
---
___
```

## 🧾 Notas al pie

Ejemplo de nota al pie:

```md
Este es un texto con nota[^1].

[^1]: Texto de la nota al pie.
```

También puedes usar notas en línea en el modo lectura:

```md
Texto con nota en línea^[Esta es la nota].
```

## 🏷️ Escapar caracteres especiales

Si quieres mostrar `*`, `_`, `#`, `|`, etc. literalmente, añade `\` delante:

```md
\*sin cursiva\*  
\# no es un encabezado  
\| no es una celda de tabla  
```

Puedes copiar esta nota en tu vault como **“Guía rápida de Markdown”** y consultarla cuando necesites repasar lo básico.

---
Referencia a la documentación oficial: [Basic formatting syntax - Obsidian Help](https://help.obsidian.md/syntax)

Other related links to formatting:

| Topic                       | Link                                                                 |
|-----------------------------|----------------------------------------------------------------------|
| Basic formatting syntax     | [Basic formatting syntax](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax) |
| Advanced formatting syntax  | [Advanced formatting syntax](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax) |
| Obsidian Flavored Markdown  | [Obsidian Flavored Markdown](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown) |
| Tags                        | [Tags](https://help.obsidian.md/Editing+and+formatting/Tags)         |
| Attachments                 | [Attachments](https://help.obsidian.md/Editing+and+formatting/Attachments) |
| Callouts                    | [Callouts](https://help.obsidian.md/Editing+and+formatting/Callouts) |
| Folding                     | [Folding](https://help.obsidian.md/Editing+and+formatting/Folding)   |
| Multiple cursors            | [Multiple cursors](https://help.obsidian.md/Editing+and+formatting/Multiple+cursors) |
| Properties                  | [Properties](https://help.obsidian.md/Editing+and+formatting/Properties) |
| Views and editing mode      | [Views and editing mode](https://help.obsidian.md/Editing+and+formatting/Views+and+editing+mode) |
| Editing shortcuts           | [Editing shortcuts](https://help.obsidian.md/Editing+and+formatting/Editing+shortcuts) |
| Embed web pages             | [Embed web pages](https://help.obsidian.md/Editing+and+formatting/Embed+web+pages) |
| HTML content                | [HTML content](https://help.obsidian.md/Editing+and+formatting/HTML+content) |
