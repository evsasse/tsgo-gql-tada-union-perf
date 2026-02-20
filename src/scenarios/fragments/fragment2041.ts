import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2039 } from "./fragment2039";
import type { FragmentToken2040 } from "./fragment2040";

export const FRAGMENT_2041 = gql(`
  fragment Fragment2041 on Member80 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_80
    memberCount_80
    memberMetric_80
  }
`);

type FragmentResult2041 = ResultOf<typeof FRAGMENT_2041>;
type FragmentSelf2041 = NonNullable<FragmentResult2041>;

export type FragmentToken2041 =
  | FragmentSelf2041["__typename"]
  | FragmentSelf2041["typenameHint"] | FragmentToken2039 | FragmentToken2040;
