# Tip Calculator App

## Questions:
 
  1. bill amount
  2. tip rate
  3. people amount
  4. tip amount
  5. total amount
  6. prompt / input
  7. display
  8. output

## Tecnical assignment

   - create easy tip calculator app, which asks user about bill amount, tip rate and number of people. then program must calculate the tip and total amounts for a person and display it.

   example: 
    "what is the bill?" - $100
    "What is the tip rate?" - 20%
    - tip / person : $10
    -total amount/ person : $60

### Inputs, Process, Outputs

constants: 
  - billAmount
  - tipRate
  - peopleAmount
  - tip
  - total
  - reset

process:  prompos -> compute -> display

inputs: billAmount, tipRate, peopleAmount
outputs: tip; total

### TDD

inputs: 

billAmount : 200$
tipRate: 20%;
peopleAmount: 5

expected result:

tip : #8;
total : $48;


## Pseudocode

TipCalculator

  Initialize bill-amount to 0/00;
  Initialize tip-rate active to 15%;
  Initialize people-amount to 0;
  Initialize tip to 0.00
  Initialize total-mount/person to 0.00

  Prompt for bill-amount with "What is the bill amount?"
  Prompt for tip-rate with "What is the tip percent?"
  Prompt for people-amount with "How many of you are gonna pay?"

  Convert bill-amount to number
  Convert tip-rate to number
  If people-amount is equal to 0, then display error message and ask again

  Calculate :
    
     tip = (bill-amount * (tip-rate / 100)) / people-amount;
     * round tip number;
     total-amount = bill-amount/people-amount  + tip;

Display: 
    "Tip /person: $" + tip";
    "Total /person: $" + total;

