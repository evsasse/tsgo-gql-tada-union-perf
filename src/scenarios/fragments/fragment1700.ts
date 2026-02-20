import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1698 } from "./fragment1698";
import type { FragmentToken1699 } from "./fragment1699";

export const FRAGMENT_1700 = gql(`
  fragment Fragment1700 on Member19 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_19
    memberCount_19
    memberMetric_19
  }
`);

type FragmentResult1700 = ResultOf<typeof FRAGMENT_1700>;
type FragmentSelf1700 = NonNullable<FragmentResult1700>;

export type FragmentToken1700 =
  | FragmentSelf1700["__typename"]
  | FragmentSelf1700["typenameHint"] | FragmentToken1698 | FragmentToken1699;
