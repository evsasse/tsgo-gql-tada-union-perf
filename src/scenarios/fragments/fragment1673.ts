import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1671 } from "./fragment1671";
import type { FragmentToken1672 } from "./fragment1672";

export const FRAGMENT_1673 = gql(`
  fragment Fragment1673 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult1673 = ResultOf<typeof FRAGMENT_1673>;
type FragmentSelf1673 = NonNullable<FragmentResult1673>;

export type FragmentToken1673 =
  | FragmentSelf1673["__typename"]
  | FragmentSelf1673["typenameHint"] | FragmentToken1671 | FragmentToken1672;
