import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2905 } from "./fragment2905";
import type { FragmentToken2906 } from "./fragment2906";

export const FRAGMENT_2907 = gql(`
  fragment Fragment2907 on Member106 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_106
    memberCount_106
    memberMetric_106
  }
`);

type FragmentResult2907 = ResultOf<typeof FRAGMENT_2907>;
type FragmentSelf2907 = NonNullable<FragmentResult2907>;

export type FragmentToken2907 =
  | FragmentSelf2907["__typename"]
  | FragmentSelf2907["typenameHint"] | FragmentToken2905 | FragmentToken2906;
