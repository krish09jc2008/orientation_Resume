#include <iostream>
using namespace std;

int main() {
    int month;
    cout << "Enter month number (1-5): ";
    cin >> month;

    switch (month) {
        case 1:
            cout << "Jan";
            break;
        case 2:
            cout << "Feb";
            break;
        case 3:
            cout << "March";
            break;
        case 4:
            cout << "April";
            break;
        case 5:
            cout << "May";
            break;
        default:
            cout << "Invalid month number";
            break;
    }

    return 0;
}