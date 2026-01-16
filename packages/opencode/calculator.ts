#!/usr/bin/env bun

import { readline } from "readline"

class Calculator {
  add(a: number, b: number): number {
    return a + b
  }

  subtract(a: number, b: number): number {
    return a - b
  }

  multiply(a: number, b: number): number {
    return a * b
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed")
    }
    return a / b
  }

  power(base: number, exponent: number): number {
    return Math.pow(base, exponent)
  }

  sqrt(n: number): number {
    if (n < 0) {
      throw new Error("Square root of negative number is not allowed")
    }
    return Math.sqrt(n)
  }

  percentage(part: number, total: number): number {
    if (total === 0) {
      throw new Error("Total cannot be zero")
    }
    return (part / total) * 100
  }
}

async function getInput(prompt: string): Promise<string> {
  console.log(prompt)
  return await Bun.stdin.text()
}

async function getNumber(prompt: string): Promise<number> {
  const input = await getInput(prompt)
  const num = parseFloat(input.trim())
  if (isNaN(num)) {
    throw new Error("Invalid number")
  }
  return num
}

async function main() {
  const calc = new Calculator()

  console.log("🧮 Linux Calculator")
  console.log("==================")

  while (true) {
    console.log("\nSelect operation:")
    console.log("1. Addition (+)")
    console.log("2. Subtraction (-)")
    console.log("3. Multiplication (*)")
    console.log("4. Division (/)")
    console.log("5. Power (^)")
    console.log("6. Square Root (√)")
    console.log("7. Percentage (%)")
    console.log("8. Exit")

    try {
      const choice = await getInput("Enter choice (1-8): ")

      switch (choice.trim()) {
        case "1":
          const a1 = await getNumber("Enter first number: ")
          const b1 = await getNumber("Enter second number: ")
          console.log(`Result: ${a1} + ${b1} = ${calc.add(a1, b1)}`)
          break

        case "2":
          const a2 = await getNumber("Enter first number: ")
          const b2 = await getNumber("Enter second number: ")
          console.log(`Result: ${a2} - ${b2} = ${calc.subtract(a2, b2)}`)
          break

        case "3":
          const a3 = await getNumber("Enter first number: ")
          const b3 = await getNumber("Enter second number: ")
          console.log(`Result: ${a3} × ${b3} = ${calc.multiply(a3, b3)}`)
          break

        case "4":
          const a4 = await getNumber("Enter numerator: ")
          const b4 = await getNumber("Enter denominator: ")
          console.log(`Result: ${a4} ÷ ${b4} = ${calc.divide(a4, b4)}`)
          break

        case "5":
          const base = await getNumber("Enter base: ")
          const exp = await getNumber("Enter exponent: ")
          console.log(`Result: ${base}^${exp} = ${calc.power(base, exp)}`)
          break

        case "6":
          const num = await getNumber("Enter number: ")
          console.log(`Result: √${num} = ${calc.sqrt(num)}`)
          break

        case "7":
          const part = await getNumber("Enter part: ")
          const total = await getNumber("Enter total: ")
          console.log(`Result: ${part} is ${calc.percentage(part, total)}% of ${total}`)
          break

        case "8":
          console.log("Goodbye! 👋")
          process.exit(0)

        default:
          console.log("Invalid choice. Please try again.")
      }
    } catch (error) {
      console.log(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    }
  }
}

main().catch(console.error)
