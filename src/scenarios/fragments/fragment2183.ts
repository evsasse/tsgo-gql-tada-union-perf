import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2181 } from "./fragment2181";
import type { FragmentToken2182 } from "./fragment2182";

export const FRAGMENT_2183 = gql(`
  fragment Fragment2183 on Member222 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_222
    memberCount_222
    memberMetric_222
  }
`);

type FragmentResult2183 = ResultOf<typeof FRAGMENT_2183>;
type FragmentSelf2183 = NonNullable<FragmentResult2183>;

export type FragmentToken2183 =
  | FragmentSelf2183["__typename"]
  | FragmentSelf2183["typenameHint"] | FragmentToken2181 | FragmentToken2182;
