import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1101 } from "./fragment1101";
import type { FragmentToken1102 } from "./fragment1102";

export const FRAGMENT_1103 = gql(`
  fragment Fragment1103 on Member262 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_262
    memberCount_262
    memberMetric_262
  }
`);

type FragmentResult1103 = ResultOf<typeof FRAGMENT_1103>;
type FragmentSelf1103 = NonNullable<FragmentResult1103>;

export type FragmentToken1103 =
  | FragmentSelf1103["__typename"]
  | FragmentSelf1103["typenameHint"] | FragmentToken1101 | FragmentToken1102;
