sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}

sample_dict['class']['student']['marks']['history']

sample_dict['class']['student']['marks']['history'] = 115 #overrtiing the key
del sample_dict['class']['student']['marks']['physics'] #deliting key

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]
for remove_key in keys_to_remove:
   del sample_dict[remove_key]
print(sample_dict)
