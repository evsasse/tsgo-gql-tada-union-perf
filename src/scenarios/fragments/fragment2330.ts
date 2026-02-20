import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2328 } from "./fragment2328";
import type { FragmentToken2329 } from "./fragment2329";

export const FRAGMENT_2330 = gql(`
  fragment Fragment2330 on Member89 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_89
    memberCount_89
    memberMetric_89
  }
`);

type FragmentResult2330 = ResultOf<typeof FRAGMENT_2330>;
type FragmentSelf2330 = NonNullable<FragmentResult2330>;

export type FragmentToken2330 =
  | FragmentSelf2330["__typename"]
  | FragmentSelf2330["typenameHint"] | FragmentToken2328 | FragmentToken2329;
