public class Params {
    public static void main(String[] args) {
        new Params().cnm(2);//这里就改了，变成2了，JS就铁定改不了
    }
    int k = 1;
    public void cnm(int k){
        this.k = k;
        System.out.println(k);
    }
}
