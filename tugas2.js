const start = '08:52:45'
const timeScnd = 5000
const tiba = '12:15:10'

//**  Soal 1 **//

const result1 = (start, timeScnd) => {
    const [hours, minutes, seconds] = start.split(':').map(Number)

    const startSeconds = hours * 3600 + minutes * 60 + seconds
    const resSeconds = startSeconds + timeScnd
    const newHours = Math.floor(resSeconds / 3600).toString().padStart(2, '0')
    const newMinutes = Math.floor((resSeconds % 3600) / 60).toString().padStart(2, '0')
    const newSeconds = Math.floor(resSeconds % 60).toString().padStart(2, '0')

    return `${newHours}:${newMinutes}:${newSeconds}`
}

console.log('Jika lama perjalanan selama ' + timeScnd + ' detik dan berangkat pada pukul ' + start + ' maka dia akan tiba pada pukul:', result1(start, timeScnd))

//**  Soal 2 **//

const result2 = (start, tiba) => {
    const [hours, minutes, seconds] = start.split(':').map(Number)
    const [tibaHours, tibaMinutes, tibaSeconds] = tiba.split(':').map(Number)

    const startSeconds = hours * 3600 + minutes * 60 + seconds
    const tibaSecond = tibaHours * 3600 + tibaMinutes * 60 + tibaSeconds

    const selisih = tibaSecond - startSeconds

    const newHours = Math.floor(selisih / 3600).toString().padStart(2, '0')
    const newMinutes = Math.floor((selisih % 3600) / 60).toString().padStart(2, '0')
    const newSeconds = Math.floor(selisih % 60).toString().padStart(2, '0')

    return `${newHours}:${newMinutes}:${newSeconds}`
}

console.log('Jika dia berangkat pada pukul ' + start + ' dan tiba pada pukul ' + tiba + ' maka lama perjalanan adalah:', result2(start, tiba))