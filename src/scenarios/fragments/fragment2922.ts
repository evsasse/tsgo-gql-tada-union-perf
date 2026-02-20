import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2920 } from "./fragment2920";
import type { FragmentToken2921 } from "./fragment2921";

export const FRAGMENT_2922 = gql(`
  fragment Fragment2922 on Member121 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_121
    memberCount_121
    memberMetric_121
  }
`);

type FragmentResult2922 = ResultOf<typeof FRAGMENT_2922>;
type FragmentSelf2922 = NonNullable<FragmentResult2922>;

export type FragmentToken2922 =
  | FragmentSelf2922["__typename"]
  | FragmentSelf2922["typenameHint"] | FragmentToken2920 | FragmentToken2921;
