class DateFormatter {
    private date: Date;
  
    constructor(dateString: string) {
      this.date = new Date(dateString); // แปลงเป็น Date object
    }
  
    // แปลงวันที่เป็นรูปแบบ 'DD/MM/YYYY'
    public toDayMonthYear(): string {
      const day = this.date.getDate().toString().padStart(2, '0');
      const month = (this.date.getMonth() + 1).toString().padStart(2, '0'); // เดือนเริ่มจาก 0
      const year = this.date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  
    // แปลงวันที่เป็นรูปแบบ 'YYYY-MM-DD'
    public toISODate(): string {
      const year = this.date.getFullYear();
      const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
      const day = this.date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  
    // แปลงเวลาเป็นรูปแบบ 'HH:MM:SS'
    public toTime(): string {
      const hours = this.date.getHours().toString().padStart(2, '0');
      const minutes = this.date.getMinutes().toString().padStart(2, '0');
      const seconds = this.date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }
  
    // แปลงวันในสัปดาห์ (เช่น 'วันจันทร์', 'วันอังคาร')
    public toDayOfWeek(): string {
      const daysOfWeek = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
      return daysOfWeek[this.date.getDay()]; // getDay() คืนค่าตัวเลขจาก 0-6
    }
  
    // แปลงเป็นวันที่และเวลาในรูปแบบ 'วันจันทร์, 9 พฤษภาคม 2023 เวลา 17:00'
    public toFullDateTime(): string {
      const dayOfWeek = this.toDayOfWeek();
      const day = this.date.getDate();
      const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
      const year = this.date.getFullYear();
      const time = this.toTime();
      const monthsInThai = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
      const monthInThai = monthsInThai[this.date.getMonth()];
  
      return `${dayOfWeek}, ${day} ${monthInThai} ${year} เวลา ${time}`;
    }
  }
  
  // ตัวอย่างการใช้งาน
  //const dateFormatter = new DateFormatter('2023-05-09T17:00:00.000Z');
  
  //console.log(dateFormatter.toDayMonthYear()); // '09/05/2023'
  //console.log(dateFormatter.toISODate()); // '2023-05-09'
  //console.log(dateFormatter.toTime()); // '17:00:00'
  //console.log(dateFormatter.toDayOfWeek()); // 'อังคาร'
  //console.log(dateFormatter.toFullDateTime()); // 'อังคาร, 9 พฤษภาคม 2023 เวลา 17:00'
  