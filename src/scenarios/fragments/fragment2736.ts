import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2734 } from "./fragment2734";
import type { FragmentToken2735 } from "./fragment2735";

export const FRAGMENT_2736 = gql(`
  fragment Fragment2736 on Member215 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_215
    memberCount_215
    memberMetric_215
  }
`);

type FragmentResult2736 = ResultOf<typeof FRAGMENT_2736>;
type FragmentSelf2736 = NonNullable<FragmentResult2736>;

export type FragmentToken2736 =
  | FragmentSelf2736["__typename"]
  | FragmentSelf2736["typenameHint"] | FragmentToken2734 | FragmentToken2735;
