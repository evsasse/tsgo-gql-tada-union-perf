import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1428 } from "./fragment1428";
import type { FragmentToken1429 } from "./fragment1429";

export const FRAGMENT_1430 = gql(`
  fragment Fragment1430 on Member29 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_29
    memberCount_29
    memberMetric_29
  }
`);

type FragmentResult1430 = ResultOf<typeof FRAGMENT_1430>;
type FragmentSelf1430 = NonNullable<FragmentResult1430>;

export type FragmentToken1430 =
  | FragmentSelf1430["__typename"]
  | FragmentSelf1430["typenameHint"] | FragmentToken1428 | FragmentToken1429;
