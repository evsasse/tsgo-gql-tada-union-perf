import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2155 } from "./fragment2155";
import type { FragmentToken2156 } from "./fragment2156";

export const FRAGMENT_2157 = gql(`
  fragment Fragment2157 on Member196 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_196
    memberCount_196
    memberMetric_196
  }
`);

type FragmentResult2157 = ResultOf<typeof FRAGMENT_2157>;
type FragmentSelf2157 = NonNullable<FragmentResult2157>;

export type FragmentToken2157 =
  | FragmentSelf2157["__typename"]
  | FragmentSelf2157["typenameHint"] | FragmentToken2155 | FragmentToken2156;
