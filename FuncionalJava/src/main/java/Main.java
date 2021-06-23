import java.util.function.BiFunction;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;

public class Main {

    public static void main(String[] args) {
        //LLamo los metodos
        System.out.println(suma(5,5));
        System.out.println(resta(8,1));
        System.out.println(multiplacion.apply(3,4));
    }

    public static Integer suma(Integer numero1, Integer numero2){
        return numero1 + numero2;
    }

    public static Integer resta(Integer numero1, Integer numero2){
        return numero1 - numero2;
    }

   public static BiFunction<Integer,Integer,Integer> sum = (numero1,numero2)->{
      return numero1+numero2;
    };

    public static BiFunction<Integer,Integer,Integer> multiplacion = (numero1,numero2)-> IntStream.range(0,numero2+1)
            .reduce((acumulador,number1)->sum.apply(acumulador,numero1)).getAsInt();
}
