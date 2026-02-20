import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1534 } from "./fragment1534";
import type { FragmentToken1535 } from "./fragment1535";

export const FRAGMENT_1536 = gql(`
  fragment Fragment1536 on Member135 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_135
    memberCount_135
    memberMetric_135
  }
`);

type FragmentResult1536 = ResultOf<typeof FRAGMENT_1536>;
type FragmentSelf1536 = NonNullable<FragmentResult1536>;

export type FragmentToken1536 =
  | FragmentSelf1536["__typename"]
  | FragmentSelf1536["typenameHint"] | FragmentToken1534 | FragmentToken1535;
