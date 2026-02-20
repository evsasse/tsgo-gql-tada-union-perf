import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2917 } from "./fragment2917";
import type { FragmentToken2918 } from "./fragment2918";

export const FRAGMENT_2919 = gql(`
  fragment Fragment2919 on Member118 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_118
    memberCount_118
    memberMetric_118
  }
`);

type FragmentResult2919 = ResultOf<typeof FRAGMENT_2919>;
type FragmentSelf2919 = NonNullable<FragmentResult2919>;

export type FragmentToken2919 =
  | FragmentSelf2919["__typename"]
  | FragmentSelf2919["typenameHint"] | FragmentToken2917 | FragmentToken2918;
