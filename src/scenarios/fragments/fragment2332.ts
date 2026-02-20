import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2330 } from "./fragment2330";
import type { FragmentToken2331 } from "./fragment2331";

export const FRAGMENT_2332 = gql(`
  fragment Fragment2332 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult2332 = ResultOf<typeof FRAGMENT_2332>;
type FragmentSelf2332 = NonNullable<FragmentResult2332>;

export type FragmentToken2332 =
  | FragmentSelf2332["__typename"]
  | FragmentSelf2332["typenameHint"] | FragmentToken2330 | FragmentToken2331;
