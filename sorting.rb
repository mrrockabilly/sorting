 def alphabetize(arr, rev=false)
        arr.sort!
        if rev == true
            arr.reverse!
        else
            arr.sort!
        end
    end
    numbers = [1, 8, 9, 5, 10, 6]

    puts alphabetize(numbers)
    puts numbers
