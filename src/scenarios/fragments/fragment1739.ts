import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1737 } from "./fragment1737";
import type { FragmentToken1738 } from "./fragment1738";

export const FRAGMENT_1739 = gql(`
  fragment Fragment1739 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult1739 = ResultOf<typeof FRAGMENT_1739>;
type FragmentSelf1739 = NonNullable<FragmentResult1739>;

export type FragmentToken1739 =
  | FragmentSelf1739["__typename"]
  | FragmentSelf1739["typenameHint"] | FragmentToken1737 | FragmentToken1738;
