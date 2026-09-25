#include <iostream>
#include <typeinfo>

using namespace std;

int main() {
    int a = 28;
    float b = 50.0f;

    // Output the type name of variable 'a'
    cout << "Type of a: " << typeid(a).name() << endl; // Prints 'i' (for int)
    cout << "Type of b: " << typeid(b).name() << endl; // Prints 'f' (for float)

    return 0;
}