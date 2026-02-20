import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1658 } from "./fragment1658";
import type { FragmentToken1659 } from "./fragment1659";

export const FRAGMENT_1660 = gql(`
  fragment Fragment1660 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult1660 = ResultOf<typeof FRAGMENT_1660>;
type FragmentSelf1660 = NonNullable<FragmentResult1660>;

export type FragmentToken1660 =
  | FragmentSelf1660["__typename"]
  | FragmentSelf1660["typenameHint"] | FragmentToken1658 | FragmentToken1659;
