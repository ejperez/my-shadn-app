import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MyAccordion() {
  function getReview() {
    return (
      <div className="flex items-center space-x-4 pt-2">
        <Skeleton className="h-12 w-12 rounded-full bg-transparent">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>EJ</AvatarFallback>
          </Avatar>
        </Skeleton>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[550px]" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Information</AccordionTrigger>
          <AccordionContent>
            <p className="py-2">Long wide sleeve off shoulder maxi dress.</p>
            <p>
              <strong>DETAILS</strong>
              <br />
              • Tieable straps at the top of the sleeves
              <br />
              • Off shoulder design
              <br />
              • Shell: 100% Rayon Lining: 100% Cotton <br />
              • 30 degree care wash <br />• Fits true to size. Model is 178 cm
              tall and is wearing size S
            </p>
            <p className="py-2">Made in Guangdong Province, China</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shipping & Returns</AccordionTrigger>
          <AccordionContent>
            <p>
              <b>
                <u>Worldwide shipping</u>
              </b>
            </p>
            <p>
              Fast and reliable shipping to all countries. Read more about your
              country shipping alternatives and days of delivery{" "}
              <a target="_self" href="/shipping-returns">
                <b>
                  <u>here</u>
                </b>
              </a>
              <b>
                <u>.</u>
              </b>
            </p>
            <p>
              <b>
                <u>Return fees</u>
              </b>
            </p>
            <p>
              For all orders within Sweden our return fee is 49 SEK / DKK / NOK.{" "}
            </p>
            <p>
              For all orders outside Sweden our return fee starts at 10 EUR /
              USD / GBP.
            </p>
            <p>
              Read more about our returns{" "}
              <a target="_self" href="/shipping-returns">
                <b>
                  <u>here</u>
                </b>
              </a>
              <b>
                <u>.</u>
              </b>
            </p>
            <p>
              <b>
                <u>Open purchase</u>
              </b>
            </p>
            <p>We offer 14 days of open purchase.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Reviews</AccordionTrigger>
          <AccordionContent>
            <p className="text-center">Customer Reviews</p>
            {getReview()}
            {getReview()}
            {getReview()}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Measurements</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-medium">cm</TableHead>
                  <TableHead>XS</TableHead>
                  <TableHead>S</TableHead>
                  <TableHead>M</TableHead>
                  <TableHead>L</TableHead>
                  <TableHead>XL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Length</TableCell>
                  <TableCell>110</TableCell>
                  <TableCell>111</TableCell>
                  <TableCell>112</TableCell>
                  <TableCell>113</TableCell>
                  <TableCell>114</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Chest</TableCell>
                  <TableCell>97</TableCell>
                  <TableCell>98</TableCell>
                  <TableCell>99</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell>101</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-xs pt-2">
              <a href="#">
                Not sure what size you need? Our size guide will help you find
                your recommended size here
              </a>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
