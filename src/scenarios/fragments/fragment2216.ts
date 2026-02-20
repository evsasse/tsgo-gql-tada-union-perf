import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2214 } from "./fragment2214";
import type { FragmentToken2215 } from "./fragment2215";

export const FRAGMENT_2216 = gql(`
  fragment Fragment2216 on Member255 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_255
    memberCount_255
    memberMetric_255
  }
`);

type FragmentResult2216 = ResultOf<typeof FRAGMENT_2216>;
type FragmentSelf2216 = NonNullable<FragmentResult2216>;

export type FragmentToken2216 =
  | FragmentSelf2216["__typename"]
  | FragmentSelf2216["typenameHint"] | FragmentToken2214 | FragmentToken2215;
