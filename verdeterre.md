# Ver de terre

## @showdialog
Programme ton ver de terre pour qu'il se déplace.

## Étape 1

Supprime les blocs ``||basic: Au démarrage||`` et le bloc ``||basic:Toujours||``.

## Étape 2

Ajoute le bloc ``||input:lorsque le bouton A est pressé||``.

```blocks
input.onButtonPressed(Button.A, function () {
    
    }
})

```

## Étape 3 

Dans ton bloc ``||input:lorsque le bouton A est pressé||``, ajoute le bloc ``||loops:faire répéter X fois||``. Tu dois faire répéter la boucle 10 fois. 

```blocks

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        

```

## Étape 4

Dans  le bloc ``||loops:faire répéter X fois||``, ajoute le bloc ``||basic:montrer LEDs||`` et dessine un bonhomme sourire. 

```blocks

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)


```

## Étape 5

Sous le bloc ``|| basic:montrer LEDs||``, insère le bloc ``|| pins: régler position servo ||``.

Remplace la valeur ``|| pins: 180 ||`` par ``|| pins : 0 ||``.

```blocks

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)

```

## Étape 6

Sous le bloc ``|| pins: régler position servo ||``, insère le bloc ``||basic: pause (ms)||``.

Modifie la valeur de la pause pour 1 seconde. Cela s'affichera comme "1000" dans le bloc ``||basic: pause (ms)||``.

```blocks
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        ```

## Étape 7

Sous le bloc ``||basic: pause (ms)||``, ajoute le bloc ``||basic:montrer LEDs||`` et dessine un X. 

```blocks

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
```

## Étape 8

Sous le bloc ``|| basic:montrer LEDs||``, insère le bloc ``|| pins: régler position servo ||``.

Laisse  la valeur à ``|| pins: 180 ||``.

```blocks

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.servoWritePin(AnalogPin.P0, 180)

```

## Étape 9

Sous le bloc ``|| pins: régler position servo ||`` à 180, insère le bloc ``||basic: pause (ms)||``.

Modifie la valeur de la pause pour 1 seconde. Cela s'affichera comme "1000" dans le bloc ``||basic: pause (ms)||``.

```blocks

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(1000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(1000)
    }
})

```
## Étape 10

Télécharge ton programme et teste-le. 

Assure-toi de bien connecter les pinces crocodiles tel que montré sur la vidéo de démonstration. 
