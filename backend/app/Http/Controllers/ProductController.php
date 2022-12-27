<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    //
    function addProduct(Request $req)
    {
        
        $validator = Validator::make($req->all(), [
            'name'=> 'required',
            'file' => 'required|mimes:jpeg,png,bmp,gif,svg|max:5048',
            'description' => 'required',
            'price' => 'required'
        ]);

        if($validator->fails()){
           
           return ["success"  => "NO"];
                
           
        }
        else{
            $product = new Product;
            $product->name = $req->input('name');
            $product->file_path = $req->file('file')->store('products');
            $product->description = $req->input('description');
            $product->price = $req->input('price');
            $product->save();
            return  $product;
        }

        
    }

    function List()
    {
        $products = Product::all();
        return $products;
    }

    function delete($id)
    {
        $result = Product::where('id',$id)->delete();
        if($result)
        {
            return ["result"=>"prduct has been deleted"];
        }
        else
        {
            return ["result"=>"Operation failed"];
        }
    }

    function getProduct($id)
    {
        return Product::find($id);
    }

    function search($key)
    {
        return Product::where('name','like','%'. $key .'%')->get();
    }
 }
    
