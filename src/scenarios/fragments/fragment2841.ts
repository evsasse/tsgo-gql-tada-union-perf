import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2839 } from "./fragment2839";
import type { FragmentToken2840 } from "./fragment2840";

export const FRAGMENT_2841 = gql(`
  fragment Fragment2841 on Member40 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_40
    memberCount_40
    memberMetric_40
  }
`);

type FragmentResult2841 = ResultOf<typeof FRAGMENT_2841>;
type FragmentSelf2841 = NonNullable<FragmentResult2841>;

export type FragmentToken2841 =
  | FragmentSelf2841["__typename"]
  | FragmentSelf2841["typenameHint"] | FragmentToken2839 | FragmentToken2840;
