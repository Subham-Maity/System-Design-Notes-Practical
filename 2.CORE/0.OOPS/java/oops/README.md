# Chapter 1

### Concepts

1. What is OOPs ?

> Solving a problem by creating objects

2. What is class?

> Class is a blueprint for creating objects

3. What is Objects ?

> - An object is an instantiation of a clas.
> - When a class is defined a template is defined.
> - Memory is allocated only after object instantiate

```java
class Cat {
    String name;
    Number age;

    public void displayName() {
        System.out.println("The cat's name is: " + name);
    }

    public void displayAge() {
        System.out.println("The cat's age is: " + age);
    }

}

class Main {
    public static void main(String[] args) {
        Cat myCat = new Cat();
        myCat.name = "Mew";
        myCat.age = 2;
        myCat.displayName();
        myCat.displayAge();
    }
}
```

4. What is abstraction ?

> - hiding internal details (Show only essential info!)

4. What is Encapsulation ?

> - The act of putting various components together(ex: Laptop is a single entity with Wi-Fi + speaker + storage) in
    single box

5. Polymorphism ?

> - One entity many forms (Ex: A car can take on different forms, such as a sedan, SUV, or sports car, but they all
    share the common functionality of being a vehicle. )

6. What is this ?

> - The keyword refers to the current object in a method or constructor.

7. What is new ?

> - The new keyword creates new objects. (Ex: Allocates new memory space)

```java
public class Main {
    int x;

    // Constructor with a parameter
    public Main(int x) {
        this.x = x;
    }

    // Call the constructor
    public static void main(String[] args) {
        Main myObj = new Main(5);
        System.out.println("Value of x = " + myObj.x);
    }
}
```

# Chapter 2

1. What is constructor ?

> - A constructor in Java is a special method that is used to initialize objects. The constructor is called when an
    object of a class is created. It can be used to set initial values for object attributes: