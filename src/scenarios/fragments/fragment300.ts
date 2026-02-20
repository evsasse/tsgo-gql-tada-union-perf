import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken298 } from "./fragment298";
import type { FragmentToken299 } from "./fragment299";

export const FRAGMENT_300 = gql(`
  fragment Fragment300 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult300 = ResultOf<typeof FRAGMENT_300>;
type FragmentSelf300 = NonNullable<FragmentResult300>;

export type FragmentToken300 =
  | FragmentSelf300["__typename"]
  | FragmentSelf300["typenameHint"] | FragmentToken298 | FragmentToken299;
