import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2366 } from "./fragment2366";
import type { FragmentToken2367 } from "./fragment2367";

export const FRAGMENT_2368 = gql(`
  fragment Fragment2368 on Member127 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_127
    memberCount_127
    memberMetric_127
  }
`);

type FragmentResult2368 = ResultOf<typeof FRAGMENT_2368>;
type FragmentSelf2368 = NonNullable<FragmentResult2368>;

export type FragmentToken2368 =
  | FragmentSelf2368["__typename"]
  | FragmentSelf2368["typenameHint"] | FragmentToken2366 | FragmentToken2367;
