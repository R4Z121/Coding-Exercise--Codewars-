public class App {
    public static void main(String[] args) throws Exception {
        // Kata Source : https://www.codewars.com/kata/57a1d5ef7cb1f3db590002af
        System.out.println(fib(4));
    }

    public static long fib(int n) {
        // code here
        int[] fibonacciList = new int[n + 1];
        fibonacciList[0] = 0;
        fibonacciList[1] = 1;

        for (int i = 2; i <= n; i++) {
            fibonacciList[i] = fibonacciList[i - 1] + fibonacciList[i - 2];
        }
        return fibonacciList[n];
    }
}
