export class Task {
    category: string;
    title: string;
    priority: number;
    estimate: number;
    spent: number = this.spent || 0;
    remaining: number = this.estimate || this.remaining;
    //  constructor(public category: string, public title: string, public priority: number, public estimate: number, public spent?: number, public remaining?: number) {
    //     this.spent = this.spent || 0;
    //     this.remaining = this.estimate - this.spent;
    // }

    // private track(hours: number): void {
    //     if (hours > 0) {
    //         this.spent = hours;
    //         this.remaining = Math.max(this.estimate - this.spent, 0);

    //     }
    // }
    // done(): boolean {
    //     return this.remaining == 0 ? true : false;
    // }
    // private complete(): void {
    //     this.remaining = 0;
    // }

}