import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2123 } from "./fragment2123";
import type { FragmentToken2124 } from "./fragment2124";

export const FRAGMENT_2125 = gql(`
  fragment Fragment2125 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult2125 = ResultOf<typeof FRAGMENT_2125>;
type FragmentSelf2125 = NonNullable<FragmentResult2125>;

export type FragmentToken2125 =
  | FragmentSelf2125["__typename"]
  | FragmentSelf2125["typenameHint"] | FragmentToken2123 | FragmentToken2124;
