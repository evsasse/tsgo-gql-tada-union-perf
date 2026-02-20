import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1475 } from "./fragment1475";
import type { FragmentToken1476 } from "./fragment1476";

export const FRAGMENT_1477 = gql(`
  fragment Fragment1477 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult1477 = ResultOf<typeof FRAGMENT_1477>;
type FragmentSelf1477 = NonNullable<FragmentResult1477>;

export type FragmentToken1477 =
  | FragmentSelf1477["__typename"]
  | FragmentSelf1477["typenameHint"] | FragmentToken1475 | FragmentToken1476;
