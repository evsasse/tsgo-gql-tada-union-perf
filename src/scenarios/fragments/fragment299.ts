import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken297 } from "./fragment297";
import type { FragmentToken298 } from "./fragment298";

export const FRAGMENT_299 = gql(`
  fragment Fragment299 on Member18 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_18
    memberCount_18
    memberMetric_18
  }
`);

type FragmentResult299 = ResultOf<typeof FRAGMENT_299>;
type FragmentSelf299 = NonNullable<FragmentResult299>;

export type FragmentToken299 =
  | FragmentSelf299["__typename"]
  | FragmentSelf299["typenameHint"] | FragmentToken297 | FragmentToken298;
