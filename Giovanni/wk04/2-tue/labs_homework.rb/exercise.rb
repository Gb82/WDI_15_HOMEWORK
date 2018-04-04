puts('hello gio')


puts secret = 13

puts('Welcome to the guessing game')
print('guess a number: ')
guess = gets.chomp.to_i

while guess != secret do
    puts('wrong guess. guess again: ')
    guess = gets.chomp.to_i
end

puts ('you win')

puts days_of_the_week = ['Monday', 'Tuesday', 'Wednsady', 'Thursday', 'Friday', 'Saturday', 'Sunday']

print days_of_the_week.pop

print days_of_the_week.unshift('Sunday')



puts weekdays = ['Monday', 'Tuesday', 'Wednsady', 'Thursday', 'Friday', ['Saturday', 'Sunday']]

print weekdays[5,6]

print weekdays.sort





