import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1536 } from "./fragment1536";
import type { FragmentToken1537 } from "./fragment1537";

export const FRAGMENT_1538 = gql(`
  fragment Fragment1538 on Member137 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_137
    memberCount_137
    memberMetric_137
  }
`);

type FragmentResult1538 = ResultOf<typeof FRAGMENT_1538>;
type FragmentSelf1538 = NonNullable<FragmentResult1538>;

export type FragmentToken1538 =
  | FragmentSelf1538["__typename"]
  | FragmentSelf1538["typenameHint"] | FragmentToken1536 | FragmentToken1537;
