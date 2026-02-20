import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2940 } from "./fragment2940";
import type { FragmentToken2941 } from "./fragment2941";

export const FRAGMENT_2942 = gql(`
  fragment Fragment2942 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult2942 = ResultOf<typeof FRAGMENT_2942>;
type FragmentSelf2942 = NonNullable<FragmentResult2942>;

export type FragmentToken2942 =
  | FragmentSelf2942["__typename"]
  | FragmentSelf2942["typenameHint"] | FragmentToken2940 | FragmentToken2941;
