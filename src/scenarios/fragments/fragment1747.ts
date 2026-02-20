import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1745 } from "./fragment1745";
import type { FragmentToken1746 } from "./fragment1746";

export const FRAGMENT_1747 = gql(`
  fragment Fragment1747 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult1747 = ResultOf<typeof FRAGMENT_1747>;
type FragmentSelf1747 = NonNullable<FragmentResult1747>;

export type FragmentToken1747 =
  | FragmentSelf1747["__typename"]
  | FragmentSelf1747["typenameHint"] | FragmentToken1745 | FragmentToken1746;
