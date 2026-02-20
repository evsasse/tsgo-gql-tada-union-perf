import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2365 } from "./fragment2365";
import type { FragmentToken2366 } from "./fragment2366";

export const FRAGMENT_2367 = gql(`
  fragment Fragment2367 on Member126 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_126
    memberCount_126
    memberMetric_126
  }
`);

type FragmentResult2367 = ResultOf<typeof FRAGMENT_2367>;
type FragmentSelf2367 = NonNullable<FragmentResult2367>;

export type FragmentToken2367 =
  | FragmentSelf2367["__typename"]
  | FragmentSelf2367["typenameHint"] | FragmentToken2365 | FragmentToken2366;
