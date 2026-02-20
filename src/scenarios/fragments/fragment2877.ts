import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2875 } from "./fragment2875";
import type { FragmentToken2876 } from "./fragment2876";

export const FRAGMENT_2877 = gql(`
  fragment Fragment2877 on Member76 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_76
    memberCount_76
    memberMetric_76
  }
`);

type FragmentResult2877 = ResultOf<typeof FRAGMENT_2877>;
type FragmentSelf2877 = NonNullable<FragmentResult2877>;

export type FragmentToken2877 =
  | FragmentSelf2877["__typename"]
  | FragmentSelf2877["typenameHint"] | FragmentToken2875 | FragmentToken2876;
