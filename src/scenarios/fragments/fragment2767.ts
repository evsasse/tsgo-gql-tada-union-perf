import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2765 } from "./fragment2765";
import type { FragmentToken2766 } from "./fragment2766";

export const FRAGMENT_2767 = gql(`
  fragment Fragment2767 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult2767 = ResultOf<typeof FRAGMENT_2767>;
type FragmentSelf2767 = NonNullable<FragmentResult2767>;

export type FragmentToken2767 =
  | FragmentSelf2767["__typename"]
  | FragmentSelf2767["typenameHint"] | FragmentToken2765 | FragmentToken2766;
