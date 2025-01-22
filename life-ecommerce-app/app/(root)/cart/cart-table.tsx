"use client";

import { ArrowRight, Loader, Minus, Plus } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CartTable = () => {
  return (
    <>
      <h1 className="py-4 h2-bold">Shopping Cart</h1>
      <div className="grid md:grid-cols-4 md:gap-5">
        <div className="overflow-x-auto md:col-span-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[].map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link href={`/home`} className="flex items-center">
                      <Image
                        src={
                          "https://life-cdn.lifepharmacy.com/images/products/141321-6-300x300.jpg"
                        }
                        alt={"demo"}
                        width={50}
                        height={50}
                      />
                      <span className="px-2">{"demo"}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="flex-center gap-2">
                    <Button
                      disabled={false}
                      variant="outline"
                      type="button"
                      onClick={() => {}}
                    >
                      {false ? (
                        <Loader className="w-4 h-4 animate-spin" />
                      ) : (
                        <Minus className="w-4 h-4" />
                      )}
                    </Button>
                    <span>{1}</span>
                    <Button
                      disabled={false}
                      variant="outline"
                      type="button"
                      onClick={() => {}}
                    >
                      {false ? (
                        <Loader className="w-4 h-4 animate-spin" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell className="text-right">${100} AED</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Card>
          <CardContent className="p-4 gap-4">
            <div className="pb-3 text-xl">
              Subtotal : 0 <span className="font-bold">{"Items  "}</span>
            </div>
            <Button className="w-full" disabled={false} onClick={() => {}}>
              {false ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}{" "}
              Proceed to Checkout
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CartTable;
