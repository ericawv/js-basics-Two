///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
    
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

//Note: Should I have created an additional tax property in the cart object to support the output for this function?

const calcFinalPrice = cart.map(cart => cart.price + (cart.price * cart.tax))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    cusomer object properties:
    - nanme: string (Purpose: This property caputures the first and last name of the custoner placing an order online.)
    - phone: number (Purpose: This property caputures the phone number of the custoner placing an order online. Order status will be communicated via the phone number.)
    - email: string (Purpose: This property caputures the email address of the custoner placing an order online. Order reciept and order stautus (ready/pickup status) will be communicated via the email address.) 
    - items: string (Purpose: This property capture the order item(s) that have been selected and confirmed by the customer for their online order.)
    - method: string (Purpose: This property caputures the payment method information (the type of credit card/debit card) for the custoner placing an order online.)
    - payment: number (Purpose: This property caputures the payment credit card/debit card digits that the custoner will enter when placing an order online.)
    - comments: string (Purpose: This property caputures any order comments/instructions from the customer needed for fulfilling the customer's online order. )
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: 'Victor Wright',
    phone: 3137151444,
    email: 'victorwright@gmail.com',
    items: 'pizza, bread, pop',
    method: 'Visa',
    payment: (1234567898765432),
    comments: 'Thank you'

}