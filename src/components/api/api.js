const api = {
  productItems: [
    {
      id: 1,
      name: "Lenovo's ThinkPad X1",
      type: "laptops",
      image:
        "https://cdn.mos.cms.futurecdn.net/BqTQ8aW42Gur7FfwNBayeZ-970-80.jpg.webp",
      price: 1999,
    },
    {
      id: 2,
      name: "apple macbook air m1 ",
      type: "laptops",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_696120-MLB43671670886_102020-O.jpg",
      price: 899,
    },
    {
      id: 3,
      name: "dell inspiron 13",
      type: "laptops",
      image:
        "https://images.pexels.com/photos/5243610/pexels-photo-5243610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 949,
    },
    {
      id: 4,
      name: "dell Latitude 9420 2-in-1",
      type: "laptops",
      image:
        "https://cdn.mos.cms.futurecdn.net/wsC6KqwTaT8sexyhqf3VfX-970-80.jpg.webp",
      price: 949,
    },
    {
      id: 5,
      name: "HP EliteBook",
      type: "laptops",
      image:
        "https://cdn.mos.cms.futurecdn.net/YLMwnNNEW8xtut9e3wStdW-970-80.jpg.webp",
      price: 1249,
    },
    {
      id: 6,
      name: "lenovo ideapad 3 ",
      type: "laptops",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/2/GR/YN/HI/97647183/slim-3-500x500.jpg",
      price: 699,
    },
    {
      id: 7,
      name: "Apple MacBook Pro late",
      type: "laptops",
      image:
        "https://images.pexels.com/photos/3644097/pexels-photo-3644097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 1649,
    },
    {
      id: 8,
      name: "Lenovo ThinkPad X1 Yoga",
      type: "laptops",
      image:
        "https://cdn.mos.cms.futurecdn.net/y7pHohfmdGcxXBLKNcw5pG-970-80.jpg.webp",
      price: 1999,
    },
    {
      id: 9,
      name: "HP pavilion 15",
      type: "laptops",
      image:
        "https://cdn.mos.cms.futurecdn.net/d91e1247c0438c315d195eceaab3d24f.jpg",
      price: 998,
    },
    {
      id: 10,
      name: "ASUS Vivobook 15.6",
      type: "laptops",
      image:
        "https://cdn.mos.cms.futurecdn.net/kcrd8biCSBo8ug6xfWDc6K-970-80.jpg.webp",
      price: 815,
    },
    {
      id: 11,
      name: "HP chromebook X2 11",
      type: "laptops",
      image:
        "https://icdn.digitaltrends.com/image/digitaltrends/hp-chromebook-x2-11-3-625x417-c.jpg",
      price: 379,
    },
    {
      id: 12,
      name: "Microsoft Surface  3",
      type: "laptops",
      image:
        "https://cdn.mos.cms.futurecdn.net/TAhcUqqqsQMR5S357ovmed-970-80.jpg.webp",
      price: 779,
    },
    {
      id: 13,
      name: "Acer Aspire 5",
      type: "laptops",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs4atAKW1aFWlFUeU3urfUN13KzV-_NG7AQ&usqp=CAU",
      price: 369,
    },
    {
      id: 14,
      name: " apple macBook Pro 2021",
      type: "laptops",
      image:
        "https://images.pexels.com/photos/214670/pexels-photo-214670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 1469,
    },
    {
      id: 15,
      name: "Samsung Galaxy A32 5G",
      type: "phones",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDRRbZ8a7-bA6L9OvfyOavCq_FDnjPpIjTvQ&usqp=CAU",
      price: 201,
    },
    {
      id: 16,
      name: "iphone 6",
      type: "phones",
      image:
        "https://images.pexels.com/photos/797519/pexels-photo-797519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 139,
    },
    {
      id: 17,
      name: "infinix note 8",
      type: "phones",
      image:
        "https://mobizil.com/wp-content/uploads/2020/10/Infinix-Note-8-Hole.jpg",
      price: 199,
    },
    {
      id: 18,
      name: "iphone 11 pro max",
      type: "phones",
      image:
        "https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 597,
    },
    {
      id: 19,
      name: "huawei y9s",
      type: "phones",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqr9bm5nuLOy4VNzKcMLksglN89L4w8JvYnA&usqp=CAU",
      price: 597,
    },
    {
      id: 20,
      name: "iphone X",
      type: "phones",
      image:
        "https://images.pexels.com/photos/968639/pexels-photo-968639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 295,
    },

    {
      id: 21,
      name: "oppo a 9",
      type: "phones",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl78pQ6T2iaVQviFjJluuR4EnGsk_x56ToSQ&usqp=CAU",
      price: 159,
    },
    {
      id: 22,
      name: "realme XT",
      type: "phones",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXHIU8tUdzVrNqxrOhirmChf3nn-RlfRgDg&usqp=CAU",
      price: 130,
    },

    {
      id: 23,
      name: "iphone 12 mini",
      type: "phones",
      image:
        "https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2020/11/23/aiphone12mini-cov-shot-sel-1-918798-1606128770.jpg?itok=hm0k5CPH",
      price: 579,
    },
    {
      id: 24,
      name: "nokia 3.4",
      type: "phones",
      image:
        "https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 179,
    },
    {
      id: 25,
      name: "iphone 8",
      type: "phones",
      image:
        "https://images.pexels.com/photos/3639946/pexels-photo-3639946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 219,
    },
    {
      id: 26,
      name: "nokia 6",
      type: "phones",
      image:
        "https://images.pexels.com/photos/4957/person-woman-hand-smartphone.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 229,
    },
    {
      id: 27,
      name: "infinix hot 9",
      type: "phones",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMkiLNP1YSri3K-DS7LhxLq9BcjD9JPKwvQ&usqp=CAU",
      price: 499,
    },
    {
      id: 28,
      name: "Xiaomi mi 11",
      type: "phones",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOdL8EnOnre_9iRO9htsgfYOrMzTMMni2vIg&usqp=CAU",
      price: 611,
    },
    {
      id: 29,
      name: "samsung galaxy a22",
      type: "phones",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhERERIREREQEQ8REREPEREPDxEPGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISGjQhISU0NDQxNDQ0NDU0NDE0NDQxMTQ0NDE0MTQxNDE0NDQ0NDQ0NDE0MTQxMTQ0ND8xMTQ0Mf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EAD0QAAIBAgMEBwUFCAIDAAAAAAABAgMRBBIhBTFBUQYTYXGBkcEUIjKhsRVCUmLRBzNygpKisvDh8SNjwv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAwIEBf/EACURAQEAAgICAgEEAwAAAAAAAAABAhEhMQMSQVEiBBMyoUJSYf/aAAwDAQACEQMRAD8A4m+VJ2Us1999LCluUtPe4K+mtuIITtpZNcpK6vzFKTe/5aJLkZuWPrrQmOXtvZvWdglPs/3T9QhuZ9sf9WvXL7DP6CVT/fL9Q3Eg9sfoeuX3/RKfAdcAjGVl6mmpLO7s64rjRAZ1wjUdNszolVqRU6klTjJXStmm1ztwCTbNyk7c2Bs7mn0Ip/eqzfdFL1LUOheGW91JfzpL6GvWs+8eW4nFNOyGvFPLc9ch0RwS30Yy/jbZbpbBwsPhoU1/Lf6h6l+48Ww2JnJ2yyfcmzVp0akt0Jv+Vnr0MDSj8NOmu6EF6E8aaW5Jd2g/Uv3HkcNmYh6qjUfdCTK1WnKDyzjKMlvUk4vyZ7PlRk9I9lwr0Kl4rrIQlKEvvKSV7X5PcHqJ5OeXldwAbBcxpY64LguC4A64GwXBcATYriA2AK4GxAYAGxrCwMAAgCALAQXEAEIAgCEIQgQhCGCFcAAC/siKliKEZaxlVppp8U5JM9N2ptGOHpyqS0UIOba1e9JJdrbPK8BPLUpy/DOMvJ3PUNq4SFaPVz1hUpzjK2j0cbNdpvHpHydsLZXSx1asadSnKn1jtTlncves7Jqy32eqMzavS+vGrVjTUOroTySVRtzm1Jpta34cNw/ZGCwdLExjLFxq1YS/8dNxUPf1SvLdKSux/SKjs+FdSqU6tStJdZOGHTneK+/NcO9DLjbsNiY3rqcZ6pTp06kU9WozT91vjZpmkY+w8VSqxhUoNOnOnaNlayhJLLbha7VjYNMUhBFYCIbON00+KsPsJoA8TxEMs5xe+MpR8nYhuaO36eTFYiP/ALZtdzd/UziN7dOPRCFcFwaG4LgEAIAgXAE2BsQ1sATYGxMDABcIBAG37NEDwiLGRiysyFZ4Ma8GXLMWoBReEY14WRoXYswBnPDyGujI083YBy7BhlOEuQ1xfI1XbkMcY8gDOhe670erV71KFOabWaCvJb4qcPi8G0edRpKTSW+TSXe9Eek7DlfDUb71TjF98Vlf0N4peT4eaUei+LdSNOVPKlNPr1KLhZO+eOt7+F9Tr8VgsVSxE8VhJ0b16cKVaniVNweT4ZJx105f6unjhaa3U4LujEkjTit0Uu5JG9Me1YvRjZTw1OMHLO/fnOS0jKc2m7dmhvICHIbIhQEOQAhWCIA8o6aUsuMq/mUJf2JP6GCzrf2h0H7TCS3SpLzU5ejRyLhLkSy7Xxv4wgAafIF2Js64AXBmACIGYFwAsaxXBcATAxwABghwgDYWNHrGoZ7IB4QAmWNQ5YuJVeEY14ViC8sTEPXxM/2VieHkGg0esiLPEzepl2gyT7Q0GneI1qPMzbT7R8HLiGiT162XVcNV3npewpXpyX4auIS7utk18mjy+cLo9G6LVM1Od9+anL+uhTl9WzeDHk6bqCBBRREUOAhyQAkhwkg2AEhCsGwBw/7Q45ZYefBqpF/2Nepxymmd5+0SjfD05fhqxXg4y/4PPqTSZLLtbDpI0uQMkeRJmiK8RNoXSiB0Ik/u8xZVzAKzw8RjwqLTguYMgBUeFGvClxwGumwCk8OxroMvZWCUGBM/q2EtdWIA2RXIFio8wrER5i0acRF18eYeujzAJAWGdbHmHrI8wAtIDSFnXMDmuYwDiuRUxU1BXLTkiGvTjNWYGWyIdfmk75ForaXfE7XohFwdem23l6mUczu8jUkl4ZbeCOb2NSUIKKVld/W7Om2DNe0SS+/S/wAJq3+bM42+zfkxn7bpkOQ1D0dDiOiOSBEegAJDrBsGwA2wQ2CkAc505pZsFUa3wyS8px9LnlME5Hs3SSlnwmIja76ubS5tRbXzseUwgluMZK+PpQdKQMki+xWMKM+0xXmX7IDigCj1khdbIuOCA6aAKfXyF7TItOmhrpIAr+1ME8Uyd0UDqEAVeuYi37OhAHPwxzW9sf7f2sihg5S1QfYJmvxHKZbQfNh+0PzFf2CYpbPmL8fscrP2i/xBW03zM2pQcSPKzXrL8ltrfaj5h+1XzMqEbsl6i7DUhtD7WfMtbPxcqs1Bbt8nyiYdSjbRat/U7Lo/s/q4K9s0tZPt5eBjOzHHhvDG5Vs4SCikloa2xJ2xNP8AMpwX9OZ/4GdHQODxShjMJC+s6k9Py9VNfWSJ4dxby/wrv4kiI4kkTqeakQ5DYj0AEcho5IAckOsBCAK+Mp5qc4/ii14M8nwOFU0nLtVt1raHrtRaPuf0PMIRyVK0X9yvXX97aJ+Tp1fppLldq+L2coxco301MrrDaxeOSi47200kY+VE8VPNjJeDc4Mw/KgZUaSMzCzIc4IGUAa5Ia5Ic4DZQAFdAzIDgNygEmYRFkEBMqjiHFbgyxj5CVO6G9UZ4bWMPi1xQ6vjY8Cm6Q6OGvxFqDkyVRSepYp4FSVxjwKXEuUq8YRtcLfo1Wrg1Eh6t3NPDS612Wpa+znfcan/AFmsrZ+Dc60VbSHvvw3fP6Ha0aeVJGfszCqDk+LdvI1UyWd3V8JqGzSszlsNjG9o0ZX0hiKUV/Dnipep0G0MQoU5y4JN/I4jCVXGpCe9qefve8rhGPLeNPf4MkiyCErpPmiWLLuJNFj7kUWPTAj0SIiiyRAD0FMahABaPJukNR08XiILe5xkkvzQi7nrNzzjbiXtdadrttLuUVYxn/Ff9Pv24cw3LjvY3MzoK+GjOm3xS0MXKTx5W8mNxvN2jjIinioxdmWGjC2o8ruOpxqe1xF7VHmcv7WH2sPXI+HT+0x5idePM5j2vtF7X2sPW/RcOl6+PMb10eZzftfawxxTfFj9aOHR9bHmAwusfNiMnpayytoRyhMndayFGpcRqzjMjlOceJanMgknJDhVTnipv7w1Sk+Ip0mPpwZTjXBTbtOg2z+s1fM6jauEjRjKdlm+GC5ze79fAo/s5soa82TdIMZ12Iko/u6TcI8pT+/Lz08O0hlk3hjuqOHVkSSlzAl8hk0YjoZHSKvanl/HKMfX0Oag1mj3r6m10hTbhd6e87dqsZ8MOlaUlu1X6l8bJHPnLldR7Vsurno0Z/ip05ecUy9FmJ0YqZsHh3ypqP8AT7vobEWVjlqZMemRJhTGSaLJYsrpkkJASdMVxikFMAdc4DpPS6vESbdlNZ49u6/1O+ucV+0DCdZLCtNxySqOTW9wcbOK72o+RnObxW8GWso5urjHFaa307Cm5I1I4CMoaLctOLMyeGbRLF0+fe4ZF3Zh7aidDRw2XeYu24jqMcvKILEslqCxXbOkdgEjRGxwqRLRRETUQy6PHtaSEPSCQVW6ko2tzRFGP0v4F3H7OUYqafG1udyvDCuTgm2k2k+65Sfp8rNxDHKTLdRQqxvZjcRiYrRF7bWzYU6WeLV04pdt2YW8Ux03btpbNr03Viqnw9u65d6QTprJ1dnLjl5HPM0NnQi083MPWDdXti9IJUVlWjvodLg5XSORhs+Dcm+bOk2ZUvFdyI+XXwv4b21GxDUw/QnFbWdtDCdZZpfA7256GJj4WvvXyR1ckU8fhFOMrK907rn2rtKRjp0/QermwdP8spr+5v1OkjI4r9nNW+FqQ/BVa/sivRnYxkdMcOX8qsJjkyGLJYRcr24Jvv7BsnpkkWGOGet5JWV92/T9dCWNCmn71TT3dzinZtd/5vIBoxSCmOrKmo+5JylmXPWOXV+ZHGQBJc5npnD3Kc+ClKPmtPU6NMxul0G8HWa+KEesXfB5v/m3iZym41hdZSuOjXtHwIIapPnqU4V86Si75uWviX4wskuSSJYx2+a9QxROf25E6VIwNuxHUI5Oa1Y2xLNasZY3KRjIpE0kRyRqFQjG5NSVgUOJJFahlRiuQ3IQYLRCOdVapYtuUc7uk9L7rlzF4im4rK1fmuBzbr2F1x0Y5ZRKyLmOrTnFKT0T3cypHQjlWYOtC7pyRI0WaFVRRUcx0It8DPR6h9XGTu0nodJsKteEey6OejS5mtseSWaK4NPz/wCiXkssU8c1k6iEyRFSnLcTqZGLVIxIbcCkUJpdFqHV1MTl0hU6uaXKd55vP3X5nURkchs7EZJxluTdpdz4nVQmWwu44/LjrJaix6ZDFkkWUSSRJEyFMemASXHxkRJjkwCaLK216eehVh+KE4+cWvUnixVdYvuAPL8BhoxipJWzJWvwRbsKlDLHL+Byh/S3H0HWJa0vbvkIowduQudDFGJtiOq7xZdHj25eWEdxexM2FAWQAwZ4VorzoNG9VgU60By0tM2lCw6O8suGhXjvHaJ2uwWiCKG5CJKMeUHvtoCLOgp4X/xXa4GFNJXR0TLaWvlGxITY6mrsY+Tkr7jVwjjGCvvsVaVJLXkVq1R3tuS5GLPbg96WatTfYsbDq+/K/GK+T/5MyLbLmylao/4X9UK46xsbxv5R11GppoWFU7V5mdh3wLLstbeJyOlajNc/mPUuRWpz5XffoiWLb3+W5G5WdJ4M6XZVfNTV98fdfocxE0Nl4nJOz+GVk+x8GUxy1UvLj7R1UJEsWVYTXMdLFU4/FOK72kXca2mOTMue2MPHfUh4NS+hVqdJ8NHdJy7oy180hH62/DoEx8WcvPpVD7tKq++MYr6ld9KqkvgoWu7LNUT17kg3Ps/TL6dmmMxNeNOE5zkoxjFtt7krbzkZbaxT3OjHujOTXnLUqV51KtuuqOpFNNQSUIX7Ut/iG4JjUdKWZOdrZ5zqWe9Kc3JL5j7DwGVIUUY22Vqu824oxdtiy6PHtm5zV2RgIVE5TfctDnZVuAyO0alO+SbjfkLejS9IGqVRxhqt+hkQxE5O1mWquIU3mk3Jve27sOHnBO+grnx0ekdSLitSot5JisVnnZbkRream9csztehuQhQ3IRNRuZbUfA4zEr35d7OtxVXJSt2HOYKiqlRp8y2HCWSgGLOtWxqa4IetmU1wRvZOSVSXaNyvkzr/s+muC8hk8LTXD5C2fblIp8maOzYtOUvDX/e4mrwinu7uVuI6nLT0RPyZcaU8ePK9QreaNGlUvZyXirsxqO+/wAzSw9Rp6tv9TmsdEX00/vW8bMlp6cfVkMJLjb6ksEuHyHKadhjIYPpo1C0q1qE223Um03dJyvbs14A9k0veT8WXZK4qW9rmP2rMwk+FFYRbyzToqSd0rreiw6evf8AUEVld0LbWoYoZU4vdwfoHCU2o5nvd2uxMllDPNQ8Zfwrf/vaTYmSTsjWNTyvwhi22TpjJwtG42EykSqa4URKQ9MbKRPjyMHbVWM4twknrZa73yXabq105mJtWlGPvyXvRtqm3ms7213dxTGY2fknblL+Lh69WeZ2T323PeQynN8H5Ms1sRJSlbjJy4rVtP0+Y14t3VkrWjv5rj/vIcxw121fb6Vrz5PyY737bpWd+DJY4uStona2+73f9CWMet1e+7WSt8Pbu903McPtm3OfCGnB3Ts7a/Qs8RkcVJuztrbmtyW6z7CSc3KSb5cCecmuKeNu+YuQ3IQ2G5COZdp7V/deBh7K/eoAi6VdlwQxhEAQzKmK/T1EIKIyeC/n/wAkKiARHJbBbpeheo/D4CERq0XIcB8d6EIRxagSoQjcEOXDxGx+LyCIL0L2sT3Eb3+L+ghDhXo/C/FPuh6kNT413iET/wAkMu0+L3IhiIR0zpipUPiIRoksDI298LEIWXQx7cDivjfeQiEbnTdBjWIRqMZDT3oucfAQjORRahuQhCIKv//Z",
      price: 245,
    },
    {
      id: 30,
      name: "noice cancelation headphone",
      type: "accessories",
      image:
        "https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 89,
    },
    {
      id: 31,
      name: "airpos pro",
      type: "accessories",
      image:
        "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 129,
    },
    {
      id: 32,
      name: "WI-FI router",
      type: "accessories",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpZH8_Oh-c0pxElVBDh7HfmcXgohrMiAfrg&usqp=CAU",
      price: 53,
    },
    {
      id: 33,
      name: "USB-C laptop charger",
      type: "accessories",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJlc7KdoDkorUj5_FmPUr7PfipnNl7Op0zw&usqp=CAU",
      price: 23,
    },
    {
      id: 34,
      name: "flash driver 64GB",
      type: "accessories",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNq2_fkv6CRbIN5dtJogLPQfI0jCaUeTyf1g&usqp=CAU",
      price: 15,
    },
    {
      id: 35,
      name: "hyperX pulsefire mouse",
      type: "accessories",
      image:
        "https://m.media-amazon.com/images/I/81ovoG-ZEqS._AC_SX569_.jpg",
      price: 49,
    },
    {
      id: 36,
      name: "external hard disk 1,000GB",
      type: "accessories",
      image:
        "data:image/jpeg;base64,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",
      price: 46,
    },
    {
      id: 37,
      name: "wireless mouse 2022",
      type: "accessories",
      image:
        "https://media.istockphoto.com/photos/woman-hand-with-computer-mouse-picture-id534314416?b=1&k=20&m=534314416&s=170667a&w=0&h=KpaQPx3CCwrJ57iHO9KF2IUIMvFAnAsTIv_G20pNzgM=",
      price: 12,
    },
    {
      id: 38,
      name: "labtop backpack",
      type: "accessories",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkKZ9LOqXz5kmiXujtEp9FoD9R7YWXzV19g&usqp=CAU",
      price: 23,
    },
    {
      id: 39,
      name: "novotel wireless mifi 2372",
      type: "accessories",
      image: "https://techreen.com/wp-content/uploads/2020/01/MiFi.jpg",
      price: 54,
    },
  ],
};
export default api;
