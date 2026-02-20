import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2312 } from "./fragment2312";
import type { FragmentToken2313 } from "./fragment2313";

export const FRAGMENT_2314 = gql(`
  fragment Fragment2314 on Member73 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_73
    memberCount_73
    memberMetric_73
  }
`);

type FragmentResult2314 = ResultOf<typeof FRAGMENT_2314>;
type FragmentSelf2314 = NonNullable<FragmentResult2314>;

export type FragmentToken2314 =
  | FragmentSelf2314["__typename"]
  | FragmentSelf2314["typenameHint"] | FragmentToken2312 | FragmentToken2313;
