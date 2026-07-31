"use client";

import { useEffect, useState } from "react";
import { getInvoices, downloadInvoice } from "../../actions";
import { Card } from "@repo/design-system/ui/card";
import { Button } from "@repo/design-system/ui/button";
import { Loader2, Download } from "lucide-react";

interface Invoice {
  id: string;
  number?: string;
  date?: string;
  amount?: number;
  status?: string;
  pdfUrl?: string;
}

interface InvoicesListProps {
  stripeCustomerId: string;
}

export function InvoicesList({ stripeCustomerId }: InvoicesListProps) {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchInvoices() {
      try {
        const result = await getInvoices(stripeCustomerId);
        setInvoices(result.invoices || []);
      } catch (error) {
        console.error("Failed to fetch invoices:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchInvoices();
  }, [stripeCustomerId]);

  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Invoices</h3>
          <p className="text-sm text-muted-foreground mt-1">
            View and download your invoices
          </p>
        </div>

        {invoices.length === 0 ? (
          <p className="text-sm text-muted-foreground py-8 text-center">
            No invoices yet
          </p>
        ) : (
          <div className="space-y-2">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <p className="text-sm font-medium">
                    Invoice {invoice.number}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(invoice.date || "").toLocaleDateString()} •{" "}
                    ${invoice.amount}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => downloadInvoice(invoice.id)}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
