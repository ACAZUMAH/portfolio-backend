"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectVisibility_1 = require("../services/projectVisibility");
describe("toPublicProject", () => {
    it("keeps public projects intact", () => {
        const project = (0, projectVisibility_1.toPublicProject)({
            id: "1",
            visibility: "PUBLIC",
            links: [{ label: "GitHub", url: "https://example.com" }],
            lessons: ["Ship in slices"],
        });
        expect(project?.links).toHaveLength(1);
        expect(project?.lessons).toEqual(["Ship in slices"]);
    });
    it("removes sensitive public fields from private summaries", () => {
        const project = (0, projectVisibility_1.toPublicProject)({
            id: "2",
            visibility: "PRIVATE_SUMMARY",
            links: [{ label: "Private", url: "https://private.example.com" }],
            mediaIds: ["screenshot"],
            lessons: ["Internal detail"],
        });
        expect(project?.links).toEqual([]);
        expect(project?.mediaIds).toEqual([]);
        expect(project?.lessons).toEqual([]);
    });
    it("protects password-protected case study details", () => {
        const project = (0, projectVisibility_1.toPublicProject)({
            id: "3",
            visibility: "PASSWORD_PROTECTED",
            problem: "Sensitive problem",
            outcomes: ["Sensitive outcome"],
            caseStudySections: [{ title: "Private", body: "Private", order: 1 }],
        });
        expect(project?.problem).toBe("Detailed case study is protected.");
        expect(project?.outcomes).toEqual([]);
        expect(project?.caseStudySections).toEqual([]);
    });
});
