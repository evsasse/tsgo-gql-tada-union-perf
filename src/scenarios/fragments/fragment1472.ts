import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1470 } from "./fragment1470";
import type { FragmentToken1471 } from "./fragment1471";

export const FRAGMENT_1472 = gql(`
  fragment Fragment1472 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult1472 = ResultOf<typeof FRAGMENT_1472>;
type FragmentSelf1472 = NonNullable<FragmentResult1472>;

export type FragmentToken1472 =
  | FragmentSelf1472["__typename"]
  | FragmentSelf1472["typenameHint"] | FragmentToken1470 | FragmentToken1471;
