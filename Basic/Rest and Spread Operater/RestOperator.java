public class RestOperator {
    public static void main(String[] args) {
        System.out.println(new RestOperator().sum(1,2,3));
        System.out.println(new RestOperator().sum(1,2,3,4,5));
    }
    public int sum(int... params){
        int ans = 0;
        for(int i : params){
            ans +=i;
        }
        return ans;
    }

    /**跟上面一个吊样的**/
    public int sum2(int[] params){
        int ans = 0;
        for(int i : params){
            ans +=i;
        }
        return ans;
    }
}
