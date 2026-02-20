import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2331 } from "./fragment2331";
import type { FragmentToken2332 } from "./fragment2332";

export const FRAGMENT_2333 = gql(`
  fragment Fragment2333 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult2333 = ResultOf<typeof FRAGMENT_2333>;
type FragmentSelf2333 = NonNullable<FragmentResult2333>;

export type FragmentToken2333 =
  | FragmentSelf2333["__typename"]
  | FragmentSelf2333["typenameHint"] | FragmentToken2331 | FragmentToken2332;
