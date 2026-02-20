import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2927 } from "./fragment2927";
import type { FragmentToken2928 } from "./fragment2928";

export const FRAGMENT_2929 = gql(`
  fragment Fragment2929 on Member128 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_128
    memberCount_128
    memberMetric_128
  }
`);

type FragmentResult2929 = ResultOf<typeof FRAGMENT_2929>;
type FragmentSelf2929 = NonNullable<FragmentResult2929>;

export type FragmentToken2929 =
  | FragmentSelf2929["__typename"]
  | FragmentSelf2929["typenameHint"] | FragmentToken2927 | FragmentToken2928;
