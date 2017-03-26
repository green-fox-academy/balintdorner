#Blackjack

import random

def blackjack():
    fullstack = 1000
    for i in range(3):
        cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
        hand = [random.choice(cards), random.choice(cards)]
        hand2 = random.choice(cards)
        sumhand = sum(hand)
        dealer = [random.choice(cards), random.choice(cards)]
        dealer2 = random.choice(cards)
        sumdealer = sum(dealer)
        hit = "hit"
        stay = "stay"
        win = False
        push = False
        print("Hi Gambler. Welcome to Vegas! Please place your bet (max:", fullstack, " ): ")
        stack = input()

        print("Your hand is:", hand, "=", sumhand, "Would you like to hit or stay?")

        answer = input()

        while sumhand <= 21:
            if answer == hit:
                sumhand += hand2
                if sumhand <= 21:
                    print("Your hand is:", sumhand, "Would you like to hit or stay?")
                    answer = input()
                else:
                    print("Your hand is:", sumhand, "game over")
                    win
            elif answer == stay:
                while sumdealer < 17:
                    sumdealer += dealer2
                if sumdealer > 21:
                    print("Dealer Hand is:", sumdealer, "you won")
                    win = True
                    break
                elif sumdealer < sumhand and  17 <= sumdealer <= 21:
                    print("Dealer Hand is:", sumdealer, "you won")
                    win = True
                    break
                elif sumdealer == sumhand and sumdealer <= 21:
                    print("Dealer Hand is:", sumdealer, "push")
                    push = True
                    break
                elif sumdealer > sumhand and sumdealer <= 21:
                    print("Dealer Hand is:", sumdealer, "dealer won")
                    win
                    break
        if win == True:
            fullstack += int(stack)
        else:
            fullstack -= int(stack)
        if push == True:
            fullstack = fullstack
        print("your fullstack is: ", fullstack)
    if fullstack > 1000:
        print("       $$$$$      ")
        print("       $:::$      ")
        print("   $$$$$:::$$$$$$ ")
        print(" $$::::::::::::::$")
        print("$:::::$$$$$$$::::$")
        print("$::::$       $$$$$")
        print("$::::$            ")
        print("$::::$            ")
        print("$:::::$$$$$$$$$   ")
        print(" $$::::::::::::$$ ")
        print("   $$$$$$$$$:::::$")
        print("            $::::$")
        print("            $::::$")
        print("$$$$$       $::::$")
        print("$::::$$$$$$$:::::$")
        print("$::::::::::::::$$ ")
        print(" $$$$$$:::$$$$$   ")
        print("      $:::$       ")
        print("      $$$$$       ")
    else:
        print("     █xxxxxxxx█   ")
        print("   ▄x          █  ")
        print("  ▄x           █  ")
        print(" ▄x █           █ ")
        print("█  ▄█        ▄  █ ")
        print(" xx █  █  █  █▄x")
        print("    █  █  █xx")
        print("    █  █▄▄█")
        print("    █  █")
        print("    x▄▄x")
blackjack()
