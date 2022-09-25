#include <iostream>
#include <string>

void cap_let (std::string&);
void caesar_cipher (std::string& );


int main ()
{
    std::string cipher = "Caesar cipher";
    cap_let (cipher);
    caesar_cipher (cipher);

    std::cout << cipher << std::endl;
}

void cap_let (std::string& str)
{
    int size = str.size ();
    for (int i = 0; i < size; ++i)
    {
        if (str[i] > 'Z') { str[i] -= 32; }
    }
}

void caesar_cipher (std::string& str) 
{
    const int alpsize = 26;
    int shift_count;
    std::cin >> shift_count;
    shift_count %=  alpsize;
    int size = str.size ();

        for (int i = 0; i < size; ++i)
    {
        if (str[i] == ' ') { continue ;}
        if (str[i] - shift_count < 'A')
        {
            str[i] += alpsize;
        }
        str[i] -= shift_count;
    }
}