import { Card, Button, Input, Chip, Pagination } from "@heroui/react";

import {
  Search,
  MapPin,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { getCompanies } from "@/lib/api/companies";
import Image from "next/image";

export default async function CompaniesPage() {
  const companiesData = await getCompanies();

  // Prevent "Cannot read properties of undefined (reading 'map')"
  const companies = Array.isArray(companiesData) ? companiesData : [];

  const approvedCompanies = companies.filter(
    (company) => company?.status?.toLowerCase() === "approved",
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold tracking-tight mb-3">
            Browse Companies
          </h1>

          <p className="text-zinc-400 max-w-3xl text-lg">
            Discover the world&apos;s leading technology and creative
            organizations. Filter by industry, size, and values to find your
            next professional home.
          </p>
        </div>

        {/* Search */}
        <Card className="bg-[#111111] border border-white/10 mb-12">
          <Card.Content className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                startcontent={<Search size={18} />}
                placeholder="Search by name, industry, or location..."
                className="flex-1"
              />

              <Button
                className="bg-white text-black font-medium px-8"
                radius="md"
              >
                Find Companies
              </Button>
            </div>
          </Card.Content>
        </Card>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {approvedCompanies?.map((company) => (
            <Card
              key={company._id}
              className="bg-[#111111] border border-white/10 hover:border-white/20 transition-all"
            >
              <Card.Content className="p-5">
                {/* Top */}
                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <Chip
                    color="success"
                    variant="flat"
                    size="sm"
                    className="font-medium"
                  >
                    VERIFIED
                  </Chip>

                </div>

                {/* Company Name */}
                <h2 className="text-2xl font-semibold mb-3">{company.name}</h2>

                {/* Description */}
                <p className="text-zinc-400 text-sm line-clamp-3 min-h-18 mb-3">
                  {company.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  <Chip
                    size="sm"
                    variant="bordered"
                    startcontent={<Briefcase size={12} />}
                  >
                    {company.industry}
                  </Chip>

                  <Chip
                    size="sm"
                    variant="bordered"
                    startcontent={<MapPin size={12} />}
                  >
                    {company.location}
                  </Chip>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-6"></div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <p className="text-zinc-300">
                    {company.jobCount || 0} Active Jobs
                  </p>

                  <Button
                    variant="light"
                    endContent={<ArrowRight size={16} />}
                    className="text-white"
                  >
                    View Openings
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-14">
          <Pagination total={6} initialpage={1} showcontrols="true" color="default" />
        </div>
      </div>
    </div>
  );
}
