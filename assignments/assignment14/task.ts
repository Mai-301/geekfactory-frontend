export class Task {
    constructor(public category: string, public title: string, public priority: number, public estimate: number, public spent?: number, public remaining?: number) {
        this.spent = this.spent || 0;
        this.remaining = this.remaining || this.estimate;
    }
    private track(hours: number): void {
        if (hours > 0) {
            this.spent += hours;
            this.remaining = Math.max(this.remaining - hours, 0);
        }
    }
    private done() {
        return this.remaining == 0 ? true : false;
    }
    private complete(): void {
        this.remaining = 0;
    }
}