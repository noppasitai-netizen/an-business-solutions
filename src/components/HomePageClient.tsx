"use client";

import React, { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Team from "@/components/Team";
import InteractiveEstimator, { EstimatorResult } from "@/components/InteractiveEstimator";
import TaxRiskChecker, { RiskResult } from "@/components/TaxRiskChecker";
import AIWorkflowDemo from "@/components/AIWorkflowDemo";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import DeadlineReminder from "@/components/DeadlineReminder";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import DashboardPreview from "@/components/DashboardPreview";
import FAQ from "@/components/FAQ";
import LocationContact from "@/components/LocationContact";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FloatingLineButton from "@/components/FloatingLineButton";

export default function HomePageClient() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [estimatorData, setEstimatorData] = useState<EstimatorResult | null>(null);
  const [riskResult, setRiskResult] = useState<RiskResult | null>(null);

  const handleEstimateComplete = useCallback((result: EstimatorResult) => {
    setEstimatorData(result);
    setSelectedPackage(result.recommendedPackage);
  }, []);

  const handleRiskComplete = useCallback((result: RiskResult) => {
    setRiskResult(result);
  }, []);

  const handleSelectPackage = useCallback((packageName: string) => {
    setSelectedPackage(packageName);
  }, []);

  return (
    <>
      <Header />

      <main className="flex-1 w-full">
        <Hero />
        <TrustBar />
        <Team />
        <Services />
        <AIWorkflowDemo />
        <InteractiveEstimator onEstimateComplete={handleEstimateComplete} />
        <TaxRiskChecker onCheckComplete={handleRiskComplete} />
        <Pricing onSelectPackage={handleSelectPackage} />
        <DeadlineReminder />
        <DashboardPreview />
        <Industries />
        <Process />
        <FAQ />
        <LocationContact />
        <LeadForm
          prefilledPackage={selectedPackage}
          prefilledEstimatorData={estimatorData}
          prefilledRiskResult={riskResult}
        />
      </main>

      <Footer />
      <FloatingLineButton />
      <StickyMobileCTA />
    </>
  );
}
