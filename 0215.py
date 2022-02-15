i = list(map(int, input().split())) #i_1 i_2を取得し、iに値を入れる
i2 = list(map(int, input().split()))


i_val = i[0]
i_send = i[1]

sum_i = i_val + i_send


i2_val = i2[0]
i2_send = i2[1]

sum_i2 = i2_val+ i2_send



if(sum_i>sum_i2):
  print(sum_i2)
elif(sum_i<sum_i2):
  print(sum_i)
