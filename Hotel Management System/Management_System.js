import './global_Console.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();
import fs from 'fs/promises'


class Room {
    roomNumber;
    type;
    Available;
    pricePerNight;
    constructor(roomNumber, type, Availability, pricePerNight) {
        this.roomNumber = roomNumber;
        this.type = type;
        this.Available = Availability;
        this.pricePerNight = pricePerNight;
    }
    book() {
        this.Available = false
    }
}

class Booking_details {
    customerName;
    checkIn;
    checkOut;
    roomNumber;
    bookingTime;
    constructor(customer_name, check_in, check_out, roomNumber, booking_Time) {
        this.customerName = customer_name;
        this.checkIn = check_in;
        this.checkOut = check_out;
        this.roomNumber = roomNumber;
        this.bookingTime=booking_Time
    }
}



let room = [
    new Room(1, "single",true, 5000),
    new Room(2, "Double",true, 10000),
    new Room(3, "Double", true,10000),
    
]

let bookings = [];

function IsRoomAvailable(roomNumber, checkIn, checkOut) {
    let roomOccur = bookings.find(booking =>
        booking.roomNumber === roomNumber && checkIn < booking.checkOut && checkOut > booking.checkIn

    )
    return !roomOccur;
}

function Booking_Room(customer_name, check_in, check_out, room_Number, booking_Time) {
    let Empty_room = null;
    for (let i in room) {
        if (room_Number == room[i].roomNumber) {
            Empty_room = true
        }

    }
    if (Empty_room == null || !IsRoomAvailable(room_Number, check_in, check_out)) {
        throw new Error("Room not Available")
    }
    else {
        let check =  /^\d{2}:\d{2}:\d{2}$/.test(booking_Time);
        if(!check){
            throw new Error("Please enter the valid time in format(HH:MM:SS): ")
        }
        bookings.push(new Booking_details(customer_name, check_in, check_out, room_Number,string(booking_Time)));
        console.log("---------------Booking confirmed!----------------");
        for (let i in room) {
            if (room_Number == room[i].roomNumber) {
                room[i].book()
            }
        }
    }


}

async function saveData() {
    await fs.writeFile('HotelData.json', JSON.stringify({ room, bookings }))
    
}

async function loadData() {
    try {
        
        let data = await fs.readFile('HotelData.json')
        let parsed = JSON.parse(data)
        room = parsed.room.map(r => Object.assign(new Room(r.roomNumber,r.type,r.Available,r.pricePerNight)));
        
        bookings = parsed.bookings.map(r => Object.assign(new Booking_details(r.customerName,r.checkIn,r.checkOut,r.roomNumber,r.bookingTime)))
        
    }
    catch (err) {
        console.log("-----------No saved data found!------------")
        console.log("Here, the error is ----------->", err)
        
    }
}
await loadData()

function validCheckDates(checkIn, checkOut) {
    if (checkIn > checkOut) {
        throw new Error("Check In date must be smaller than Check Out!")
    }

}

function View_Rooms() {
    for (let i in room) {
        console.log("Room Number: ", room[i].roomNumber, "| Room Type: ", room[i].type, "| Room Availability: ", room[i].Available, "| Room Price: ", room[i].pricePerNight)
    }

}
let a, b, c, d ,f
function Booking_a_Room() {
    a= prompt("Enter customer name: ")
    b = prompt("Enter check in date: ")
    c = prompt("Enter check out date: ")
    d = prompt("Enter a room number: ")
    f=prompt("Enter the Booking Time in format(HH:MM:SS): ")
}



function View_Bookings() {
    for (let i in bookings) {
        console.log("Customer Name ", bookings[i].customerName, "| Check-In date: ", bookings[i].checkIn, "| Check-out date: ", bookings[i].checkOut,"| Room Number: ", bookings[i].roomNumber, "| Booking Time: ",bookings[i].bookingTime)
    }
}

async function delete_bookings(){
    let f= prompt("Enter room Number: ")
    await loadData()
    bookings = bookings.filter((r)=>{
        if(r.roomNumber!=f){
            return true
        }
        else{
            return false
        }
    })
    for(let i in room){
        if(room[i].roomNumber==f){
            room[i].Available=true;
        }
    }
    await saveData()
    console.log("------------Delete Booking Successfully!----------------")

}

while(true){
    console.log("1. View Rooms")
    console.log("2. Book a room")
    console.log("3. View Bookings")
    console.log("4. Delete Bookings")
    console.log("5. Exit")
    let answer = prompt("Choose an option: ")
    if (answer == 1) {
        await loadData()
        View_Rooms()
       
    }
    else if (answer == 2) {

        
        Booking_a_Room()
        Booking_Room(a, b, c, d,f)
        await saveData()

    }
    else if (answer == 3) {
        await loadData()
        View_Bookings()
        
        
    }
    else if(answer==4){
        await delete_bookings()
    }
    else if (answer == 5) {
        break;
    }
    else {
        console.log("--------------Please write a valid number!--------------")
    }
}

console.log("-------------Leaving a Hotel!---------------")








